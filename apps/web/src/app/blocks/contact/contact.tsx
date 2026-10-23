import HeroInnerBlock from '@/app/components/common/hero-inner/Hero-inner';
import { contactCardsData, HeroInnerContactData } from '@/app/data/data-contact';
import { socialIconsData } from '@/app/data/data-general';
import ContactUsFrom from './ContactUsFrom';

const Contact = () => {
  return (
    <div className="bg-black">
      <HeroInnerBlock
        title={'Contact Us'}
        image={'/hero/gallery-14a.jpg'}
        altText={HeroInnerContactData.altText}
        breadcrumbs={[
          { id: 1, title: 'Home', link: '/' },
          { id: 2, title: 'Contact', link: '/contact-us' },
        ]}
      />
      <section className="py-16 bg-[#112020]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-[#fbfffd] uppercase tracking-[0.3em] mb-10">Follow our story</p>
          <div className="flex flex-wrap gap-6 justify-center mt-5">
            {socialIconsData.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#e7d8c3] hover:border-[#e7d8c3] transition-all duration-300 shadow-xl backdrop-blur-sm"
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* --- TOP SECTION: INFO CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactCardsData.map((item, i) => (
              <div
                key={i}
                className="group bg-[#e7d8c3] p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-[#c24156]/5 rounded-full flex items-center justify-center text-[#b08243] mx-auto mb-6 group-hover:bg-[#b08243] group-hover:text-white transition-colors">
                  <item.icon className="size-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1A3030] mb-2">{item.title}</h3>
                <p className="text-black font-medium mb-1">{item.detail}</p>
                <p className="text-gray-400 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Contact Us From */}
          <ContactUsFrom />
        </div>
      </section>
    </div>
  );
};

export default Contact;
