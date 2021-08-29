import {Router} from 'express'
import {getWordsByNumber, getFilteredWords} from '../controllers/convertController'

const router:Router = Router()
router.get('/id/:id', getWordsByNumber)
router.get('/id/:id/filter', getFilteredWords)

export default router
