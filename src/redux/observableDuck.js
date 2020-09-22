import {ajax} from 'rxjs/ajax'
import {ignoreElements, tap,
     map,
    switchMap,
} from 'rxjs/operators'
import {
    ofType
} from 'redux-observable'
import {of, concat} from 'rxjs'

const initialData = {
    name: "Guillito",
    chars:[],
    status:"idle" // idle || fetching || success
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
            return {...state, chars: action.payload}
        
        case "SET_STATUS":
            return {...state, status: action.payload }

        default: return state;
    }
}

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