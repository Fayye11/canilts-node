import { Router, Request, Response} from "express";
import * as PageControllers from '../controllers/homeController'
import * as searchControllers from '../controllers/searchController'
const router = Router()

router.get('/', PageControllers.home)
router.get('/dogs', PageControllers.dogs)
router.get('/cats', PageControllers.cats)
router.get('/fish', PageControllers.fish)
router.get('/search', searchControllers.search)

export default router