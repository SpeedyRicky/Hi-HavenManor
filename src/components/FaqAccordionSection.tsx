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
    <section className="py-20 bg-[#FAF7F2] border-b border-[#9B8258]/15" id="faqs" aria-labelledby="faqs-heading">
      <div className="section-editorial-header-block">
        <span className="section-eyebrow-accent-label">Frequently Asked Questions</span>
        <h2 className="section-display-heading" id="faqs-heading">
          Clarity for Families & Prospective Residents
        </h2>
        <p className="section-lead-explanation">
          Answers to key questions regarding provincial licensing, daily care routines, government subsidies, and the admission process at Hi Haven.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border border-[#9B8258]/20 rounded-xl overflow-hidden transition-all duration-200"
              id={`faq-item-${index}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-semibold text-[#171E1C] hover:text-[#78623A] transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#9B8258] flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#78623A]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#46554D] leading-relaxed border-t border-[#F4EFE8]"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-xs text-[#55645D]">Have a specific care situation you would like to discuss?</p>
        <a
          href={`tel:${BUSINESS_INFO.contact.phone}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#171E1C] hover:text-[#78623A] mt-1"
        >
          <Phone className="w-4 h-4 text-[#78623A]" />
          <span>Call Lori & Rob Condon directly: <strong>{BUSINESS_INFO.contact.phone}</strong></span>
        </a>
      </div>
    </section>
  );
};
