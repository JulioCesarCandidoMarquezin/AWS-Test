import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export function useSendMail(){
    const { mutate, isSuccess, isError }  = useMutation({
        mutationFn: (data: { email: string, name: string }) => {
          return axios.post('https://f2wdnfj643gmxhglu7bm32z7uy0lfymz.lambda-url.sa-east-1.on.aws/', data)
        },
    })

    return {
        mutate,
        isSuccess,
        isError
    }
}