import { StatusPageProps } from '@/app/types/common.types';
import { Facebook, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa6';

export const InfoGeneralData = {
  urlLogo: '/favicon.png',
  urlMap:
    'https://www.google.com/maps/search/?api=1&query=JJ%27s+Irish+Restaurant%2C+Road+3827%2C+Building+816%2C+Block+338%2C+Adliya%2C+Bahrain',
  mainPhone: '+973 33843005',
  whatsapp: '+973 33843005',
  emailInfo: 'info@jjrestaurant.com',
  emailReservations: 'jjsbahrain@gmail.com',
  address: 'Road 3827 Building 816, Block 338 Manama, Al Qudaybiyah',
  city: 'Manama',
  zip: '338',
  country: 'BRN',
  largeCountry: 'Bahrain',
  mainPhoneLabel: 'Phone:',
  whatsappLabel: 'WhatsApp:',
  copyright: "© 2026 JJ'S Restaurant. All rights reserved.",
  scrollToTopLabel: 'Go to top',
  scrollToTopIconClasses: 'fas fa-angle-double-up',
  menuToggleAriaLabelOpen: 'Open menu',
  menuToggleAriaLabelClose: 'Close menu',
  topbar: {
    addressIcon: 'fa-solid fa-location-dot',
    addressAriaLabel: 'Location',
    phoneIcon: 'fa-solid fa-phone',
    phoneAriaLabel: 'Call us at',
    emailIcon: 'fa-solid fa-envelope',
    emailAriaLabel: 'Email us at',
  },
};

export const LogoData = {
  urlLogo: '/favicon.png',
  altLogo: 'Logo',
  hrefLogo: '/',
  widthLogo: 120,
  heightLogo: 120,
};

export const socialIconsData = [
  { icon: Instagram, href: 'https://www.instagram.com/jjsbahrain?stkn=c3B1ZTY1ZjBiNmtu', ariaLabel: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1JS3saVUvm/', ariaLabel: 'Facebook' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@jjsbahrain?_r=1&_t=ZS-9AJ8ZA2ITZN', ariaLabel: 'Tiktok' },
];

export const confirmationPageData: StatusPageProps = {
  backgroundImageSrc: '/bg/bg-cta.jpg',
  backgroundImageAlt: 'Decorative background with a pleasant texture',
  imageSrc: '',
  imageAlt: 'Illustration for confirmation page',
  imageWidth: 500,
  imageHeight: 283,
  heading: 'Thank you!',
  text: 'We have received your submission and will get back to you as soon as possible.',
  buttonLink: '/',
  buttonText: 'Back to Homepage',
};
