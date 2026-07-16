import { FaPhone, FaWhatsapp, FaInstagram, FaYoutube, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const exploreLinks = [
    { label: "Home", to: "/" },
    { label: "About Trust", to: "https://hindusthan.net/about-us", external: true },
    { label: "Mission & Vision", to: "/mission" },
    { label: "Our Profile", to: "/profile" },
    { label: "Milestones", to: "/milestones" },
    { label: "Doctors", to: "/doctors" },
  ];

  const careLinks = [
    { label: "All Specialities", to: "/specialities" },
    { label: "Health Packages", to: "/facilities/mhc" },
    { label: "Ambulance", to: "/facilities/ambulance" },
    { label: "Birth Center", to: "/facilities/birthing-centre" },
    { label: "Blood Bank", to: "/facilities/blood-bank" },
    { label: "Rooms", to: "/facilities/rooms" },
    { label: "Pharmacy", to: "/facilities/pharmacy" },
    { label: "Insurance", to: "/facilities/insurance" },
  ];

  const resourceLinks = [
    { label: "News", to: "/news" },
    { label: "Brochure", to: "/brochure/hindusthan-hospital-brochure.pdf", external: true },
    { label: "Institutions", to: "https://hindusthan.net", external: true },
    { label: "Courses", to: "/academics/Courses" },
    { label: "Careers", to: "/careers" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Reach Us", to: "/contact" },
    { label: "Feedback", to: "/" },
  ];

const LinkList = ({ title, links }) => (
  <div>
    <h3 className="font-display mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#EFDFB0]">
      {title}
    </h3>
    <span className="mb-4 block h-px w-8 bg-[#C9962B]/50" />
    <ul className="space-y-2.5">
      {links.map((item, i) => (
        <li key={i}>
          {item.external ? (
            
             <a href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-[#F3AEAE]"
            >
              {item.label}
              <FaArrowRight className="text-[10px] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
          ) : (
            
             <a href={item.to}
              className="group flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-[#F3AEAE]"
            >
              {item.label}
              <FaArrowRight className="text-[10px] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);
  return (
    <footer className="relative overflow-hidden bg-[#0A1B33] px-6 pb-8 pt-14 text-white md:px-12 lg:px-16">
      {/* signature top hairline, matches btn-wine gradient elsewhere */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#8F1519] via-[#B61B1F] to-[#C9962B]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#B61B1F]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand & contact */}
          <div>
            <h3 className="font-display mb-1 text-lg font-extrabold text-white">Hindusthan Hospital</h3>
            <p className="mb-5 text-xs text-white/50">Trusted care, measured in results.</p>

            <p className="mb-2 text-sm text-white/70">
              <span className="font-semibold text-white">Email:</span>{" "}
              <a href="mailto:info@hindusthanhospital.com" className="hover:text-[#F3AEAE]">
                info@hindusthanhospital.com
              </a>
            </p>
            <p className="mb-2 text-sm text-white/70">
              <span className="font-semibold text-white">Contact:</span> 0422 4327777, 0422 4327778
            </p>
            <p className="mb-5 text-sm text-white/70">
              <span className="font-semibold text-[#F3AEAE]">Emergency:</span> 0422 - 4327799
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a href="tel:+914224327777" title="Call us"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-all hover:-translate-y-0.5 hover:border-[#B61B1F] hover:bg-[#B61B1F] hover:text-white">
                <FaPhone size={15} />
              </a>
              <a href="https://wa.me/917339095561" target="_blank" rel="noopener noreferrer" title="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-all hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white">
                <FaWhatsapp size={15} />
              </a>
              <a href="https://www.instagram.com/hindusthan_hospital/" target="_blank" rel="noopener noreferrer" title="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-all hover:-translate-y-0.5 hover:border-[#C9962B] hover:bg-[#C9962B] hover:text-white">
                <FaInstagram size={15} />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" title="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-all hover:-translate-y-0.5 hover:border-[#B61B1F] hover:bg-[#B61B1F] hover:text-white">
                <FaYoutube size={15} />
              </a>
            </div>
          </div>

          <LinkList title="Explore" links={exploreLinks} />
          <LinkList title="Care & Services" links={careLinks} />
          <LinkList title="Resources" links={resourceLinks} />
        </div>

        {/* Address + Map row */}
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-2">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="font-display mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#EFDFB0]">
                Coimbatore
              </h4>
              <p className="text-sm leading-relaxed text-white/65">
                Hindusthan Hospital<br />
                522/3, 523/3 Nava India Road,<br />
                Udaiyampalayam,<br />
                Coimbatore - 641028
              </p>
              <p className="mt-2 text-sm text-white/70">
                <span className="font-semibold text-white">Phone:</span> +91 422 432 7777
              </p>
            </div>
            <div>
              <h4 className="font-display mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#EFDFB0]">
                Mettupalayam Branch
              </h4>
              <p className="text-sm leading-relaxed text-white/65">
                Vip Nagar,<br />
                Mettupalayam to Coimbatore Main Road,<br />
                Chickadasampalayam,<br />
                Mettupalayam, Tamil Nadu - 641304
              </p>
              <p className="mt-2 text-sm text-white/70">
                <span className="font-semibold text-white">Phone:</span> +91 425 422 3313
              </p>
            </div>
          </div>

          <div className="h-52 w-full overflow-hidden rounded-2xl border border-white/10 md:h-64">
            <iframe
              title="Hindusthan Hospital Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2527591634425!2d76.99247987504542!3d11.019652989144268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85984bad6eb13%3A0x74121d330f8f6126!2sHindusthan%20Hospital!5e0!3m2!1sen!2sin!4v1763896614931!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Hindusthan Hospital. All rights reserved.</p>
          <p>NABH Accredited · CAHO Certified</p>
        </div>
      </div>
    </footer>
  );
}