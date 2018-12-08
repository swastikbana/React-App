import { GET_QUOTE} from "../Actions";

export default function(state={},action){
    switch(action.type){
        case GET_QUOTE :            
            return {...state, ...action.payload};
        default:
            return state;
    }

}