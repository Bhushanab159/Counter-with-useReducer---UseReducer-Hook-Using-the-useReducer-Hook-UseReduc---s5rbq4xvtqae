const counterReducer = (state,action) =>{
    switch (action) {
        case incrementing:
            return state + 1 ; 
        case decrementing :
            return state - 1 ;
    
        default:
            return state;
    }
}

export {counterReducer}
