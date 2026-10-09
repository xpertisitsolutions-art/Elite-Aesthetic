import React, { useState, useEffect, useRef, TouchEvent, KeyboardEvent } from 'react';
import {
  getActiveDisplayTestimonials,
  SAMPLE_TESTIMONIALS_NOTICE,
  Testimonial,
} from '../../data/testimonialsData';
import { TestimonialCard } from './TestimonialCard';
import {
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Info,
  Calendar,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useRouter } from '../../router/Router';

interface TestimonialsSectionProps {
  onOpenBooking: (treatmentName?: string) => void;
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenBooking,
  className = '',
}) => {
  const { navigate } = useRouter();
  const { items, isDemonstrationMode } = getActiveDisplayTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive cards per view calculation
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerView(3);
      } else if (width >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - cardsPerView);

  // Keep index within bounds if cardsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 45;

    if (diff > swipeThreshold) {
      // Swiped left -> next
      handleNext();
    } else if (diff < -swipeThreshold) {
      // Swiped right -> prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Accessible keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section
      id="client-experiences"
      aria-labelledby="client-experiences-heading"
      className={`py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E7DFD3]/70 ${className}`}
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#B89358]" />
            <span>Client Experiences</span>
            <span aria-hidden="true" className="text-[#C9A77E]">·</span>
            <span>Cebu City</span>
          </div>

          <h2
            id="client-experiences-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light leading-tight tracking-tight mb-4 text-balance"
          >
            What Our Clients Say
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Every experience at Elite Aesthetics is shaped by thoughtful care, personal attention, and respect
            for your individual goals.
          </p>
        </div>

        {/* Desktop / Tablet Slider Controls */}
        {items.length > cardsPerView && (
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous testimonial"
              className={`p-2.5 border border-[#E7DFD3] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9E7A42] ${
                currentIndex === 0
                  ? 'opacity-35 cursor-not-allowed bg-[#FAF7F2] text-[#8C7667]'
                  : 'bg-white hover:bg-[#FAF7F2] text-[#1D1815] hover:border-[#C9A77E]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="font-mono text-xs text-[#8C7667] px-1 select-none">
              {currentIndex + 1} / {maxIndex + 1}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next testimonial"
              className={`p-2.5 border border-[#E7DFD3] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9E7A42] ${
                currentIndex >= maxIndex
                  ? 'opacity-35 cursor-not-allowed bg-[#FAF7F2] text-[#8C7667]'
                  : 'bg-white hover:bg-[#FAF7F2] text-[#1D1815] hover:border-[#C9A77E]'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Demonstration Mode Section Notice (Prompt #21A Section 10) */}
      {isDemonstrationMode && (
        <div className="mb-8 p-4 sm:p-5 bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-2.5">
            <Info className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5 sm:mt-0" />
            <div className="text-xs text-[#685B52] leading-relaxed">
              <span className="font-semibold text-[#1D1815] block sm:inline mr-1">
                {SAMPLE_TESTIMONIALS_NOTICE.badge}:
              </span>
              <span>{SAMPLE_TESTIMONIALS_NOTICE.message}</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase px-2.5 py-1 bg-[#FAF7F2] border border-[#E7DFD3] text-[#736055] shrink-0 self-start sm:self-center">
            PROTOTYPE PREVIEW
          </span>
        </div>
      )}

      {/* Slider Carousel Container */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Client Experiences Testimonial Slider"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden w-full max-w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9E7A42]"
      >
        <div
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {items.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`shrink-0 flex flex-col ${
                cardsPerView === 3
                  ? 'w-1/3 px-3'
                  : cardsPerView === 2
                  ? 'w-1/2 px-2.5'
                  : 'w-full px-0'
              }`}
              style={{ boxSizing: 'border-box' }}
              aria-roledescription="slide"
              aria-label={`Testimonial ${idx + 1} of ${items.length}`}
            >
              <TestimonialCard
                testimonial={testimonial}
                onOpenBooking={onOpenBooking}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Swipe Hint & Pagination Dots */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Mobile Left / Right controls (< sm) */}
        <div className="flex sm:hidden items-center justify-between w-full">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-3 py-1.5 border border-[#E7DFD3] text-xs font-medium uppercase tracking-wider flex items-center gap-1 ${
              currentIndex === 0
                ? 'opacity-35 cursor-not-allowed bg-[#FAF7F2]'
                : 'bg-white hover:bg-[#FAF7F2]'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>

          <span className="text-[11px] text-[#8C7667]">Swipe left / right</span>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`px-3 py-1.5 border border-[#E7DFD3] text-xs font-medium uppercase tracking-wider flex items-center gap-1 ${
              currentIndex >= maxIndex
                ? 'opacity-35 cursor-not-allowed bg-[#FAF7F2]'
                : 'bg-white hover:bg-[#FAF7F2]'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pagination Indicator Dots */}
        {maxIndex > 0 && (
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  currentIndex === i
                    ? 'w-7 h-1.5 bg-[#9E7A42]'
                    : 'w-1.5 h-1.5 bg-[#DBC3A3] hover:bg-[#9E7A42]/70'
                }`}
              />
            ))}
          </div>
        )}

        {/* Quick Consultation Action */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenBooking('Client Consultation')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors focus:outline-none"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B89358]" />
            <span>Schedule a Consultation →</span>
          </button>
        </div>
      </div>

      {/* Homepage Preview Bottom CTA -> Navigates to /client-experiences (Prompt #21D Section 3) */}
      <div className="mt-10 pt-8 border-t border-[#E7DFD3]/70 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.18em] text-[#9E7A42] font-semibold mb-1">
            Complete Patient Stories & Care Journeys
          </p>
          <p className="text-sm text-[#685B52]">
            Discover detailed client experiences, treatment feedback, and clinic impressions.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/client-experiences')}
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#FAF7F2] bg-gradient-to-r from-[#29221E] via-[#382E28] to-[#241D18] hover:from-[#B89358] hover:to-[#9E7A42] border border-[#B89358]/50 shadow-xs transition-all duration-300 hover:shadow-md cursor-pointer shrink-0 focus:outline-none focus:ring-2 focus:ring-[#B89358]/40"
        >
          <span>VIEW ALL CLIENT EXPERIENCES</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E8D8C3]" />
        </button>
      </div>
    </section>
  );
};
