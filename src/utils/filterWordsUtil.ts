import {words} from '../../words'

export const filterWords = (input:string[]) => {
    return input.filter(word => words.includes(word))
}
