import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { HeroInnerContactData } from "@/app/hooks/data-contact";
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import ContactUsFrom from "./ContactUsFrom";

const Contact = () => {
  return (
    <div className="bg-black">
      <HeroInnerBlock
        title={"Contact Us"}
        image={"/hero/gallery-14a.jpg"}
        altText={HeroInnerContactData.altText}
        breadcrumbs={[
          { id: 1, title: "Home", link: "/" },
          { id: 2, title: "Contact", link: "/contact-us" },
        ]}
      />
      <section className="py-16 bg-[#112020]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-[#fbfffd] uppercase tracking-[0.3em] mb-10">
            Follow our story
          </p>
          <div className="flex flex-wrap gap-6 justify-center mt-5">
            {[
              { icon: <Instagram size={22} />, link: "#", label: "Instagram" },
              { icon: <Facebook size={22} />, link: "#", label: "Facebook" },
              { icon: <Linkedin size={22} />, link: "#", label: "LinkedIn" },
              { icon: <Twitter size={22} />, link: "#", label: "Twitter" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                aria-label={social.label}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#e7d8c3] hover:border-[#e7d8c3] transition-all duration-300 shadow-xl backdrop-blur-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* --- TOP SECTION: INFO CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                detail: "+1 (555) 123-4567",
                sub: "Mon-Fri from 9am to 6pm",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                detail: "hello@jjs.com",
                sub: "Online support 24/7",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Us",
                detail: "123 Business Street",
                sub: "New York, NY 10001",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-[#e7d8c3] p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-[#c24156]/5 rounded-full flex items-center justify-center text-[#b08243] mx-auto mb-6 group-hover:bg-[#b08243] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1A3030] mb-2">
                  {item.title}
                </h3>
                <p className="text-black font-medium mb-1">{item.detail}</p>
                <p className="text-gray-400 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Contact Us From */}
          <ContactUsFrom />
        </div>
      </section>

      {/* --- NEW DEDICATED SOCIAL MEDIA SECTION --- */}
      <section className="py-16 bg-[#1A3030]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-[#fbfffd] uppercase tracking-[0.3em] mb-10">
            Follow our story
          </p>
          <div className="flex flex-wrap gap-6 justify-center mt-5">
            {[
              { icon: <Instagram size={22} />, link: "#", label: "Instagram" },
              { icon: <Facebook size={22} />, link: "#", label: "Facebook" },
              { icon: <Linkedin size={22} />, link: "#", label: "LinkedIn" },
              { icon: <Twitter size={22} />, link: "#", label: "Twitter" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                aria-label={social.label}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#e7d8c3] hover:border-[#e7d8c3] transition-all duration-300 shadow-xl backdrop-blur-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
