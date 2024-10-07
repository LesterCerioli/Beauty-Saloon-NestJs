// src/components/PaymentForm.tsx
import React, { useState } from 'react';
import { submitPayment } from '../services/paymentService';

// Define TypeScript types for the payment data
interface PaymentData {
  cardNumber: string;
  securityCode: string;
  cardHolderName: string;
  billingOption: 'annual' | 'monthly';
}

const PaymentForm: React.FC = () => {
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: '',
    securityCode: '',
    cardHolderName: '',
    billingOption: 'annual',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggle = () => {
    setPaymentData((prevData) => ({
      ...prevData,
      billingOption: prevData.billingOption === 'annual' ? 'monthly' : 'annual',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await submitPayment(paymentData);
      alert('Pagamento enviado com sucesso!');
      console.log(response);
    } catch (error) {
      alert('Erro ao processar o pagamento, tente novamente.');
      console.error('Erro no envio de pagamento:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPrice = () => {
    return paymentData.billingOption === 'annual' ? 'R$840' : 'R$80';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Information</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Security Code</label>
          <input
            type="text"
            name="securityCode"
            value={paymentData.securityCode}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Card Holder Name</label>
          <input
            type="text"
            name="cardHolderName"
            value={paymentData.cardHolderName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Toggle for Billing Option */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Billing Option</label>
          <div className="flex items-center justify-center">
            <div className="relative w-24 h-10">
              <input
                type="checkbox"
                id="billing-toggle"
                className="sr-only"
                checked={paymentData.billingOption === 'annual'}
                onChange={handleToggle}
              />
              <div className="block bg-gray-300 w-full h-full rounded-full"></div>
              <div
                className={`absolute left-1 top-1 w-8 h-8 rounded-full transition-transform duration-300 ease-in-out bg-blue-500 ${
                  paymentData.billingOption === 'annual' ? '' : 'translate-x-full'
                }`}
              ></div>
              <div className="absolute left-2 top-2 text-xs text-white">Anual</div>
              <div className="absolute right-2 top-2 text-xs text-white">Mensal</div>
            </div>
          </div>
        </div>

        {/* Display Pricing */}
        <div className="mb-4">
          <p className="text-gray-700 text-lg font-bold">Valor: {getPrice()}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Submit Payment'}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
