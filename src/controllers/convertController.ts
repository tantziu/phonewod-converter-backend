import {Request, Response} from 'express'
import {convert} from '../utils/convertUtil'
import {filterWords} from '../utils/filterWordsUtil'

export const getWordsByNumber = (request:Request, response:Response) => {
    try {
        const words:string[] = convert(request.params.id)
        response.status(200).json(words)
    } catch (error) {
        throw error
    }
}

export const getFilteredWords = (request:Request, response:Response) => {
    try {
        const words:string[] = convert(request.params.id)
        let intersection = filterWords(words)
        response.status(200).json(intersection)
    } catch(error) {
        throw error
    }
}
