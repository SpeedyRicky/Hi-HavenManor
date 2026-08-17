import React, { useState } from 'react';
import { HeaderNavigation } from './components/HeaderNavigation';
import { SanctuaryHeroShowcase } from './components/SanctuaryHeroShowcase';
import { CareNeedsNavigator } from './components/CareNeedsNavigator';
import { CareProgramsGrid } from './components/CareProgramsGrid';
import { HeritageStorySection } from './components/HeritageStorySection';
import { ResidencesSuitesShowcase } from './components/ResidencesSuitesShowcase';
import { DailyLifeTimeline } from './components/DailyLifeTimeline';
import { SanctuaryGallery } from './components/SanctuaryGallery';
import { TrustStandardsAccreditation } from './components/TrustStandardsAccreditation';
import { AdmissionsInquirySection } from './components/AdmissionsInquirySection';
import { FaqAccordionSection } from './components/FaqAccordionSection';
import { LuxuryFooter } from './components/LuxuryFooter';
import { TourBookingModal } from './components/TourBookingModal';
import { CareAssessmentQuizModal } from './components/CareAssessmentQuizModal';

export default function App() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [tourInitialTopic, setTourInitialTopic] = useState('General Sanctuary Visit');
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);

  const handleOpenTourModal = (topic?: string) => {
    if (topic) setTourInitialTopic(topic);
    setIsTourModalOpen(true);
  };

  const handleCloseTourModal = () => {
    setIsTourModalOpen(false);
  };

  const handleOpenAssessmentModal = () => {
    setIsAssessmentModalOpen(true);
  };

  const handleCloseAssessmentModal = () => {
    setIsAssessmentModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C2320]">
      {/* Sticky Luxury Header Navigation */}
      <HeaderNavigation
        onOpenTourModal={() => handleOpenTourModal()}
        onOpenAssessmentModal={handleOpenAssessmentModal}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Cinematic Hero Showcase */}
        <SanctuaryHeroShowcase
          onOpenTourModal={() => handleOpenTourModal()}
          onOpenAssessmentModal={handleOpenAssessmentModal}
        />

        {/* 2. Interactive Care Program Navigator */}
        <CareNeedsNavigator onOpenTourModal={handleOpenTourModal} />

        {/* 3. Care Programs & Service Offerings Grid */}
        <CareProgramsGrid onOpenTourModal={handleOpenTourModal} />

        {/* 4. 20+ Year Heritage & Founders Story */}
        <HeritageStorySection />

        {/* 5. Residences & Living Suites */}
        <ResidencesSuitesShowcase onOpenTourModal={handleOpenTourModal} />

        {/* 6. Daily Life & Rhythms */}
        <DailyLifeTimeline />

        {/* 7. Visual Sanctuary Gallery */}
        <SanctuaryGallery />

        {/* 8. Trust, Provincial Accreditation & Safety */}
        <TrustStandardsAccreditation />

        {/* 9. Admissions & Tour Scheduling Portal */}
        <AdmissionsInquirySection
          onOpenTourModal={() => handleOpenTourModal()}
          onOpenAssessmentModal={handleOpenAssessmentModal}
        />

        {/* 10. FAQ Accordion */}
        <FaqAccordionSection />
      </main>

      {/* Luxury Footer */}
      <LuxuryFooter
        onOpenTourModal={() => handleOpenTourModal()}
        onOpenAssessmentModal={handleOpenAssessmentModal}
      />

      {/* Interactive Tour Booking Modal */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={handleCloseTourModal}
        initialTopic={tourInitialTopic}
      />

      {/* Interactive Care Assessment Quiz Modal */}
      <CareAssessmentQuizModal
        isOpen={isAssessmentModalOpen}
        onClose={handleCloseAssessmentModal}
        onOpenTourModal={() => {
          setIsAssessmentModalOpen(false);
          handleOpenTourModal('Post-Quiz Consultation');
        }}
      />
    </div>
  );
}
