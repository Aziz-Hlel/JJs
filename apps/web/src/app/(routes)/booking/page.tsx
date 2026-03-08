import { HeroInnerContactData } from "@/app/hooks/data-contact";
import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";

import BookingForm from "@/app/blocks/Booking/BookingForm";

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
      <BookingForm />
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
