import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import { ModalProvider, useModal } from "@/contexts/ModalContext";

function AppContent() {
  const { openContactModal } = useModal();

  useEffect(() => {
    // Глобальный обработчик для всех кнопок открытия модального окна
    const handleContactModalButtons = () => {
      const buttons = document.querySelectorAll('.js-open-contact-modal');
      
      buttons.forEach(button => {
        // Удаляем старые обработчики
        button.removeEventListener('click', openContactModal);
        // Добавляем новый обработчик
        button.addEventListener('click', openContactModal);
      });
    };

    // Запускаем обработчик после загрузки DOM
    handleContactModalButtons();

    // Обработчик для динамически добавленных элементов
    const observer = new MutationObserver(() => {
      handleContactModalButtons();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      // Очищаем обработчики при размонтировании
      const buttons = document.querySelectorAll('.js-open-contact-modal');
      buttons.forEach(button => {
        button.removeEventListener('click', openContactModal);
      });
    };
  }, [openContactModal]);

  return (
    <Router>
      <div className="min-h-screen bg-black">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          გადადით მთავარ კონტენტზე
        </a>
        
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;
