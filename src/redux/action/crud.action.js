import { DELETE_USER, CREATE_USER } from "./crud.type";


export const deleteUser = (userDelete) => {
    return { type: DELETE_USER, payload: userDelete }
}

export const createUser = () => {
    return {type: CREATE_USER}
}