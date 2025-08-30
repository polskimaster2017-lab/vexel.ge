import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import ContactModal from "./ContactModal";
import { useModal } from "@/contexts/ModalContext";

const Hero = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [countedValues, setCountedValues] = useState({ exp: 0, warranty: 0, experts: 0 });
  const { isContactModalOpen, openContactModal, closeContactModal } = useModal();

  const fullCode = `import './style.css'
import App from './App'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <App />
)`;

  const words = useMemo(() => ['ვებსაიტებს', 'აპლიკაციებს', 'დიზაინს', 'შედეგებს'], []);
  const wordCyclerRef = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Простая функция для синтаксического выделения
  const formatCode = useCallback((text: string) => {
    return text
      .replace(/\b(import|from)\b/g, '<span style="color: #60a5fa; font-weight: 600;">$1</span>')
      .replace(/\b(ReactDOM|document|App)\b/g, '<span style="color: #a78bfa;">$1</span>')
      .replace(/\b(createRoot|getElementById|render)\b/g, '<span style="color: #34d399;">$1</span>')
      .replace(/'([^']+)'/g, '<span style="color: #fbbf24;">\'$1\'</span>')
      .replace(/(&lt;|&gt;)/g, '<span style="color: #f87171;">$1</span>')
      .replace(/\n/g, '<br>');
  }, []);

  const typingContainerRef = useRef<HTMLDivElement>(null);

  // Функция для измерения ширины самого длинного слова
  const measureLongestWord = useCallback(() => {
    if (wordCyclerRef.current) {
      const container = wordCyclerRef.current;
      const tempSpan = document.createElement('span');
      tempSpan.style.position = 'absolute';
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.whiteSpace = 'nowrap';
      tempSpan.style.fontSize = window.getComputedStyle(container).fontSize;
      tempSpan.style.fontFamily = window.getComputedStyle(container).fontFamily;
      tempSpan.style.fontWeight = window.getComputedStyle(container).fontWeight;
      tempSpan.style.color = '#5abd70';
      
      document.body.appendChild(tempSpan);
      
      let maxWidth = 0;
      words.forEach(word => {
        tempSpan.textContent = word;
        const width = tempSpan.offsetWidth;
        if (width > maxWidth) {
          maxWidth = width;
        }
      });
      
      document.body.removeChild(tempSpan);
      setContainerWidth(maxWidth + 20); // Добавляем небольшой отступ
    }
  }, [words]);

  // Count-up animation function
  const animateCount = useCallback((target: number, duration: number, setter: (value: number) => void) => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setter(Math.floor(current));
    }, 16);
  }, []);

  // Intersection Observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start count-up animations
            animateCount(8, 2000, (value) => setCountedValues(prev => ({ ...prev, exp: value })));
            animateCount(3, 2000, (value) => setCountedValues(prev => ({ ...prev, warranty: value })));
            animateCount(20, 2000, (value) => setCountedValues(prev => ({ ...prev, experts: value })));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [animateCount]);

  useEffect(() => {
    const timer1 = setTimeout(() => setTitleVisible(true), 300);
    const timer2 = setTimeout(() => setSubtitleVisible(true), 600);
    const timer3 = setTimeout(() => setButtonVisible(true), 900);
    const timer4 = setTimeout(() => setStatsVisible(true), 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Измеряем ширину при загрузке и изменении размера окна
  useEffect(() => {
    measureLongestWord();
    const handleResize = () => measureLongestWord();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [measureLongestWord]);

  useEffect(() => {
    if (currentIndex < fullCode.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullCode.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Анимация завершена, ждем 3 секунды и начинаем заново
      const timer = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullCode]);

  // Анимация смены слов
  useEffect(() => {
    const wordTimer = setInterval(() => {
      const wordElement = wordCyclerRef.current;
      if (wordElement) {
        // Step A: Добавляем класс для анимации исчезновения
        wordElement.classList.add('word-is-hidden');
        
        // Step B: Ждем завершения анимации исчезновения
        setTimeout(() => {
          // Step C: Обновляем текст
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          
          // Step D: Убираем класс для анимации появления
          setTimeout(() => {
            wordElement.classList.remove('word-is-hidden');
          }, 50); // Небольшая задержка для обновления DOM
        }, 400); // Длительность анимации исчезновения
      }
    }, 3000);

    return () => clearInterval(wordTimer);
  }, [words.length]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      {/* Dark geometric background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border border-green-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-green-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-green-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-screen pt-20">
          <div className="lg:w-3/5 lg:pr-8 lg:pl-16">
            <h1 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-loose font-noto-georgian transition-all duration-1000 ease-out ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } text-white neon-title tracking-wide`}>
              <div className="headline-container">
                <div className="text-white">ჩვენ ვქმნით</div>
                <div 
                  className="word-cycler-wrapper" 
                  style={{ minWidth: containerWidth ? `${containerWidth}px` : 'auto' }}
                >
                  <span className="word" ref={wordCyclerRef}>
                    {words[currentWordIndex]}
                  </span>
                </div>
              </div>
              <div className="text-white">
                რომლებიც <span style={{color: '#5abd70'}}>მუშაობს</span>
              </div>
            </h1>
            
            <div className={`mb-12 transition-all duration-1000 ease-out ${
              buttonVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className="flex justify-center lg:justify-start">
                <div className="lg:ml-8">
                  <Button
                    onClick={openContactModal}
                    className="js-open-contact-modal neon-button font-noto-georgian text-lg px-10 py-4 h-auto transition-all duration-300 ease-out transform hover:scale-105 group"
                    aria-label="დაიწყეთ პროექტი - გახსენით კონტაქტის ფორმა"
                  >
                    დაიწყეთ პროექტი
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats boxes */}
            <div className={`stats-container grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 ease-out delay-500 relative ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} ref={statsRef}>
              {/* Aurora background effect */}
              <div className="stats-aurora"></div>
              
              <div className="stat-box group">
                <div className="stat-content">
                  <div className="stat-number">{countedValues.exp}</div>
                  <div className="stat-label">
                    <div>წელი</div>
                    <div>გამოცდილება</div>
                  </div>
                </div>
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="m22 21-2-2"/>
                    <path d="M16 16h6"/>
                  </svg>
                </div>
              </div>
              
              <div className="stat-box group">
                <div className="stat-content">
                  <div className="stat-number">{countedValues.warranty}</div>
                  <div className="stat-label">წელი გარანტია</div>
                </div>
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
              </div>
              
              <div className="stat-box group">
                <div className="stat-content">
                  <div className="stat-number">{countedValues.experts}+</div>
                  <div className="stat-label">ექსპერტი</div>
                </div>
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - animated code typing */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="animated-code-editor">
              <div className="code-editor-window">
                <div className="code-editor-header">
                  <div className="window-controls">
                    <div className="control-dot red"></div>
                    <div className="control-dot yellow"></div>
                    <div className="control-dot green"></div>
                  </div>
                  <div className="file-name">main.tsx</div>
                </div>
                <div className="code-editor-content">
                  <div className="typing-container" ref={typingContainerRef}>
                    <div 
                      className="code-display"
                      dangerouslySetInnerHTML={{ 
                        __html: formatCode(displayedText) + '<span class="typing-cursor"></span>' 
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </section>
  );
};

export default Hero;