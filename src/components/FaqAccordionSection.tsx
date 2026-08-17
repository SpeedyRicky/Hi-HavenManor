import React, { useState } from 'react';
import { FAQS } from '../data/hiHavenData';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hiHavenData';

export const FaqAccordionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F3EFEA] border-b border-[#E5DFC5]" id="faqs" aria-labelledby="faqs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
              COMMON QUESTIONS
            </span>
            <div className="h-[1px] w-8 bg-[#233B31]"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-4" id="faqs-heading">
            Clear answers for families & loved ones.
          </h2>
          <p className="text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
            Here are honest answers to the most common questions we receive regarding provincial licensing, daily care routines, government subsidies, and the admission process at Hi Haven.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#E5DFC5] overflow-hidden transition-all"
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-normal text-[#1C2622] hover:text-[#233B31] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#233B31] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#1C2622]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#5F6B65] leading-relaxed border-t border-[#E5DFC5]/60 font-light"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#5F6B65]">Have a specific care situation you would like to discuss?</p>
          <a
            href={`tel:${BUSINESS_INFO.contact.phone}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#233B31] hover:text-[#1C2622] mt-2 font-semibold"
          >
            <Phone className="w-4 h-4 text-[#233B31]" />
            <span>Call Us Directly: <strong>{BUSINESS_INFO.contact.phone}</strong></span>
          </a>
        </div>

      </div>
    </section>
  );
};

