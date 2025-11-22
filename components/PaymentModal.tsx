
import React, { useState, useEffect } from 'react';
import { X, CreditCard, Smartphone, Check, Loader2, QrCode, Lock } from 'lucide-react';
import { PaymentMethod } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onPaymentSuccess: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, totalAmount, onPaymentSuccess }) => {
  const [step, setStep] = useState<'select' | 'form' | 'processing' | 'success'>('select');
  const [method, setMethod] = useState<PaymentMethod | null>(null);
  
  // Form States
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [operationCode, setOperationCode] = useState('');

  useEffect(() => {
    if (isOpen) {
      setStep('select');
      setMethod(null);
      setCardNumber('');
      setCardName('');
      setCardExpiry('');
      setCardCvv('');
      setOperationCode('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 3000);
  };

  const handleSuccessClose = () => {
    onPaymentSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-momon-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-hard border-4 border-momon-black relative flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        {step !== 'processing' && step !== 'success' && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white text-momon-black p-2 rounded-full border-2 border-momon-black hover:bg-momon-red hover:text-white transition-colors z-10 shadow-hard-sm"
          >
            <X size={20} />
          </button>
        )}

        {/* Header */}
        <div className="bg-momon-yellow p-6 border-b-4 border-momon-black text-center">
          <h2 className="font-brand text-2xl font-bold text-momon-black">
            {step === 'select' && 'Elige tu Pago'}
            {step === 'form' && (method === 'yape' || method === 'plin' ? 'Escanea y Paga' : 'Datos de Tarjeta')}
            {step === 'processing' && 'Procesando...'}
            {step === 'success' && '¡Pago Exitoso!'}
          </h2>
          {step !== 'success' && (
            <p className="font-sans font-bold text-momon-black/70 mt-1 text-sm">
              Total a pagar: <span className="text-momon-red text-lg">S/{totalAmount.toFixed(2)}</span>
            </p>
          )}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] flex-1">
          
          {/* STEP 1: SELECT METHOD */}
          {step === 'select' && (
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => { setMethod('visa'); setStep('form'); }}
                className="flex items-center justify-between p-4 rounded-xl border-2 border-momon-black bg-white hover:bg-blue-50 hover:shadow-hard-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white p-2 rounded-lg">
                    <CreditCard size={24} />
                  </div>
                  <span className="font-brand text-lg text-momon-black">Tarjeta VISA</span>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-momon-black group-hover:bg-momon-black"></div>
              </button>

              <button 
                onClick={() => { setMethod('mastercard'); setStep('form'); }}
                className="flex items-center justify-between p-4 rounded-xl border-2 border-momon-black bg-white hover:bg-orange-50 hover:shadow-hard-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 text-white p-2 rounded-lg">
                    <CreditCard size={24} />
                  </div>
                  <span className="font-brand text-lg text-momon-black">Mastercard</span>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-momon-black group-hover:bg-momon-black"></div>
              </button>

              <button 
                onClick={() => { setMethod('yape'); setStep('form'); }}
                className="flex items-center justify-between p-4 rounded-xl border-2 border-momon-black bg-white hover:bg-purple-50 hover:shadow-hard-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600 text-white p-2 rounded-lg">
                    <Smartphone size={24} />
                  </div>
                  <span className="font-brand text-lg text-momon-black">YAPE</span>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-momon-black group-hover:bg-momon-black"></div>
              </button>

              <button 
                onClick={() => { setMethod('plin'); setStep('form'); }}
                className="flex items-center justify-between p-4 rounded-xl border-2 border-momon-black bg-white hover:bg-cyan-50 hover:shadow-hard-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-cyan-500 text-white p-2 rounded-lg">
                    <Smartphone size={24} />
                  </div>
                  <span className="font-brand text-lg text-momon-black">PLIN</span>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-momon-black group-hover:bg-momon-black"></div>
              </button>
            </div>
          )}

          {/* STEP 2: FORM (CARD) */}
          {step === 'form' && (method === 'visa' || method === 'mastercard') && (
            <form onSubmit={handleProcessPayment} className="space-y-4">
              <div>
                <label className="block font-brand text-sm text-momon-black mb-1">Número de Tarjeta</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    required
                    maxLength={19}
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-momon-black font-sans focus:outline-none focus:shadow-hard-sm focus:bg-momon-offwhite transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-brand text-sm text-momon-black mb-1">Titular de la Tarjeta</label>
                <input 
                  type="text" 
                  required
                  placeholder="COMO APARECE EN LA TARJETA"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value.toUpperCase())}
                  className="w-full p-3 rounded-xl border-2 border-momon-black font-sans focus:outline-none focus:shadow-hard-sm focus:bg-momon-offwhite transition-all uppercase"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-brand text-sm text-momon-black mb-1">Expira</label>
                  <input 
                    type="text" 
                    required
                    maxLength={5}
                    placeholder="MM/YY"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    className="w-full p-3 rounded-xl border-2 border-momon-black font-sans focus:outline-none focus:shadow-hard-sm focus:bg-momon-offwhite transition-all text-center"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-brand text-sm text-momon-black mb-1">CVV</label>
                  <input 
                    type="password" 
                    required
                    maxLength={3}
                    placeholder="123"
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                    className="w-full p-3 rounded-xl border-2 border-momon-black font-sans focus:outline-none focus:shadow-hard-sm focus:bg-momon-offwhite transition-all text-center"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 justify-center py-2">
                <Lock size={12} /> Pagos 100% Seguros y Encriptados
              </div>

              <button 
                type="submit"
                className="w-full bg-momon-black text-white py-4 rounded-xl font-brand text-xl border-2 border-momon-black hover:bg-momon-red hover:text-white transition-all shadow-hard active:translate-y-[2px] active:shadow-none mt-4"
              >
                Pagar S/{totalAmount.toFixed(2)}
              </button>
              
              <button 
                type="button"
                onClick={() => setStep('select')}
                className="w-full text-sm font-bold text-gray-500 hover:text-momon-black underline mt-2"
              >
                Volver
              </button>
            </form>
          )}

          {/* STEP 2: FORM (YAPE/PLIN) */}
          {step === 'form' && (method === 'yape' || method === 'plin') && (
            <form onSubmit={handleProcessPayment} className="space-y-6 text-center">
              
              <div className={`p-6 rounded-2xl border-4 border-momon-black shadow-hard-sm inline-block bg-white ${method === 'yape' ? 'shadow-purple-200' : 'shadow-cyan-200'}`}>
                {/* Simulated QR */}
                <div className="w-48 h-48 bg-momon-black flex items-center justify-center relative overflow-hidden rounded-lg">
                   <div className="absolute inset-0 bg-white m-1">
                      <div className="w-full h-full flex flex-wrap p-2">
                         {Array.from({length: 64}).map((_, i) => (
                           <div key={i} className={`w-[12.5%] h-[12.5%] ${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'}`}></div>
                         ))}
                      </div>
                      {/* Logo Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-1 rounded">
                           {method === 'yape' ? <Smartphone className="text-purple-600" size={32}/> : <Smartphone className="text-cyan-500" size={32}/>}
                        </div>
                      </div>
                   </div>
                </div>
                <p className="font-brand mt-4 text-lg">
                  {method === 'yape' ? <span className="text-purple-600">Yapea</span> : <span className="text-cyan-600">Plinea</span>} a:
                </p>
                <p className="font-sans font-bold text-2xl tracking-widest">987 654 321</p>
                <p className="text-xs font-bold text-gray-400 mt-1">Momon Tea SAC</p>
              </div>

              <div>
                <label className="block font-brand text-sm text-momon-black mb-2">Ingresa el código de operación</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej: 1234567"
                  value={operationCode}
                  onChange={(e) => setOperationCode(e.target.value)}
                  className="w-full p-3 rounded-xl border-2 border-momon-black font-sans text-center text-lg tracking-widest focus:outline-none focus:shadow-hard-sm focus:bg-momon-offwhite transition-all"
                />
              </div>

              <button 
                type="submit"
                disabled={operationCode.length < 4}
                className="w-full bg-momon-black text-white py-4 rounded-xl font-brand text-xl border-2 border-momon-black hover:bg-momon-green hover:text-white transition-all shadow-hard active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar Pago
              </button>

              <button 
                type="button"
                onClick={() => setStep('select')}
                className="w-full text-sm font-bold text-gray-500 hover:text-momon-black underline"
              >
                Cambiar método
              </button>
            </form>
          )}

          {/* STEP 3: PROCESSING */}
          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-momon-yellow rounded-full animate-ping opacity-20"></div>
                <Loader2 size={64} className="text-momon-black animate-spin relative z-10" />
              </div>
              <div>
                <h3 className="font-brand text-2xl text-momon-black mb-2">Validando...</h3>
                <p className="font-sans text-gray-600 font-medium">Estamos contactando con la nave nodriza 🛸</p>
              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS */}
          {step === 'success' && (
            <div className="flex flex-col items-center justify-center h-full py-8 text-center space-y-6 animate-in zoom-in duration-300">
              <div className="w-24 h-24 bg-momon-green rounded-full flex items-center justify-center border-4 border-momon-black shadow-hard mb-4">
                <Check size={48} className="text-white" strokeWidth={4} />
              </div>
              <div>
                <h3 className="font-brand text-3xl text-momon-black mb-2">¡Todo Listo!</h3>
                <p className="font-sans text-gray-600 font-medium px-4">
                  Tu orden ha sido recibida. La tribu ya está preparando tu dosis de felicidad.
                </p>
              </div>
              <div className="w-full bg-momon-offwhite p-4 rounded-xl border-2 border-momon-black border-dashed mt-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">ID de Pedido</p>
                <p className="font-mono text-xl font-bold">#{Math.floor(Math.random() * 1000000)}</p>
              </div>
              <button 
                onClick={handleSuccessClose}
                className="w-full bg-momon-yellow text-momon-black py-4 rounded-xl font-brand text-xl border-2 border-momon-black hover:bg-momon-black hover:text-white transition-all shadow-hard active:translate-y-[2px] active:shadow-none mt-4"
              >
                Entendido
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
