import {v4 as uuidv4} from 'uuid'

export function getUUID(){
    let localUUID = localStorage.getItem("UUIDTOKEN")
    if(!localUUID){
        localUUID=uuidv4()
        localStorage.setItem("UUIDTOKEN",localUUID)
    }

    return localUUID
}