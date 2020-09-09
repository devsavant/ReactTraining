const initialState = {
    array:[],
    obj:{},
    count:0,
    page:1
}

export default (state=initialState, action) => {
    switch(action.type){
        default:
            return {...state} // inmutabilidad <--- Pilares redux
    }
}