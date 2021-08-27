import {Router} from 'express'
import {getWordsByNumber} from '../controllers/convertController'

const router:Router = Router()
router.get('/id/:id', getWordsByNumber)

export default router
