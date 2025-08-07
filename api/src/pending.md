
1. add the zod schema to types/index.ts
2. create a utils/auth.ts and define reused functions like - hashed passwords, jwt token generation etc.
3. create middleware/auth.ts (import from utils/auth.ts) for logging in / auth verification
4. update the controllers/userControllers and other files with the utils/auth.ts and import the functions to use for hashing pass and jwt  & add login logic code 
5. add login route in routes/userRoutes.ts
6. add authmiddleware to the other routes if required
7. make a invoiceNum.ts in utils and export that to the invoiceController to use
8. add pdf generation in utils and add the route to the invoiceRoutes