import HeroInnerBlock from '@/app/components/common/hero-inner/Hero-inner';
import { HeroInnerServicesData } from '@/app/data/data';

import ContactBlock from '@/app/blocks/Booking/contact';
import { EventsBlock } from '@/app/blocks/events';
import { GalleryBasic } from '@/app/blocks/gallery';
import IllustrationsListTwo from '@/app/blocks/services/variants/servicesListTwo/ServicesListTwo';
import { TestimonialsBlock } from '@/app/blocks/testimonials/';

// Data
import { contactData } from '@/app/data/data-contact';
import { eventsBlockData } from '@/app/data/data-events';
import { galleryData } from '@/app/data/data-gallery';
import { ServiceCardListData } from '@/app/data/data-services';
import { testimonialsData } from '@/app/data/data-testimonials';

const ServicesPage = () => {
  return (
    <>
      {/* Hero Inner - Block */}
      <HeroInnerBlock
        title={HeroInnerServicesData.title}
        image={HeroInnerServicesData.image}
        altText={HeroInnerServicesData.altText}
        breadcrumbs={HeroInnerServicesData.breadcrumbs}
      />
      {/* / Hero Inner - Block */}

      {/* Illustrations Card - List - Block */}
      <IllustrationsListTwo {...ServiceCardListData} />
      {/* / Illustrations Card - List - Block */}

      {/* Events Block - Box */}
      <EventsBlock {...eventsBlockData} />
      {/* Events Block - Box */}

      {/* Testimonials Block */}
      <TestimonialsBlock {...testimonialsData} />
      {/* / Testimonials Block */}

      {/* Masonry Gallery */}
      <GalleryBasic {...galleryData} />
      {/* / Masonry Gallery */}

      {/* Contact Block */}
      <ContactBlock {...contactData} />
      {/* / Contact Block */}
    </>
  );
};

export default ServicesPage;
