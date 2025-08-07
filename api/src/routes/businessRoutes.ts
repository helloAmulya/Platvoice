import express from 'express'
import { createBusiness } from '../controllers/businessController.js'

// /*
// import { authMiddleware } from '../middlewares/auth';
// */

const router = express.Router()

// /*
// router.use(authMiddleware);
// */

router.post('/', async (req, res) => {
    try {
        const business = await createBusiness(req.body.userId, req.body); //  userId from auth middleware later
        res.status(201).json(business);

    } catch (error) {
        res.status(500).json({
            error: "Failed to create user"
        })
    }
})

export default router;