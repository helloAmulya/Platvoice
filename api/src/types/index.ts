
export interface CreateUserInput {
    email: string;
    password: string;
    name?: string;
}

export interface CreateBusinessInput {
    name: string;
    phone: string;
    address: string;
    email: string;
    logo?: string;
    currency?: string;
}


export interface CreateInvoiceInput {
    clientId?: string;
    dueDate: string;
    items: { description: string; qty: number; price: number; taxRate?: number; discount?: number }[];
    notes: string;
}