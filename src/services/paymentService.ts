// src/services/paymentService.ts

import { PaymentForm } from '../app/payment-form'; // Import PaymentData interface


export const submitPayment = async (paymentData: PaymentData): Promise<any> => {
  try {
    const response = await fetch('http://localhost:8080/api/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting payment:', error);
    throw error;
  }
};
