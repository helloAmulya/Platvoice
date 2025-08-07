import { describe } from "node:test";
import prisma from "../prisma/index.js"



import type { CreateInvoiceInput } from "../types/index.js";
import { email, includes } from "zod";



export const createInvoice = async (businessId: string, data: CreateInvoiceInput) => {
        // after adding zod to the types/index.ts, add the parse here to get the valid data



    // first see what is needed to be defined here by the schema, then create those values which will be auto created, then pass the other values. 

    // in this conroller the invoice and invoice items both are defined 


    // auto invoice number generation
    const count = await prisma.invoice.count({
        where: { businessId: businessId },
    });
    const invoiceNum = `INV-${new Date().getFullYear()}-${(count + 1)
        .toString()
        .padStart(4, "0")}`;

    // subtotal = get product quantity and their price

    const subtotal = data.items.reduce((sum, item) => sum + item.qty * item.price, 0);
    const tax = data.items.reduce((sum, item) => sum + (item.taxRate || 0) * item.qty * item.price, 0);
    const discount = data.items.reduce((sum, item) => sum + (item.discount || 0), 0);

    const total = subtotal + tax - discount;


    const invoice = await prisma.business.create({
        data: {
            businessId,
            clientId: data.clientId,
            invoiceNum,
            issueDate: new Date(),
            dueDate: new Date(data.dueDate),
            subtotal,
            tax,
            discount,
            total,
            currency: "INR",
            status: "draft",
            notes: data.notes,

            items: {
                create: data.items.map(item => ({
                    description: item.description,
                    qty: item.qty,
                    price: item.price,
                    taxRate: item.taxRate || 0,
                    discount: item.discount || 0,
                })),
            },

        },
        include: { items: true },
    });
    return invoice;
};