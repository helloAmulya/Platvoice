import express from 'express';
import { createInvoice } from '../controllers/invoiceController.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const invoice = await createInvoice(req.body.businessId, req.body); //  businessId from auth middleware later
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create invoice' });
  }
});

export default router;