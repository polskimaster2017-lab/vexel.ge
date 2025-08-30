import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  [key: string]: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// API endpoint configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://vixel.ge' 
  : 'http://localhost:3001';

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Focus management for accessibility
      const firstInput = document.querySelector('#contact-form input') as HTMLInputElement;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const showMessage = (message: string, type: 'success' | 'error') => {
    setSubmitMessage(message);
    setMessageType(type);
    setTimeout(() => {
      setSubmitMessage('');
      setMessageType('');
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Проверяем, что все обязательные поля заполнены
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const message = formData.get('message') as string;
      
      if (!name || !email || !phone || !message) {
        throw new Error('გთხოვთ შეავსოთ ყველა სავალდებულო ველი');
      }
      
      // Проверяем email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('გთხოვთ შეიყვანოთ სწორი ელ. ფოსტა');
      }
      
      // Convert FormData to JSON
      const formObject: FormData = {};
      formData.forEach((value, key) => {
        formObject[key] = value.toString();
      });
      
      // Log network information for debugging
      console.log('Network information:');
      console.log('Online status:', navigator.onLine);
      console.log('Connection effective type:', (navigator as any).connection?.effectiveType || 'Unknown');
      console.log('Connection downlink:', (navigator as any).connection?.downlink || 'Unknown');
      
      // Check if we're in production and log accordingly
      const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
      console.log('Environment:', isProduction ? 'Production' : 'Development');
      console.log('Current domain:', window.location.hostname);
      console.log('Protocol:', window.location.protocol);
      console.log('Full URL:', window.location.href);
      console.log('Submitting form with data:', formObject);
      console.log('API Base URL:', API_BASE_URL);
      
      // Additional production checks
      if (isProduction) {
        console.log('Production environment detected - checking SSL and CORS...');
        if (window.location.protocol !== 'https:') {
          console.warn('Warning: Not using HTTPS in production!');
        }
      }
      
      console.log('Starting fetch request to Resend API...');
      console.log('Request URL:', `${API_BASE_URL}/api/sendEmail`);
      console.log('Request method:', 'POST');
      console.log('Request headers:', {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });
      console.log('Request body:', formObject);
      console.log('CORS mode:', 'cors');
      console.log('Credentials:', 'omit');
      
      const response = await fetch(`${API_BASE_URL}/api/sendEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formObject),
        mode: 'cors',
        credentials: 'omit'
      });

      console.log('Response received!');
      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);
      console.log('Response headers:', response.headers);
      console.log('Response URL:', response.url);
      console.log('Response type:', response.type);
      console.log('Response redirected:', response.redirected);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('HTTP error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
      }

      const responseText = await response.text();
      console.log('Response text:', responseText);
      
      let responseJson: EmailResponse;
      try {
        responseJson = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError);
        throw new Error('Invalid response format from server');
      }
      
      console.log('Parsed response:', responseJson);

      if (responseJson.success) {
        // Log success details for debugging
        console.log('Form submitted successfully!');
        console.log('Response details:', {
          success: responseJson.success,
          message: responseJson.message,
          timestamp: new Date().toISOString()
        });
        
        showMessage('წარმატებით გაიგზავნა', 'success');
        form.reset();
        
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        console.error('Resend API returned error:', responseJson);
        throw new Error(responseJson.error || responseJson.message || 'შეცდომა მოხდა');
      }
    } catch (error) {
      console.error('=== FORM SUBMISSION ERROR ===');
      console.error('Error type:', typeof error);
      console.error('Error constructor:', error?.constructor?.name);
      console.error('Error name:', error instanceof Error ? error.name : 'N/A');
      console.error('Error message:', error instanceof Error ? error.message : String(error));
      console.error('Error stack:', error instanceof Error ? error.stack : 'N/A');
      console.error('Environment:', window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1' ? 'Production' : 'Development');
      console.error('Domain:', window.location.hostname);
      console.error('Protocol:', window.location.protocol);
      console.error('User Agent:', navigator.userAgent);
      console.error('Timestamp:', new Date().toISOString());
      console.error('=== END ERROR DETAILS ===');
      
      // Handle specific error types
      let errorMessage = 'შეცდომა მოხდა. გთხოვთ სცადოთ თავიდან.';
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        errorMessage = 'ქსელის შეცდომა. შეამოწმეთ ინტერნეტ კავშირი.';
        console.error('Network/Fetch error detected');
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      showMessage(errorMessage, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="relative bg-[#1a1a1d] rounded-2xl contact-modal-container max-w-md w-full mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="დახურვა"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h2 id="modal-title" className="text-xl font-bold text-white mb-1 font-noto-georgian">
            დაგვიკავშირდით
          </h2>
          <p id="modal-description" className="text-gray-400 text-xs font-noto-georgian">
            დაგვიტოვეთ თქვენი მონაცემები და ჩვენ დაგიკავშირდებით პროექტის განსახილველად.
          </p>
        </div>

        {/* Form */}
        <form 
          id="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={handleSubmit} 
          className="space-y-6"
          noValidate
        >


          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 font-noto-georgian">
              სახელი *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              maxLength={50}
              className="w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all"
              placeholder="თქვენი სახელი"
              aria-describedby="name-error"
            />
            <div id="name-error" className="text-red-400 text-xs mt-1 hidden"></div>
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 font-noto-georgian">
              ელ. ფოსტა *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all"
              placeholder="თქვენი ელ. ფოსტა"
              aria-describedby="email-error"
            />
            <div id="email-error" className="text-red-400 text-xs mt-1 hidden"></div>
          </div>

          {/* Phone field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1 font-noto-georgian">
              ტელეფონი *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="^\+?[0-9\s\-\(\)]+$"
              className="w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all"
              placeholder="+995 599 123 456"
              aria-describedby="phone-error"
            />
            <div id="phone-error" className="text-red-400 text-xs mt-1 hidden"></div>
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 font-noto-georgian">
              თქვენი შეტყობინება *
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={1000}
              rows={2}
              className="w-full px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all resize-none"
              placeholder="დაგვიწერეთ თქვენი პროექტის შესახებ..."
              aria-describedby="message-error"
            />
            <div id="message-error" className="text-red-400 text-xs mt-1 hidden"></div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-noto-georgian mt-3"
            aria-describedby="submit-status"
          >
            {isSubmitting ? 'იგზავნება...' : 'გაგზავნა'}
          </button>

          {/* Form message */}
          {submitMessage && (
            <p 
              id="submit-status"
              className={`text-center text-sm font-noto-georgian mt-2 ${
                messageType === 'success' ? 'text-green-400' : 'text-red-400'
              }`}
              role="alert"
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
