import {
    TOGGOLE_AUTH
} from "./types"

export const AuthReducer = (state, action) => {
    const {type} = action
    switch (type){
        case TOGGOLE_AUTH:
            return !state
        default:
            return state
    }
}