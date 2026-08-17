import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hiHavenData';
import { GalleryItem } from '../types';
import { Eye, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export const SanctuaryGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Sanctuary Views' },
    { id: 'grounds', label: 'Sanctuary Grounds' },
    { id: 'suites', label: 'Accommodations' },
    { id: 'dining', label: 'Dining & Nutrition' },
    { id: 'lifestyle', label: 'Living Spaces' },
    { id: 'care', label: 'Dedicated Care' },
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
    <section className="gallery-section-wrapper" id="gallery" aria-labelledby="gallery-heading">
      <div className="section-editorial-header-block">
        <span className="section-eyebrow-accent-label">Visual Sanctuary</span>
        <h2 className="section-display-heading" id="gallery-heading">
          Moments of Peace, Care & Connection
        </h2>
        <p className="section-lead-explanation">
          Explore the natural beauty of our Holyrood sanctuary, from sun-drenched private rooms to our communal hearth and landscaped outdoor walking paths.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#171E1C] text-white border-[#171E1C]'
                : 'bg-white text-[#55645D] border-[#9B8258]/30 hover:border-[#78623A]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid-layout">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openLightbox(item)}
            className={`gallery-tile-card ${item.aspectRatio === 'portrait' ? 'tall sm:row-span-2' : ''}`}
            id={`gallery-item-${item.id}`}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              loading="lazy"
            />
            <div className="gallery-tile-overlay-content">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D3C9BD] mb-1">
                {item.categoryLabel}
              </span>
              <h3 className="font-serif text-base font-bold text-[#FAF7F2] leading-tight">
                {item.title}
              </h3>
              <div className="mt-2 flex items-center gap-1 text-xs text-[#E8E0D5]">
                <ZoomIn className="w-3.5 h-3.5 text-[#9B8258]" />
                <span>Enlarge View</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      {lightboxItem && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close image preview"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 rounded-full hover:bg-black/70 transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 rounded-full hover:bg-black/70 transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full bg-[#171E1C] rounded-xl overflow-hidden border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 text-white">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9B8258]">
                  {lightboxItem.categoryLabel}
                </span>
                <span className="text-xs text-white/50">
                  Hi Haven Sanctuary • Holyrood, NL
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#FAF7F2] mb-1">
                {lightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#C8BCAC] leading-relaxed">
                {lightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
