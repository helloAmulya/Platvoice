import express from 'express'
import { createUser } from '../controllers/useControllers.js'


const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({
            error: "Failed to create user";
        })
    }
})

export default router;