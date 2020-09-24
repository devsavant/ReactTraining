import {ajax} from 'rxjs/ajax'
import {
    // ignoreElements, tap,
    map,
    switchMap,
    debounceTime,
    filter,
    catchError
} from 'rxjs/operators'
import {
    ofType
} from 'redux-observable'
import {of, concat} from 'rxjs'

const initialData = {
    name: "Guillito",
    chars:[],
    status:"idle", // idle || fetching || success
    error:null,
    contactForm:{
        firstName: 'Blissito',
        lastName: 'Campos',
        email: 'bliss@fixter.org'
    }
}

const API = "https://rickandmortyapi.com/api/character"

export default function (state = initialData, action) {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }

        case "SAVE_CHARS":
            return {...state, chars: action.payload, status: "success"}

        case "SET_STATUS":
            return {...state, status: action.payload }

        case "FETCH_FAILED":
            return {...state, status: "failure", error: action.payload}

        case "LOAD":
            return { ...state }

        case "CHANGE":
            return { ...state, contactForm: action.payload }

        default: return state;
    }
}

export function contactFormEpic(action$){
    return action$.pipe(
        ofType("POPULATE_FORM"),
        switchMap(({payload})=>{
            return of({type:"LOAD", payload})
        })
    )
}

export function updateFormEpic(action$) {
    return action$.pipe(
        ofType("CHANGE_FORM"),
        switchMap(({ payload }) => {
            return of({ type: "CHANGE", payload })
        })
    )
}

export function fetchWithQueryEpic(action$){
    return action$.pipe(
        ofType("SEARCH"),
        debounceTime(500), // sleep --> leída rxjs/operators
        filter(({payload})=>payload.trim() !== ""),
        switchMap(({payload})=>{ // access to the action | payload = name
            // if(!payload) return of({type: "NONE"})
            const QUERY = `${API}?name=${payload}` // https://rickandmortyapi.com/api/character/?name=rick&status=alive
            return concat(
                of({type: "SET_STATUS", payload:"fetching"}),
                ajax.getJSON(QUERY).pipe(
                    map(resp=>({type:"SAVE_CHARS", payload:resp.results})),
                    catchError(err=>{
                        return of({type: "FETCH_FAILED", payload: err.message})
                    })
                )
            )
        })
    )
}

// export function fetchWithQueryEpic(actions$){
//     return actions$.pipe(
//         ofType("SEARCH"),
//         debounceTime(500),
//         // filter(({payload})=>payload.trim() !== ""),
//         switchMap(({payload})=>{
//             // if(!payload) return of({type:"NONE"})
//             const QUERY = `${API}?name=${payload}` // https://rickandmortyapi.com/api/character/?name=rick&status=alive
//             return concat(
//                 of(setStatus("fetching")),
//                 ajax.getJSON(QUERY).pipe(
//                     map(resp=>({
//                         type: "SAVE_CHARS",
//                         payload: resp.results
//                     })),
//                     // catchError(err=>{
//                     //     return of({type: "FETCH_FAILED", payload: err.message})
//                     // })
//                 )
//             )
//         })
//     )
// }

export function fetchCharsEpic(){ // thunk ? sort of
    return ajax.getJSON(API).pipe(
        // tap(data=>console.log(data)),
        // ignoreElements(),
        map(resp=>({
            type: "SAVE_CHARS",
            payload: resp.results
        }))
    )
}

export function fetchCharsOnDemand(actions){ // 1.- no hay ()=>()=> 2.- actions
    return actions.pipe(
        ofType("FETCH_CHARS"), // intercept
        switchMap(()=>{
            return concat(
                of(setStatus("fetching")),
                ajax.getJSON(API).pipe( // identación
                    map(resp=>({
                        type: "SAVE_CHARS",
                        payload: resp.results
                    }))
                )
            )
        })
    )
}

function setStatus(status){
    return {type: "SET_STATUS", payload:status}
}