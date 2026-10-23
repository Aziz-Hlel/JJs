import { Mail, MapPin, Phone } from 'lucide-react';
import { InfoGeneralData } from './data-general';

export const HeroInnerContactData = {
  title: 'contact us',
  breadcrumbs: [
    {
      id: 1,
      title: 'Home',
      link: '/',
    },
    {
      id: 2,
      title: 'Contact us',
      link: '',
    },
  ],
  image: '/bg/bg-cta.jpg',
  altText: 'Contact us',
};

export const contactData = {
  subtitle: 'Reservation',
  title: 'Book a Table on Time',
  align: 'center',
  phrase: `The first restaurant proprietor is believed to have
            been one A. Boulanger, a soup vendor, who opened his
            business in 1765.`,
  formAction: '/ruta-de-envio',
  className: '',
  formContent: {
    nameLabel: 'Name:',
    namePlaceholder: 'Name',
    phoneLabel: 'Phone:',
    phonePlaceholder: 'Phone',
    emailLabel: 'Email:',
    emailPlaceholder: 'Email',
    personsLabel: 'Persons:',
    personsPlaceholder: '0',
    dateLabel: 'Date:',
    timeLabel: 'Hours:',
    messageLabel: 'Message:',
    messagePlaceholder: 'Comments',
    submitButtonText: 'Book a Table',
  },
};

export const titleLocationsData = {
  title: 'Our locations',
  align: 'left',
};

export const contactCardsData = [
  {
    icon: Phone,
    title: 'Call Us',
    detail: InfoGeneralData.mainPhone,
    sub: `Or on whatsapp ${InfoGeneralData.whatsapp}`,
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: InfoGeneralData.emailInfo,
    sub: 'Online support 24/7',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: InfoGeneralData.address,
    sub: InfoGeneralData.city,
  },
];
