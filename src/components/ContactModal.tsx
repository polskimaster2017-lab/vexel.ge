import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
      
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xkgvjlpk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showMessage('წარმატებით გაიგზავნა', 'success');
        form.reset();
        
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('შეცდომა! თავიდან სცადეთ.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      let errorMessage = 'შეცდომა! თავიდან სცადეთ.';
      
      if (error instanceof Error) {
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
          action="https://formspree.io/f/xkgvjlpk"
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
