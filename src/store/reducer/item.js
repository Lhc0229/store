import { Add ,Post } from "../Type";

const states = {
    pageTitle:686,
    infoList:68998
}
export  default function (state =states,action) {
    switch (action.type) {
        case Add:
            return {
                ...state,
                pageTitle:action.data
            }
        case Post:
            return {
                ...state,
                infoList:action.data
            }
        default:
            return state;
    }
}