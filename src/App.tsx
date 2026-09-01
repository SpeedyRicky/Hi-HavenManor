import React, { useState } from 'react';
import { HeaderNavigation } from './components/HeaderNavigation';
import { SanctuaryHeroShowcase } from './components/SanctuaryHeroShowcase';
import { CareNeedsNavigator } from './components/CareNeedsNavigator';
import { MainServicesAmenities } from './components/MainServicesAmenities';
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
        {/* 1. Authentic Hero Showcase */}
        <SanctuaryHeroShowcase
          onOpenTourModal={() => handleOpenTourModal()}
          onOpenAssessmentModal={handleOpenAssessmentModal}
        />

        {/* 2. Over 40-Year Heritage & About Us Story */}
        <HeritageStorySection />

        {/* 3. Main Services & Amenities (All 16+ Offerings) */}
        <MainServicesAmenities onOpenTourModal={() => handleOpenTourModal('Services & Amenities Inquiry')} />

        {/* 4. Care Programs & Service Offerings Grid */}
        <CareProgramsGrid onOpenTourModal={handleOpenTourModal} />

        {/* 5. Interactive Care Program Navigator */}
        <CareNeedsNavigator onOpenTourModal={handleOpenTourModal} />

        {/* 6. Residences & Living Suites */}
        <ResidencesSuitesShowcase onOpenTourModal={handleOpenTourModal} />

        {/* 7. Daily Life & Rhythms */}
        <DailyLifeTimeline />

        {/* 8. Visual Sanctuary Gallery */}
        <SanctuaryGallery />

        {/* 9. Trust, Eastern Health Standards & Safety */}
        <TrustStandardsAccreditation />

        {/* 10. Contact Us & Admissions Section */}
        <AdmissionsInquirySection
          onOpenTourModal={() => handleOpenTourModal()}
          onOpenAssessmentModal={handleOpenAssessmentModal}
        />

        {/* 11. FAQ Accordion */}
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

