const initialState = {
    displayName:"Blissito",
    email:"",
    isLoggedIn:false,
    payments:[]
}

export default (state=initialState, action) => {
    switch(action.type){
        default:
            return {...state} // inmutabilidad <--- Pilares redux
    }
}