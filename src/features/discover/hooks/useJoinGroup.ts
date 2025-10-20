import { useMutation } from "@tanstack/react-query"
import { joinGroup } from "../api/joinGroup"
import type { joinGroupValues } from "../utils/schema"


export const useJoinGroup = () =>{
    const{mutateAsync, isPending, isError, error} = useMutation({
        mutationFn: (data:joinGroupValues) => joinGroup(data)
    })
    return{
        mutateAsync,
        isPending,
        isError,
        error
    }
}