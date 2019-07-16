const defaultState = {
    data:'this is data'
}

export default (state = defaultState,action)=>{
    console.log(state,action)
    // if(action.type === 'change_home_data'){
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.data = action.value
    //     return newState
    // }
    return state
}