import express from 'express';
import { createInvoice } from '../controllers/invoiceController.js';

// /*
// import { authMiddleware } from '../middlewares/auth';
// */

const router = express.Router();

// /*
// router.use(authMiddleware);
// */

router.post('/', async (req, res) => {
  try {
    const invoice = await createInvoice(req.body.businessId, req.body); //  businessId from auth middleware later
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create invoice' });
  }
});

export default router;