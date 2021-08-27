import {Request, Response} from 'express'
import {convert} from '../utils/convertUtil'

export const getWordsByNumber = (request:Request, response:Response) => {
    try {
        const words:string[] = convert(request.params.id)
        response.status(200).json(words)
    } catch (error) {
        throw error
    }
}
