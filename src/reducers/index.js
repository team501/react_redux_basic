export default ( state, action ) => {
    switch (action.type) {
        case "SET_TECHNOLOGY" :
            return {
                ...state,
                tech: action.tech
            };
            break;
       
        default :
            return state;
    }
    
}