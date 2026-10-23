'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Download from 'yet-another-react-lightbox/plugins/download';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const MenuComp = () => {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks' | 'cocktails'>('food');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const menuItems = [
    {
      id: 'cover',
      type: 'cover',
      title: 'Le Gourmet',
      subtitle: 'Menu Dégustation',
      image: '/ourImages/food/menu00.png',
    },
    { name: 'Salade César', image: '/ourImages/food/menu1.png' },
    { name: 'Carpaccio de bœuf', image: '/ourImages/food/menu2.png' },
    { name: "Soupe à l'Oignon", image: '/ourImages/food/menu3.png' },
    { name: 'Filet de Bar', image: '/ourImages/food/menu4.png' },
    { name: 'Entrecôte Grillée', image: '/ourImages/food/menu5.png' },
    { name: 'Risotto aux Champignons', image: '/ourImages/food/menu6.png' },
    { name: 'Plateau de Fromages', image: '/ourImages/food/menu7.png' },
    { name: 'Fondant au Chocolat', image: '/ourImages/food/menu8.png' },
    {
      id: 'back-cover',
      type: 'back-cover',
      title: 'Merci',
      subtitle: 'À très bientôt',
      image: '/ourImages/food/menu0.png',
    },
  ];

  const drinkItems = [
    {
      id: 'cover',
      type: 'cover',
      title: "JJ's Irish Restaurant",
      subtitle: 'Drinks Menu',
      name: 'Drinks Menu',
      image: '/ourImages/drinks/page-0001.jpg',
    },
    { name: 'page-0002', image: '/ourImages/drinks/page-0002.jpg' },
    { name: 'page-0003', image: '/ourImages/drinks/page-0003.jpg' },
    { name: 'page-0004', image: '/ourImages/drinks/page-0004.jpg' },
    { name: 'page-0005', image: '/ourImages/drinks/page-0005.jpg' },
    { name: 'page-0006', image: '/ourImages/drinks/page-0006.jpg' },
    { name: 'page-0007', image: '/ourImages/drinks/page-0007.jpg' },
    { name: 'page-0008', image: '/ourImages/drinks/page-0008.jpg' },
    { name: 'page-0009', image: '/ourImages/drinks/page-0009.jpg' },
    { name: 'page-0010', image: '/ourImages/drinks/page-0010.jpg' },
    { name: 'page-0011', image: '/ourImages/drinks/page-0011.jpg' },
    {
      id: 'back-cover',
      type: 'back-cover',
      title: 'Sláinte',
      subtitle: 'À très bientôt',
      name: 'Sláinte',
      image: '/ourImages/drinks/page-0012.jpg',
    },
  ];

  const cocktailsItems = [
    {
      id: 'cover',
      type: 'cover',
      title: "JJ's Irish Restaurant",
      subtitle: 'Cocktails Menu',
      name: 'Cocktails Menu',
      image: '/ourImages/cocktails/page-0001.jpg',
    },
    { name: 'page-0002', image: '/ourImages/cocktails/page-0002.jpg' },
    { name: 'page-0003', image: '/ourImages/cocktails/page-0003.jpg' },
    { name: 'page-0004', image: '/ourImages/cocktails/page-0004.jpg' },
    { name: 'page-0005', image: '/ourImages/cocktails/page-0005.jpg' },
    {
      id: 'back-cover',
      type: 'back-cover',
      title: 'Sláinte',
      subtitle: 'À très bientôt',
      name: 'Sláinte',
      image: '/ourImages/cocktails/page-0006.jpg',
    },
  ];

  const currentItems = activeTab === 'food' ? menuItems : activeTab === 'drinks' ? drinkItems : cocktailsItems;

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'food' | 'drinks' | 'cocktails');
    setCurrentIndex(0);
    setLightboxOpen(false);
  };

  // --- LOGIQUE DE SWIPE ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    // Swipe vers la gauche (Suivant)
    if (distance > 50 && currentIndex < currentItems.length) {
      setCurrentIndex((c) => c + 1);
    }
    // Swipe vers la droite (Précédent)
    if (distance < -50 && currentIndex > 0) {
      setCurrentIndex((c) => c - 1);
    }
    setTouchStart(null);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const renderPageContent = (item: any, index: number) => {
    if (!item) return <div className="empty-page" />;

    if (item.type === 'cover' || item.type === 'back-cover') {
      return (
        <div className="full-page-layout ">
          <Image src={item.image} alt={item.title || item.name || 'Menu'} fill className="object-cover" priority />
          {(item.title || item.subtitle) && (
            <div className="overlay">
              {item.title && <h1 className="title-large">{item.title}</h1>}
              {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="magazine-page">
        <header className="page-header">PAGE HEADER - {index + 1}</header>
        <div className="magazine-image-container">
          <Image src={item.image} fill className="object-cover" alt={item.name} />
        </div>
        <div className="magazine-text">
          <h3 className="item-title-magazine">{item.name}</h3>
        </div>
        <footer className="page-footer">{index + 1}</footer>
      </div>
    );
  };

  const slides = currentItems.map((item) => ({
    src: item.image,
    download: item.image,
  }));

  return (
    <>
      <div className="book-scene" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {/* Shadcn Tabs: Food vs Drink menu */}
        <div className="menu-tabs-wrapper">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full sm:w-auto flex justify-center">
            <TabsList className="menu-tabs-list">
              <TabsTrigger value="food" className="menu-tabs-trigger">
                Food Menu
              </TabsTrigger>
              <TabsTrigger value="drinks" className="menu-tabs-trigger">
                Drink Menu
              </TabsTrigger>
              <TabsTrigger value="cocktails" className="menu-tabs-trigger">
                Cocktail Menu
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="book-container">
          <div className="book-spine"></div>

          {currentItems.map((item, index) => {
            const isFlipped = index < currentIndex;
            const zIndex = isFlipped ? index : currentItems.length - index;

            return (
              <div
                key={`${activeTab}-${index}`}
                className={`book-page ${isFlipped ? 'flipped' : ''}`}
                style={{ zIndex }}
                onClick={() => openLightbox(index)}
              >
                <div className="page-face front">
                  {renderPageContent(item, index)}
                  <div className="inner-shadow-right"></div>
                </div>

                <div className="page-face back">
                  <div className="back-content">
                    <div className="page-header">
                      <img src="/logo1.png" alt="" className="mx-auto" style={{ maxWidth: '400px' }} />
                    </div>
                    <div className="logo-watermark">LG</div>
                  </div>
                  <div className="inner-shadow-left"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Les boutons ne s'affichent que sur le Web (Desktop) */}
        <div className="book-controls no-mobile">
          <button
            onClick={() => setCurrentIndex((c) => Math.max(0, c - 1))}
            disabled={currentIndex === 0}
            className="btn"
          >
            Previous
          </button>
          <span className="page-indicator">
            {currentIndex} / {currentItems.length}
          </span>
          <button
            onClick={() => setCurrentIndex((c) => Math.min(currentItems.length, c + 1))}
            disabled={currentIndex === currentItems.length}
            className="btn"
          >
            Next
          </button>
        </div>

        <style jsx>{`
          .book-scene {
            /* Centrage absolu dans le viewport */
            min-height: 100vh;
            width: 100%;
            background-image: url('/services/bg.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin-top: 7%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            perspective: 2500px;
            overflow: hidden;
            padding: 20px;
            transition: background 0.5s ease;
          }

          .menu-tabs-wrapper {
            margin-bottom: 24px;
            z-index: 20;
            display: flex;
            justify-content: center;
          }

          :global(.menu-tabs-list) {
            background: rgba(255, 255, 255, 0.18) !important;
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
            padding: 4px;
            border-radius: 9999px;
            height: 48px;
            display: inline-flex;
            gap: 6px;
          }

          :global(.menu-tabs-trigger) {
            border-radius: 9999px !important;
            padding: 8px 24px !important;
            font-size: 0.95rem !important;
            font-weight: 600 !important;
            letter-spacing: 0.5px !important;
            color: #303d3b !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            background: transparent;
            cursor: pointer;
          }

          :global(.menu-tabs-trigger:hover:not([data-state='active'])) {
            background: rgba(255, 255, 255, 0.25) !important;
            color: #966b35 !important;
          }

          :global(.menu-tabs-trigger[data-state='active']) {
            background: #303d3b !important;
            color: #ffffff !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25) !important;
          }

          /* book-page cursor indicates it's clickable to open lightbox */
          .book-page {
            cursor: zoom-in;
          }

          .book-container {
            /* Largeur adaptative */
            width: clamp(280px, 40vw, 450px);
            aspect-ratio: 3 / 4;
            position: relative;
            transform-style: preserve-3d;

            /* Centré par défaut sur Web */
            transform: translateX(0);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          @media (max-width: 768px) {
            .book-container {
              width: 80vw;
              transform: translateX(0);
            }

            .no-mobile {
              display: none !important;
            }

            .book-scene {
              perspective: 1500px;
              padding: 20px 16px;
            }

            .menu-tabs-wrapper {
              margin-bottom: 20px;
              width: 100%;
              max-width: 280px;
            }

            :global(.menu-tabs-list) {
              flex-direction: column !important;
              height: auto !important;
              width: 100% !important;
              border-radius: 18px !important;
              padding: 6px !important;
              gap: 4px !important;
            }

            :global(.menu-tabs-trigger) {
              width: 100% !important;
              border-radius: 12px !important;
              padding: 10px 16px !important;
              font-size: 0.9rem !important;
              justify-content: center !important;
            }
          }

          .book-spine {
            position: absolute;
            left: 0;
            top: 0;
            width: 3px;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 100;
          }

          .book-page {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transform-origin: left center;
            transition: transform 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            transform-style: preserve-3d;
            cursor: pointer;
          }

          .book-page.flipped {
            transform: rotateY(-180deg);
          }

          .page-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            background: #fdfaf7;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
            padding: clamp(10px, 3vw, 25px);
            overflow: hidden;
          }

          .page-face.front {
            border-radius: 0 10px 10px 0;
          }

          .page-face.back {
            transform: rotateY(180deg);
            border-radius: 10px 0 0 10px;
            background: #f5f0eb;
          }

          /* Styles Magazine */
          .magazine-page {
            height: 100%;
            display: flex;
            flex-direction: column;
            color: #555;
          }

          .page-header {
            text-align: center;
            font-weight: bold;
            margin-bottom: 5%;
            font-size: clamp(0.7rem, 1.5vw, 1rem);
          }

          .magazine-image-container {
            position: relative;
            width: 100%;
            height: 45%;
            margin-bottom: 5%;
          }

          .magazine-text {
            font-size: clamp(0.75rem, 1.2vw, 0.9rem);
            line-height: 1.4;
          }

          .item-title-magazine {
            font-family: serif;
            font-size: clamp(1rem, 2vw, 1.3rem);
            color: #222;
          }

          .page-footer {
            margin-top: auto;
            text-align: right;
            font-size: 0.7rem;
          }

          .inner-shadow-right {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 10%;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.12), transparent);
            pointer-events: none;
            z-index: 2;
          }

          .inner-shadow-left {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 10%;
            background: linear-gradient(to left, rgba(0, 0, 0, 0.12), transparent);
            pointer-events: none;
            z-index: 2;
          }

          /* --- CONTROLS CONTAINER --- */
          .book-controls {
            margin-top: 40px;
            display: flex;
            gap: 20px;
            align-items: center;
            z-index: 10;

            /* Nouveau design du background */
            background: rgba(255, 255, 255, 0.15); /* Fond clair transparent */
            backdrop-filter: blur(10px); /* Effet de flou derrière */
            padding: 12px 24px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          }

          /* --- BUTTONS --- */
          .btn {
            background: #303d3b; /* Couleur sombre de votre image */
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          }

          .btn:hover:not(:disabled) {
            background: #966b35; /* Votre couleur or/marron au survol */
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
          }

          .btn:disabled {
            background: #555;
            opacity: 0.5;
            cursor: not-allowed;
            box-shadow: none;
          }

          /* --- PAGE INDICATOR --- */
          .page-indicator {
            color: #303d3b;
            font-family: 'Inter', sans-serif;
            font-weight: bold;
            font-size: 1.1rem;
            min-width: 60px;
            text-align: center;
          }
        `}</style>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        zoom={{ maxZoomPixelRatio: 1.5, zoomInMultiplier: 1.5, scrollToZoom: true, doubleClickMaxStops: 5 }}
        slides={slides}
        plugins={[Zoom, Fullscreen, Download, Thumbnails]}
      />
    </>
  );
};

export default MenuComp;
