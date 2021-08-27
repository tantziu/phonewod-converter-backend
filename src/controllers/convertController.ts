import {Request, Response} from 'express';

export const index = (request:Request, response:Response) => {
    response.send('<h1>Oh, hello there</h1>')
};

export const getWordsByNumber = (request:Request, response:Response) => {
    try {
        const words = ['ad', 'ae', 'af', 'bd', 'be', 'bf']
        response.status(200).json(words)
    } catch (error) {
        throw error
    }
}
