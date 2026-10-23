import { galleryData } from '@/app/data/data-gallery';
import { CloseButtonProps } from '@/app/types/common.types';
import React from 'react';

const CloseLightBox: React.FC<CloseButtonProps> = ({ onClose, ariaLabel = galleryData.lightboxCloseAriaLabel }) => {
  return (
    <button onClick={onClose} className="lightbox-close" aria-label={ariaLabel}>
      ×
    </button>
  );
};

export default CloseLightBox;
