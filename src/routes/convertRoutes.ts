import {Router} from 'express'
import {index, getWordsByNumber} from '../controllers/convertController'

const router:Router = Router()
router.get('/', index)
router.get('/id/:id', getWordsByNumber)

export default router
