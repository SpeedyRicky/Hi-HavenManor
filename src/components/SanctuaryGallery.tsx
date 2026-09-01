import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hiHavenData';
import { GalleryItem } from '../types';
import { Eye, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export const SanctuaryGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'home', label: 'Holyrood Home' },
    { id: 'rooms', label: 'Interior & Dining' },
    { id: 'grounds', label: 'Park-Like Grounds' },
    { id: 'scenic', label: 'Holyrood Surroundings' },
  ];


  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E5DFC5]" id="gallery" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
              PHOTO GALLERY
            </span>
            <div className="h-[1px] w-8 bg-[#233B31]"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-4" id="gallery-heading">
            A look inside our home and Holyrood grounds.
          </h2>
          <p className="text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
            Take a visual tour of Hi Haven Manor. Our 15-resident home features bright bedrooms, communal living rooms, home-cooked family dinners, and peaceful coastal surroundings.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#233B31] text-[#FAF8F5]'
                  : 'bg-white text-[#5F6B65] border border-[#E5DFC5] hover:border-[#233B31] hover:text-[#1C2622]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative cursor-pointer bg-white border border-[#E5DFC5] overflow-hidden aspect-[4/3]"
              id={`gallery-item-${item.id}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2622]/80 via-[#1C2622]/20 to-transparent opacity-90 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#D5CEBF] mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-lg font-normal text-[#FAF8F5] leading-snug">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#FAF8F5]/80">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Dialog */}
      {lightboxItem && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full bg-[#1C2622] overflow-hidden border border-[#2A3832]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-[#1C2622] border-t border-[#2A3832]">
              <span className="text-[10px] uppercase tracking-wider text-[#D5CEBF] font-semibold">
                {lightboxItem.categoryLabel}
              </span>
              <h3 className="font-serif text-xl font-normal text-[#FAF8F5] mt-1">
                {lightboxItem.title}
              </h3>
              <p className="text-xs text-[#FAF8F5]/75 mt-2 font-light">
                {lightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

