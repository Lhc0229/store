import { Add ,Post } from "../Type";
export  const add = (data) =>{
    return ( dispatch ) =>{
        console.log(data-1)
        dispatch({
            type:Add,
            data:data + 99
        })
    }
}
export  const post = (data) =>{
    return ( dispatch ) =>{
        console.log(data)
        dispatch({
            type:Post,
            data:data -100
        })
    }
}