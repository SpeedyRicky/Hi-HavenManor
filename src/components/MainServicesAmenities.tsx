import React from 'react';
import { SERVICES_AND_AMENITIES, BUSINESS_INFO } from '../data/hiHavenData';
import { 
  Utensils, Bed, Sparkles, HeartPulse, Stethoscope, Scissors, 
  Footprints, ShoppingBag, Car, Palette, BookOpen, Wifi, 
  Brain, MapPin, Compass, Plus, CheckCircle2, Phone
} from 'lucide-react';

interface MainServicesAmenitiesProps {
  onOpenTourModal: () => void;
}

export const MainServicesAmenities: React.FC<MainServicesAmenitiesProps> = ({ onOpenTourModal }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#233B31]" />;
      case 'Bed':
        return <Bed className="w-5 h-5 text-[#233B31]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#233B31]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#233B31]" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-[#233B31]" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-[#233B31]" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-[#233B31]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#233B31]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#233B31]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#233B31]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#233B31]" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-[#233B31]" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#233B31]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#233B31]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#233B31]" />;
      default:
        return <Plus className="w-5 h-5 text-[#233B31]" />;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E5DFC5]" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
              COMFORTS & CARE
            </span>
            <div className="h-[1px] w-8 bg-[#233B31]"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-4" id="services-heading">
            Main Services & Amenities
          </h2>
          <p className="text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
            At Hi Haven Manor, we provide everything needed for comfortable, supportive, and dignified daily living in our Holyrood home.
          </p>
        </div>

        {/* Services & Amenities 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES_AND_AMENITIES.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 border border-[#E5DFC5] flex flex-col justify-between hover:border-[#233B31] transition-colors group"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#E5DFC5] flex items-center justify-center mb-4 group-hover:bg-[#F3EFEA] transition-colors">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="font-serif text-base sm:text-lg font-normal text-[#1C2622] mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-[#5F6B65] leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5DFC5]/60 flex items-center gap-1.5 text-[11px] text-[#233B31] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Included Service</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring Callout Banner */}
        <div className="mt-12 bg-[#F3EFEA] p-6 sm:p-8 border border-[#E5DFC5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl text-[#1C2622] font-normal mb-1">
              Have questions about specialized needs or subsidies?
            </h4>
            <p className="text-xs sm:text-sm text-[#5F6B65] font-light">
              Our program is government subsidized through Eastern Health (NL Health Services). Speak with us directly.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={onOpenTourModal}
              className="bg-[#233B31] text-[#FAF8F5] px-6 py-3 text-xs uppercase tracking-wider font-medium hover:bg-[#1A2E26] transition-colors"
            >
              Arrange a Visit
            </button>
            <a
              href={`tel:${BUSINESS_INFO.contact.phone}`}
              className="border border-[#233B31] text-[#233B31] px-5 py-3 text-xs uppercase tracking-wider font-medium hover:bg-[#233B31] hover:text-[#FAF8F5] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.contact.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
