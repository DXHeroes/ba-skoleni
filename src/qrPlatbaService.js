const preparePaymentFromQR = (qrData) => {
  // Simulace zpracování QR
  return {
    amount: 1000,
    account: "CZ1234567890",
    status: "ready",
    source: qrData,
  };
};

export { preparePaymentFromQR };
