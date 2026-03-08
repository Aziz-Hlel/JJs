"use client";
import React, { useState } from "react";
import Image from "next/image";

const MenuComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false); // État pour le zoom mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const menuItems = [
    {
      id: "cover",
      type: "cover",
      title: "Le Gourmet",
      subtitle: "Menu Dégustation",
      image: "/ourImages/food/menu00.png",
    },
    { name: "Salade César", image: "/ourImages/food/menu1.png" },
    { name: "Carpaccio de bœuf", image: "/ourImages/food/menu2.png" },
    { name: "Soupe à l'Oignon", image: "/ourImages/food/menu3.png" },
    { name: "Filet de Bar", image: "/ourImages/food/menu4.png" },
    { name: "Entrecôte Grillée", image: "/ourImages/food/menu5.png" },
    { name: "Risotto aux Champignons", image: "/ourImages/food/menu6.png" },
    { name: "Plateau de Fromages", image: "/ourImages/food/menu7.png" },
    { name: "Fondant au Chocolat", image: "/ourImages/food/menu8.png" },
    {
      id: "back-cover",
      type: "back-cover",
      title: "Merci",
      subtitle: "À très bientôt",
      image: "/ourImages/food/menu0.png",
    },
  ];

  // --- LOGIQUE DE SWIPE ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    // Swipe vers la gauche (Suivant)
    if (distance > 50 && currentIndex < menuItems.length) {
      setCurrentIndex((c) => c + 1);
    }
    // Swipe vers la droite (Précédent)
    if (distance < -50 && currentIndex > 0) {
      setCurrentIndex((c) => c - 1);
    }
    setTouchStart(null);
  };

  const toggleZoom = () => {
    // On n'active le zoom que si on est sur un petit écran (mobile)
    if (window.innerWidth <= 768) {
      setIsZoomed(!isZoomed);
    }
  };

  const renderPageContent = (item: any, index: number) => {
    if (!item) return <div className="empty-page" />;

    if (item.type === "cover" || item.type === "back-cover") {
      return (
        <div className="full-page-layout ">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
          <div className="overlay">
            <h1 className="title-large">{item.title}</h1>
            <p className="subtitle">{item.subtitle}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="magazine-page">
        <header className="page-header">PAGE HEADER - {index + 1}</header>
        <div className="magazine-image-container">
          <Image
            src={item.image}
            fill
            className="object-cover"
            alt={item.name}
          />
        </div>
        <div className="magazine-text">
          <h3 className="item-title-magazine">{item.name}</h3>
        
        </div>
        <footer className="page-footer">{index + 1}</footer>
      </div>
    );
  };

  return (
    <div
      className={`book-scene ${isZoomed ? "zoomed-mode" : ""}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`book-container ${isZoomed ? "zoomed" : ""}`}
        onClick={toggleZoom}
      >
        <div className="book-spine"></div>

        {menuItems.map((item, index) => {
          const isFlipped = index < currentIndex;
          const zIndex = isFlipped ? index : menuItems.length - index;

          return (
            <div
              key={index}
              className={`book-page ${isFlipped ? "flipped" : ""}`}
              style={{ zIndex }}
            >
              <div className="page-face front">
                {renderPageContent(item, index)}
                <div className="inner-shadow-right"></div>
              </div>

              <div className="page-face back">
                <div className="back-content">
                  <div className="page-header">
                    <img
                      src="/logo1.png"
                      alt=""
                      className="mx-auto"
                      style={{ maxWidth: "400px" }}
                    />
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
          {currentIndex} / {menuItems.length}
        </span>
        <button
          onClick={() =>
            setCurrentIndex((c) => Math.min(menuItems.length, c + 1))
          }
          disabled={currentIndex === menuItems.length}
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
background-repeat: no-repeat;          margin-top:7%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          perspective: 2500px;
          overflow: hidden;
          padding: 20px;
          transition: background 0.5s ease;
        }

        /* Quand on zoom sur mobile, le fond devient encore plus sombre */
    .zoomed-mode {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
    url('/services/bg.png');
  background-size: cover;
  background-position: center;
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

        /* --- ZOOM MOBILE --- */
        .book-container.zoomed {
          transform: scale(1.3) translateX(0) !important;
          z-index: 1000;
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
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.12),
            transparent
          );
          pointer-events: none;
          z-index: 2;
        }

        .inner-shadow-left {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 10%;
          background: linear-gradient(
            to left,
            rgba(0, 0, 0, 0.12),
            transparent
          );
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
  backdrop-filter: blur(10px);          /* Effet de flou derrière */
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
  );
};

export default MenuComp;
