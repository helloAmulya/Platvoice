# Gemini To-Do List: Activating Your Backend

This file is your checklist to enable the new authentication and validation features. Follow these steps in order.

### Step 1: Install Dependencies

Your new code requires several packages. Run this command in your `/api` directory:

```bash
npm install jsonwebtoken bcryptjs zod cors
npm install @types/jsonwebtoken @types/bcryptjs @types/cors --save-dev
```

### Step 2: Configure Environment Variables

For security, your JWT needs a secret key. Add this line to your `api/.env` file:

```
JWT_SECRET="YOUR_REALLY_STRONG_SECRET_KEY_HERE"
```

### Step 3: Uncomment the Code (In Order)

Uncomment the code in the following files. It's best to do it in this order to avoid errors.

1.  **`api/src/schemas/userSchemas.ts`**: Uncomment the Zod schemas.
2.  **`api/src/schemas/businessSchemas.ts`**: Uncomment the Zod schemas.
3.  **`api/src/schemas/invoiceSchemas.ts`**: Uncomment the Zod schemas.
4.  **`api/src/utils/auth.ts`**: Uncomment the password hashing and JWT functions.
5.  **`api/src/middlewares/auth.ts`**: Uncomment the authentication middleware.
6.  **`api/src/controllers/authController.ts`**: Uncomment the `register` and `login` functions.

### Step 4: Update Your Routes

Now, let's activate the new authentication endpoints and protect the existing ones.

1.  **In `api/src/routes/userRoutes.ts`**:
    *   Uncomment the imports for `register` and `login`.
    *   Uncomment the new `/register` and `/login` routes.
    *   **IMPORTANT**: You should now **remove** the old `router.post('/signup', ...)` block, as its logic is now handled properly by the `register` function in `authController.ts`.

2.  **In `api/src/routes/businessRoutes.ts`**:
    *   Uncomment the import for `authMiddleware`.
    *   Uncomment the `router.use(authMiddleware);` line to protect all business-related routes.

3.  **In `api/src/routes/invoiceRoutes.ts`**:
    *   Uncomment the import for `authMiddleware`.
    *   Uncomment the `router.use(authMiddleware);` line to protect all invoice-related routes.

### Step 5: Update the Main Server File

Finally, you need to tell your main Express app to use the new routes and CORS.

**In `api/src/index.ts`**:

1.  Add the following import at the top:
    ```typescript
    import cors from 'cors';
    ```
2.  Add the CORS middleware right after creating the app instance:
    ```typescript
    const app = express();
    app.use(cors()); // Add this line
    app.use(express.json());
    ```
3.  You will need to import your `userRoutes` and tell the app to use them. If you haven't already, add:
    ```typescript
    import userRoutes from './routes/userRoutes';
    // ... other route imports

    app.use('/api/users', userRoutes);
    // ... other app.use for routes
    ```

After completing these steps, your backend will have a fully functional and secure authentication system. Let me know when you're ready to tackle the final items on your `pending.md` list.
