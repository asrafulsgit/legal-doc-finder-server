import { Router } from "express"; 
import { documentControllers } from "./document.controllers";

const router = Router();

router.post('/',documentControllers.createDocument); 
router.get('/',documentControllers.searchDocument); 

export const documentRouter = router;