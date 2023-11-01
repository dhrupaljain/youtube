export default reducer = (state=0, action)=> {
 if(action.type == 'search'){
    return state + action.payload
 }   
}