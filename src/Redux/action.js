import {DELETE , DONE } from './action-type'

export const deleteHandler = (ID) =>{
    return {
        type:DELETE,
        payload:ID
    }
}
export const doneHandler = () =>{
    return {
        type:DONE
    }
}