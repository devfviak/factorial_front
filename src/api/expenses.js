import client from './client';

export const fetchExpenses = async () => client.get('/users/expenses');

// THESE CALLS ARE JUST FOR SIMULATING AN ACTUAL REQUEST DONE BY THE PROCESSOR
// USUALLY WHEN A PAYMENT IS DONE, THE WEBHOOK WILL POINT TO THIS ENDPOINTS
export const mockStripeExpense = async () => client.post('/stripe/mock/checkout_completed');
export const mockApplePayExpense = async () => client.post('/apple_pay/mock/payment_completed');
