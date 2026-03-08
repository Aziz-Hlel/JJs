import { HeroInnerContactData } from "@/app/hooks/data-contact";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import ContactBlock from "@/app/blocks/Booking/contact";
import LocationsBlock from "@/app/blocks/locations/locations";

// data
import { contactData } from "@/app/hooks/data-contact";
import { locationsData } from "@/app/hooks/data-contact";
import ContactForm from "@/app/blocks/Booking/BookingForm";
import { HeroInnerAboutData } from "@/app/hooks/data";

const BookingPage = () => {
  return (
    <>
      {/* Hero Inner - Block */}
      <HeroInnerBlock
        title={"Contact Us"}
        image={"/hero/gallery-14a.jpg"}
        altText={HeroInnerContactData.altText}
        breadcrumbs={[
          { id: 1, title: "Home", link: "/" },
          { id: 2, title: "Contact", link: "/contact" },
        ]}
      />
      {/* / Hero Inner - Block */}
      <ContactForm />
      {/* Contact Block */}
      {/* <ContactBlock {...contactData} /> */}
      {/* / Contact Block */}

      {/* Locations Block */}
      {/* <LocationsBlock {...locationsData} /> */}
      {/* Locations Block */}
    </>
  );
};

export default BookingPage;
