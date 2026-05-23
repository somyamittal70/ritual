import React, { useState, useEffect } from "react";
import logo from "../../public/logo.png";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Heart,
  Award,
  ChevronDown,
  Menu,
  X,
  Star,
  Users,
  CheckCircle,
  Flower2,
  Headphones,
  UserCheck,
} from "lucide-react";

const PHONE = "9971466271";
const PHONE_DISPLAY = "+91 9971466271";
const PHONE_HREF = "tel:+919971466271";
const NAME_EN = "Om Antim Niwas Shamshan Bhoomi";
const NAME_HI = "ॐ अन्तिम निवास शमसान भूमि";
const PANDIT = "Pandit Ji";
const ADDRESS =
  "Sector-2, Gram Patwadi Seva Samiti, Greater Noida West (Gautam Buddha Nagar)";

// Refined Dark Red & Golden Palette
const C = {
  dark: "#5c1d26", // Deep dark red — primary dark
  mid: "#bb8744", // True golden — mid tone
  accent: "#d4a055", // Warm golden accent — slightly lighter
  light: "#f0d5a0", // Soft gold-cream — text on dark
  bg: "#fdf6ec", // Warm cream background
  bgAlt: "#f9f1e3", // Slightly deeper cream
  white: "#faf6ef", // Off-white with warm golden tint
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSuccessMsg(
        "Thank you for reaching out. Our team will contact you shortly with compassion and care.",
      );
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        message: "",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24"
      style={{ background: C.bg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: C.light + "60", color: C.dark }}
          >
            <Heart size={14} />
            <span>Reach Out to Us</span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: C.dark }}
          >
            Contact <span style={{ color: C.accent }}>Us Today</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: C.mid }}>
            Our compassionate team is available 24/7 to assist you with dignity
            and care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./4.jpg"
                alt="Support"
                className="w-full h-[340px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${C.dark}E0 0%, ${C.dark}60 50%, transparent 100%)`,
                }}
              ></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold font-display mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:opacity-90 transition-all"
                    style={{
                      background: C.mid + "CC",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: C.dark }}
                    >
                      <Phone size={18} style={{ color: C.light }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: C.light }}>
                        Call {PANDIT}
                      </p>
                      <p className="font-bold" style={{ color: C.white }}>
                        {PHONE_DISPLAY}
                      </p>
                    </div>
                  </a>
                  <div
                    className="flex items-center space-x-3 p-3 rounded-xl"
                    style={{
                      background: "rgba(0,0,0,0.35)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: C.mid }}
                    >
                      <Clock size={18} style={{ color: C.dark }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: C.light }}>
                        Service Hours
                      </p>
                      <p className="font-bold text-white">24/7 Available</p>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-3 p-3 rounded-xl"
                    style={{
                      background: "rgba(0,0,0,0.35)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: C.mid }}
                    >
                      <MapPin size={18} style={{ color: C.dark }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: C.light }}>
                        Address
                      </p>
                      <p className="font-bold text-white text-sm">{ADDRESS}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl shadow-xl p-8"
            style={{ background: C.white, border: `1px solid ${C.light}` }}
          >
            <h3
              className="text-2xl font-bold mb-6 font-display"
              style={{ color: C.dark }}
            >
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: C.mid }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                  style={{
                    background: C.bg,
                    border: `1.5px solid ${C.light}`,
                    color: C.dark,
                  }}
                  placeholder="Your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: C.mid }}
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                    style={{
                      background: C.bg,
                      border: `1.5px solid ${C.light}`,
                      color: C.dark,
                    }}
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: C.mid }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                    style={{
                      background: C.bg,
                      border: `1.5px solid ${C.light}`,
                      color: C.dark,
                    }}
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: C.mid }}
                >
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                  style={{
                    background: C.bg,
                    border: `1.5px solid ${C.light}`,
                    color: C.dark,
                  }}
                  placeholder="Sector, Noida"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: C.mid }}
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                  style={{
                    background: C.bg,
                    border: `1.5px solid ${C.light}`,
                    color: C.dark,
                  }}
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              {successMsg && (
                <p
                  className="text-sm text-center font-medium p-3 rounded-xl"
                  style={{ background: C.light + "50", color: C.dark }}
                >
                  {successMsg}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full font-bold py-4 rounded-xl transition-all hover:opacity-90 hover:scale-[1.02] shadow-lg text-base disabled:opacity-60"
                style={{
                  background: `linear-gradient(135deg, ${C.dark} 0%, ${C.mid} 100%)`,
                  color: C.light,
                }}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function OmAntimNiwasSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const faqs = [
    {
      q: "What funeral services do you provide?",
      a: "We offer comprehensive funeral services including freezer box rentals, transportation, cremation arrangements, documentation assistance, and complete funeral ceremony coordination.",
    },
    {
      q: "How quickly can you respond to an emergency call?",
      a: "Our team is available 24/7 and can respond to any location in Greater Noida West and surrounding areas promptly. We understand the urgency and respond with immediate, compassionate assistance.",
    },
    {
      q: "What is included in your funeral packages?",
      a: "Our packages include freezer box rental, transportation, documentation support, cremation ground arrangements, priest coordination (Pandit Ji), and all necessary funeral supplies handled with dignity.",
    },
    {
      q: "Do you assist with legal documentation?",
      a: "Yes, we provide complete assistance with death certificates, cremation permits, and all required legal documentation. Our experienced team guides you through every step.",
    },
    {
      q: "What are your service charges?",
      a: "Our pricing is transparent and varies based on the services required. Contact Pandit Ji directly at 9971466271 for a compassionate consultation.",
    },
    {
      q: "Do you serve all communities and religions?",
      a: "Yes, we respect and serve all communities, religions, and cultural practices. Our team is trained to handle ceremonies according to your specific traditions and beliefs.",
    },
  ];

  return (
    <div className="font-sans" style={{ background: C.bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Nunito:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Nunito', sans-serif; }
        .font-display { font-family: 'Cormorant Garamond', serif; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes softPulse {
          0%,100% { opacity:.55; transform:scale(1); }
          50%      { opacity:.9;  transform:scale(1.12); }
        }
        .animate-fadeInUp { animation: fadeInUp .85s ease-out forwards; }
        .animate-fadeIn   { animation: fadeIn   .6s  ease-out forwards; }
        .diya-glow        { animation: softPulse 2.8s ease-in-out infinite; }

        .hover-lift { transition: transform .28s ease, box-shadow .28s ease; }
        .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 14px 36px rgba(92,29,38,.18); }

        .sp-btn {
          background: linear-gradient(135deg, #5c1d26 0%, #bb8744 100%);
          color: #f0d5a0;
          transition: all .28s ease;
        }
        .sp-btn:hover { opacity:.9; transform:scale(1.03); box-shadow:0 8px 22px rgba(92,29,38,.38); }

        .sp-outline {
          border: 2px solid #bb8744;
          color: #5c1d26;
          transition: all .25s ease;
          background: transparent;
        }
        .sp-outline:hover { background:#bb8744; color:#faf6ef; }

        .section-divider {
          width:56px; height:3px; margin:0 auto .9rem;
          background: linear-gradient(to right, #5c1d26, #f0d5a0, #bb8744);
          border-radius:2px;
        }

        input:focus, textarea:focus {
          border-color: #bb8744 !important;
          box-shadow: 0 0 0 3px rgba(187,135,68,.22);
        }

        .nav-underline::after {
          content:''; position:absolute; bottom:0; left:0;
          width:0; height:2px; background:#bb8744;
          border-radius:2px; transition: width .3s ease;
        }
        .nav-underline:hover::after { width:100%; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-3"
        }`}
        style={{
          background: scrolled
            ? "rgba(247, 247, 247, 0.94)"
            : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(187,135,68,0.12)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.50)"
            : "0 4px 20px rgba(0,0,0,0.28)",
        }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-amber-700/5 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* LOGO */}
            <div
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => scrollToSection("home")}
            >
              <div
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
                  overflow-hidden border border-amber-700/20
                  bg-gradient-to-br from-[#3a0d14] to-[#1a0508]
                  shadow-[0_0_25px_rgba(187,135,68,0.10)]
                  group-hover:scale-105 transition duration-500"
              >
                <div className="absolute inset-0 group-hover:transition duration-500"></div>
                <img
                  src={logo}
                  alt="Om Antim Niwas"
                  className="w-full h-full object-contain p-1 relative z-10"
                />
              </div>

              <div>
                <h1
                  className="font-display text-xl sm:text-2xl font-bold leading-tight tracking-wide"
                  style={{
                    color: "#5c1d26",
                    textShadow: "0 0 14px rgba(187,135,68,0.18)",
                  }}
                >
                  {NAME_EN}
                </h1>
                <p
                  className="text-sm mt-1 font-semibold"
                  style={{ color: C.dark + "90" }}
                >
                  {NAME_HI}
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative px-5 py-2.5 text-sm font-semibold rounded-xl
                    transition-all duration-300 group overflow-hidden"
                  style={{ color: "#5c1d26" }}
                >
                  <span className="absolute inset-0 bg-amber-700/5 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"></span>
                  <span
                    className="absolute left-1/2 bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-8 group-hover:left-[35%]"
                    style={{ background: C.mid }}
                  ></span>
                  <span className="relative z-10">{item}</span>
                </button>
              ))}

              {/* CTA */}
              <a
                href={PHONE_HREF}
                className="relative overflow-hidden ml-4 px-6 py-3 rounded-2xl
                  font-bold text-sm flex items-center space-x-2
                  border shadow-lg
                  hover:scale-105 transition-all duration-500 group"
                style={{
                  background: `linear-gradient(135deg, ${C.dark} 0%, #7a2833 50%, ${C.dark} 100%)`,
                  borderColor: "rgba(187,135,68,0.18)",
                  color: C.light,
                  boxShadow: `0 0 22px rgba(92,29,38,0.30)`,
                }}
              >
                <span className="absolute -left-20 top-0 h-full w-14 rotate-12 bg-white/15 blur-md group-hover:left-[130%] transition-all duration-1000"></span>
                <Phone size={16} className="relative z-10" />
                <span className="relative z-10">Call Now</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-xl border"
              style={{
                color: C.light,
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(187,135,68,0.15)",
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t animate-fadeIn"
            style={{
              background: "rgba(20,5,7,0.97)",
              borderColor: "rgba(187,135,68,0.10)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="px-4 py-6 space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 font-semibold rounded-xl transition-all duration-300"
                  style={{ color: "rgba(240,213,160,0.80)" }}
                >
                  {item}
                </button>
              ))}

              <a
                href={PHONE_HREF}
                className="mt-3 px-6 py-3 rounded-2xl font-bold w-full
                  flex items-center justify-center space-x-2 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${C.dark} 0%, #7a2833 100%)`,
                  color: C.light,
                }}
              >
                <Phone size={18} />
                <span>
                  Call {PANDIT}: {PHONE_DISPLAY}
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        className="pt-16 sm:pt-20 relative min-h-screen overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/1.png"
            alt={NAME_EN}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${C.dark}F0 0%, ${C.dark}B8 45%, ${C.mid}80 100%)`,
            }}
          ></div>
        </div>

        <div className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
            <div className="max-w-3xl">
              <p
                className="text-xl sm:text-2xl font-bold mb-3 animate-fadeInUp font-display"
                style={{
                  animationDelay: ".1s",
                  color: C.light,
                  letterSpacing: ".05em",
                }}
              >
                {NAME_HI}
              </p>

              <h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-fadeInUp"
                style={{ animationDelay: ".2s" }}
              >
                {NAME_EN}
              </h1>

              <div
                className="w-20 h-1 rounded-full mb-6 animate-fadeInUp"
                style={{
                  background: `linear-gradient(to right, ${C.accent}, ${C.light}, ${C.mid})`,
                  animationDelay: ".28s",
                }}
              ></div>
              <p
                className="text-base sm:text-lg mb-8 leading-relaxed animate-fadeInUp"
                style={{ animationDelay: ".38s", color: C.light + "CC" }}
              >
                Providing dignified and compassionate cremation &amp; funeral
                services with 24/7 availability. We are here to support you with
                professionalism and deep reverence.
              </p>

              <div
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8 animate-fadeInUp"
                style={{
                  animationDelay: ".43s",
                  background: C.mid + "28",
                  border: `1px solid ${C.mid}50`,
                }}
              >
                <MapPin size={14} style={{ color: C.light, flexShrink: 0 }} />
                <span className="text-sm" style={{ color: C.light + "DD" }}>
                  {ADDRESS}
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-fadeInUp"
                style={{ animationDelay: ".5s" }}
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="sp-btn px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 group shadow-2xl"
                >
                  <span>Request Service</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <a
                  href={PHONE_HREF}
                  className="px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all hover:opacity-80"
                  style={{
                    border: `2px solid ${C.mid}80`,
                    color: C.light,
                    background: C.mid + "18",
                  }}
                >
                  <Phone size={20} />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden sm:block">
          <div
            className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
            style={{ borderColor: C.mid + "60" }}
          >
            <div
              className="w-1.5 h-3 rounded-full"
              style={{ background: C.mid + "80" }}
            ></div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.dark} 0%, #7a3018 50%, ${C.mid} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                number: "500+",
                label: "Families Served",
                icon: <Users size={24} />,
              },
              {
                number: "24/7",
                label: "Always Available",
                icon: <Clock size={24} />,
              },
              {
                number: "10+",
                label: "Years of Service",
                icon: <Award size={24} />,
              },
              {
                number: "100%",
                label: "Dignity Assured",
                icon: <Star size={24} />,
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group text-center p-6 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: `1px solid ${C.light}25`,
                  backdropFilter: "blur(10px)",
                  animation: `fadeUp 0.7s ease forwards`,
                  animationDelay: `${idx * 0.2}s`,
                  opacity: 0,
                }}
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{
                    background: C.light + "20",
                    color: C.light,
                    boxShadow: `0 0 25px ${C.light}40`,
                  }}
                >
                  {stat.icon}
                </div>

                {/* Number */}
                <h3
                  className="font-display text-4xl font-bold mb-1 transition-all duration-300 group-hover:tracking-wider"
                  style={{ color: C.light }}
                >
                  {stat.number}
                </h3>

                {/* Label */}
                <p
                  className="font-semibold text-sm transition-all duration-300 group-hover:text-white"
                  style={{ color: C.accent }}
                >
                  {stat.label}
                </p>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    boxShadow: `0 0 40px ${C.light}25 inset`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="py-14 sm:py-16 lg:py-24 relative overflow-hidden"
        style={{ background: C.bg }}
      >
        {/* Background Glow */}
        <div
          className="absolute -top-20 -left-20 w-52 sm:w-72 h-52 sm:h-72 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ background: C.light }}
        />

        <div
          className="absolute bottom-0 right-0 w-56 sm:w-80 h-56 sm:h-80 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{
            background: C.accent,
            animationDelay: "1s",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div
            className="text-center mb-12 sm:mb-14 opacity-0 animate-fadeUp"
            style={{
              animationDelay: "0.2s",
              animationFillMode: "forwards",
            }}
          >
            <div className="section-divider"></div>

            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4"
              style={{
                background: C.light + "60",
                color: C.dark,
                backdropFilter: "blur(10px)",
              }}
            >
              <Heart size={14} />
              <span>About Our Services</span>
            </div>

            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ color: C.dark }}
            >
              Providing{" "}
              <span style={{ color: C.accent }}>
                Respectful & Compassionate
              </span>{" "}
              Funeral Assistance
            </h2>

            <p
              className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2"
              style={{ color: C.mid }}
            >
              We understand the emotional difficulties faced during the loss of
              a loved one. Our dedicated team is committed to arranging
              dignified and peaceful last rites services with complete care and
              support.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Images */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Left Column */}
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl group hover-lift">
                  <img
                    src="./2.png"
                    alt="Funeral Service"
                    className="w-full h-44 sm:h-56 md:h-60 object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div
                  className="p-4 sm:p-6 rounded-2xl text-white shadow-2xl hover-lift"
                  style={{
                    background: `linear-gradient(135deg, ${C.dark}, #7a2833)`,
                  }}
                >
                  <h3
                    className="font-display text-3xl sm:text-4xl font-bold mb-1"
                    style={{ color: C.light }}
                  >
                    10+
                  </h3>

                  <p
                    className="text-xs sm:text-sm tracking-wide"
                    style={{ color: C.accent }}
                  >
                    Years of Trusted Support
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <div
                  className="p-4 sm:p-6 rounded-2xl shadow-2xl hover-lift"
                  style={{
                    background: `linear-gradient(135deg, ${C.mid}, ${C.accent})`,
                  }}
                >
                  <h3
                    className="font-display text-3xl sm:text-4xl font-bold mb-1"
                    style={{ color: C.dark }}
                  >
                    24×7
                  </h3>

                  <p
                    className="text-xs sm:text-sm font-semibold tracking-wide"
                    style={{ color: C.dark + "CC" }}
                  >
                    Immediate Assistance Anytime
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl group hover-lift">
                  <img
                    src="./3.png"
                    alt="Care and Respect"
                    className="w-full h-44 sm:h-56 md:h-60 object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div
              className="opacity-0 animate-slideRight"
              style={{
                animationDelay: "0.4s",
                animationFillMode: "forwards",
              }}
            >
              <p
                className="text-base sm:text-lg mb-5 leading-relaxed"
                style={{ color: C.mid }}
              >
                <strong style={{ color: C.dark }}>{NAME_EN}</strong> provides
                complete funeral and cremation arrangements with
                professionalism, empathy, and devotion.
              </p>

              <p
                className="text-base sm:text-lg mb-7 sm:mb-8 leading-relaxed"
                style={{ color: C.mid }}
              >
                From transportation services and freezer box arrangements to
                pandit assistance, rituals, documentation, and ash collection —
                we manage every responsibility with sincerity and respect.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  "Experienced guidance for all religious rituals",
                  "Quick response and emergency arrangements",
                  "Transparent and affordable service pricing",
                  "Support for all communities and traditions",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start sm:items-center space-x-3 group"
                    style={{
                      animation: `fadeUp 0.7s ease forwards`,
                      animationDelay: `${idx * 0.2}s`,
                      opacity: 0,
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition duration-300 group-hover:scale-110 mt-0.5 sm:mt-0"
                      style={{
                        background: C.light,
                        boxShadow: `0 0 15px ${C.light}50`,
                      }}
                    >
                      <CheckCircle size={15} style={{ color: C.dark }} />
                    </div>

                    <p
                      className="text-sm sm:text-base font-medium leading-relaxed transition duration-300 group-hover:translate-x-1"
                      style={{ color: C.dark }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="sp-btn px-7 sm:px-8 py-3.5 rounded-xl font-bold shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                  Contact Us →
                </button>

                <a
                  href={PHONE_HREF}
                  className="sp-outline px-7 sm:px-8 py-3.5 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-500 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        className="py-16 lg:py-24 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.dark} 0%, #3d1218 50%, ${C.dark} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div
            className="text-center mb-16 opacity-0 animate-fadeUp"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div
              className="section-divider"
              style={{
                background: `linear-gradient(to right, ${C.accent}, ${C.light}, ${C.mid})`,
              }}
            ></div>

            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              style={{ color: C.light }}
            >
              Why People{" "}
              <span style={{ color: C.accent }}>Choose Our Services</span>
            </h2>

            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: C.accent + "BB" }}
            >
              We provide respectful funeral arrangements with complete support,
              ensuring every ceremony is conducted peacefully and with dignity.
            </p>
          </div>

          {/* Main Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Headphones size={28} />,
                title: "24×7 Immediate Support",
                desc: "Our team remains available day and night to assist families during difficult moments with quick response.",
              },
              {
                icon: <Shield size={28} />,
                title: "Reliable & Respectful",
                desc: "Every ritual and arrangement is managed with professionalism, sincerity, and complete respect.",
              },
              {
                icon: <Award size={28} />,
                title: "All Religious Traditions",
                desc: "We organize ceremonies according to customs, traditions, and religious practices of every community.",
              },
              {
                icon: <UserCheck size={28} />,
                title: "Complete Assistance",
                desc: "From transportation to rituals and documentation, we manage every responsibility carefully.",
              },
            ].map((f, idx) => (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:scale-[1.03]"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${C.mid}30`,
                  backdropFilter: "blur(12px)",
                  animation: `fadeUp 0.8s ease forwards`,
                  animationDelay: `${idx * 0.2}s`,
                  opacity: 0,
                }}
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                  style={{
                    background: `radial-gradient(circle at top, ${C.light}15, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{
                    background: C.mid + "25",
                    color: C.light,
                    boxShadow: `0 0 25px ${C.light}25`,
                  }}
                >
                  {f.icon}
                </div>

                {/* Title */}
                <h3
                  className="relative text-xl font-bold mb-3 font-display transition duration-300 group-hover:translate-x-1"
                  style={{ color: C.light }}
                >
                  {f.title}
                </h3>

                {/* Desc */}
                <p
                  className="relative text-sm leading-relaxed"
                  style={{ color: C.accent + "BB" }}
                >
                  {f.desc}
                </p>

                {/* Bottom Line */}
                <div
                  className="relative mt-5 w-0 group-hover:w-16 h-0.5 rounded-full transition-all duration-500"
                  style={{ background: C.mid }}
                ></div>
              </div>
            ))}
          </div>

          {/* Bottom Info Cards */}
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Quick Arrangements",
                desc: "Fast coordination for ambulance, freezer box, and cremation arrangements.",
              },
              {
                icon: "📄",
                title: "Paperwork Assistance",
                desc: "Support for certificates, permissions, and important formalities during the process.",
              },
              {
                icon: "🕊️",
                title: "Peaceful Farewell",
                desc: "We help families conduct respectful and calm final ceremonies with complete care.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl flex items-start space-x-4 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${C.mid}35`,
                  backdropFilter: "blur(10px)",
                  animation: `fadeUp 0.8s ease forwards`,
                  animationDelay: `${0.8 + idx * 0.2}s`,
                  opacity: 0,
                }}
              >
                {/* Icon */}
                <div className="text-4xl flex-shrink-0 transition duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h4
                    className="font-bold mb-2 text-lg transition duration-300 group-hover:translate-x-1"
                    style={{ color: C.light }}
                  >
                    {item.title}
                  </h4>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: C.accent + "AA" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        className="py-16 lg:py-24 relative overflow-hidden"
        style={{ background: C.bgAlt }}
      >
        {/* Background Glow Effects */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ background: C.light }}
        />

        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{
            background: C.accent,
            animationDelay: "1s",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div
            className="text-center mb-16 opacity-0 animate-fadeUp"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="section-divider"></div>

            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
              style={{
                background: C.light + "70",
                color: C.dark,
                backdropFilter: "blur(10px)",
              }}
            >
              <Flower2 size={14} />
              <span>Our Professional Services</span>
            </div>

            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              style={{ color: C.dark }}
            >
              Complete{" "}
              <span style={{ color: C.accent }}>
                Funeral & Cremation Assistance
              </span>
            </h2>

            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: C.mid }}
            >
              We provide complete end-to-end funeral arrangements with
              compassion, professionalism, and peaceful support for grieving
              families.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                icon: "❄️",
                title: "Freezer Box Services",
                desc: "Well-maintained freezer boxes with proper cooling arrangements available for homes and hospitals.",
              },
              {
                icon: "🚨",
                title: "24×7 Emergency Help",
                desc: "Immediate assistance anytime with quick coordination and compassionate support during emergencies.",
              },
              {
                icon: "🚐",
                title: "Funeral Transportation",
                desc: "Respectful transportation arrangements with clean vehicles and professional staff assistance.",
              },
              {
                icon: "🕉️",
                title: "Cremation Arrangements",
                desc: "Complete cremation support including rituals, booking assistance, and ceremony management.",
              },
              {
                icon: "📄",
                title: "Documentation Support",
                desc: "Guidance for certificates, permissions, paperwork, and all necessary formal procedures.",
              },
              {
                icon: "🪔",
                title: "Complete Ritual Packages",
                desc: "End-to-end arrangements for all last rites ceremonies handled with devotion and dignity.",
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: `1px solid ${C.light}`,
                  backdropFilter: "blur(12px)",
                  animation: `fadeUp 0.8s ease forwards`,
                  animationDelay: `${idx * 0.15}s`,
                  opacity: 0,
                }}
              >
                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${C.light}15, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div className="relative text-5xl mb-5 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-6">
                  {s.icon}
                </div>

                {/* Title */}
                <h3
                  className="relative font-display text-2xl font-bold mb-3 transition duration-300 group-hover:translate-x-1"
                  style={{ color: C.dark }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p
                  className="relative text-sm leading-relaxed"
                  style={{ color: C.mid }}
                >
                  {s.desc}
                </p>

                {/* Bottom Accent Line */}
                <div
                  className="relative mt-6 w-0 group-hover:w-16 h-1 rounded-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(to right, ${C.accent}, ${C.light})`,
                  }}
                ></div>

                {/* Glow Border */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700"
                  style={{
                    boxShadow: `0 0 35px ${C.light}35 inset`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="text-center mt-14 opacity-0 animate-fadeUp"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="sp-btn px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            >
              Request Assistance Now →
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden min-h-[320px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/2.png"
            alt="Support"
            className="w-full h-full object-cover scale-105 animate-slowZoom"
          />

          {/* Dark Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${C.dark}F2 0%, ${C.dark}D9 45%, ${C.mid}AA 100%)`,
            }}
          ></div>

          {/* Animated Glow */}
          <div
            className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
            style={{ background: C.light }}
          />

          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse"
            style={{
              background: C.accent,
              animationDelay: "1s",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
            <div
              className="max-w-xl opacity-0 animate-fadeUp"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              {/* Glass Card */}
              <div
                className="relative p-4 m-3 rounded-[30px] overflow-hidden shadow-2xl border"
                style={{
                  background: "rgba(15,15,15,0.55)",
                  backdropFilter: "blur(18px)",
                  borderColor: `${C.mid}40`,
                }}
              >
                {/* Card Glow */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${C.light}08, transparent 60%)`,
                  }}
                />

                {/* Badge */}
                <div
                  className="relative inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold mb-5"
                  style={{
                    background: C.mid + "22",
                    color: C.light,
                    border: `1px solid ${C.mid}45`,
                  }}
                >
                  <Phone size={13} className="animate-pulse" />
                  <span>24×7 Emergency Assistance</span>
                </div>

                {/* Heading */}
                <h2 className="relative font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Need{" "}
                  <span style={{ color: C.accent }}>
                    Immediate Funeral Support?
                  </span>
                </h2>

                {/* Description */}
                <p
                  className="relative text-base sm:text-lg mb-6 leading-relaxed"
                  style={{ color: C.light + "CC" }}
                >
                  Our experienced team is available anytime to provide peaceful,
                  respectful, and immediate funeral assistance with complete
                  guidance and care for your family.
                </p>

                {/* Buttons */}
                <div className="relative flex flex-col sm:flex-row gap-4 mb-7">
                  <a
                    href={PHONE_HREF}
                    className="group flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                    style={{
                      background: C.mid + "30",
                      border: `1px solid ${C.mid}60`,
                      color: C.light,
                    }}
                  >
                    <Phone
                      size={18}
                      className="transition duration-500 group-hover:rotate-12"
                    />
                    <span>{PHONE_DISPLAY}</span>
                  </a>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="sp-btn px-6 py-4 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 transition-all duration-500 hover:scale-105 hover:-translate-y-1 shadow-2xl"
                  >
                    <Mail size={18} />
                    <span>Contact Us</span>
                  </button>
                </div>

                {/* Bottom Stats */}
                <div
                  className="relative grid grid-cols-3 gap-4 pt-5"
                  style={{ borderTop: `1px solid ${C.mid}30` }}
                >
                  {[
                    {
                      icon: <Clock size={15} />,
                      t: "24×7",
                      s: "Available",
                    },
                    {
                      icon: <Shield size={15} />,
                      t: "Trusted",
                      s: "Service",
                    },
                    {
                      icon: <Heart size={15} />,
                      t: "10+ Years",
                      s: "Experience",
                    },
                  ].map((x, i) => (
                    <div
                      key={i}
                      className="group text-center transition duration-500 hover:-translate-y-1"
                    >
                      <div
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-2 transition duration-500 group-hover:scale-110"
                        style={{
                          background: C.mid + "20",
                          color: C.light,
                          boxShadow: `0 0 20px ${C.light}15`,
                        }}
                      >
                        {x.icon}
                      </div>

                      <p
                        className="font-bold text-sm"
                        style={{ color: C.light }}
                      >
                        {x.t}
                      </p>

                      <p className="text-xs" style={{ color: C.accent + "90" }}>
                        {x.s}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Decorative Border Glow */}
                <div
                  className="absolute inset-0 rounded-[30px] opacity-20"
                  style={{
                    boxShadow: `0 0 40px ${C.light}20 inset`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <ContactSection />

      {/* ── MAP SECTION ── */}
      <section
        className="py-16 lg:py-24 relative overflow-hidden"
        style={{ background: C.bgAlt }}
      >
        {/* Background Glow */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ background: C.light }}
        />

        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{
            background: C.accent,
            animationDelay: "1s",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div
            className="text-center mb-16 opacity-0 animate-fadeUp"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="section-divider"></div>

            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{
                background: C.light + "60",
                color: C.dark,
                backdropFilter: "blur(10px)",
              }}
            >
              <MapPin size={14} />
              <span>Our Service Areas</span>
            </div>

            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              style={{ color: C.dark }}
            >
              Serving Across{" "}
              <span style={{ color: C.accent }}>Greater Noida & NCR</span>
            </h2>

            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: C.mid }}
            >
              We provide respectful funeral and cremation support services
              across Greater Noida West, Noida, Ghaziabad, and nearby NCR
              regions.
            </p>
          </div>

          {/* Area Cards */}
          <div className="grid sm:grid-cols-3 gap-7 mb-12">
            {[
              {
                title: "Greater Noida West",
                areas: [
                  "Gaur City",
                  "Noida Extension",
                  "Crossing Republik",
                  "Techzone",
                  "Sector-2",
                ],
              },
              {
                title: "Greater Noida",
                areas: [
                  "Alpha",
                  "Beta",
                  "Gamma",
                  "Pari Chowk",
                  "Knowledge Park",
                ],
              },
              {
                title: "Delhi NCR",
                areas: [
                  "Noida",
                  "Ghaziabad",
                  "Indirapuram",
                  "Delhi NCR",
                  "Nearby Regions",
                ],
              },
            ].map((area, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl p-7 overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: `1px solid ${C.light}`,
                  backdropFilter: "blur(12px)",
                  animation: `fadeUp 0.8s ease forwards`,
                  animationDelay: `${idx * 0.2}s`,
                  opacity: 0,
                }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${C.light}10, transparent 70%)`,
                  }}
                />

                {/* Badge */}
                <div
                  className="relative inline-block px-4 py-2 rounded-full font-bold mb-5 text-sm"
                  style={{
                    background: `linear-gradient(135deg, ${C.dark}, #7a2833)`,
                    color: C.light,
                  }}
                >
                  {area.title}
                </div>

                {/* Locations */}
                <ul className="space-y-3 relative">
                  {area.areas.map((loc, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-3 text-sm transition duration-300 group-hover:translate-x-1"
                      style={{ color: C.mid }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: C.accent }}
                      ></div>

                      <span>{loc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Map */}
          <div
            className="rounded-[30px] overflow-hidden shadow-2xl group"
            style={{
              border: `2px solid ${C.light}`,
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Sector-2+Patwadi+Greater+Noida+West,+Uttar+Pradesh&output=embed"
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-12 text-center opacity-0 animate-fadeUp"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <div
              className="inline-flex flex-col sm:flex-row items-center gap-5 px-8 py-6 rounded-[28px] shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${C.dark}, #7a3018, ${C.mid})`,
                color: C.light,
              }}
            >
              <div className="flex items-center space-x-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: C.mid + "25",
                  }}
                >
                  <Phone size={26} style={{ color: C.light }} />
                </div>

                <div className="text-left">
                  <p
                    className="text-xs uppercase tracking-wider"
                    style={{ color: C.light + "99" }}
                  >
                    Emergency Contact
                  </p>

                  <a
                    href={PHONE_HREF}
                    className="text-2xl font-bold hover:opacity-80 transition-opacity"
                    style={{ color: C.light }}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div
                className="hidden sm:block w-px h-12"
                style={{ background: C.light + "30" }}
              ></div>

              <p
                className="font-semibold text-center sm:text-left"
                style={{ color: C.light }}
              >
                Available 24×7 for Immediate Funeral Assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="py-16 lg:py-24 relative overflow-hidden"
        style={{ background: C.bg }}
      >
        {/* Background Glow */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ background: C.light }}
        />

        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{
            background: C.accent,
            animationDelay: "1s",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div
            className="text-center mb-16 opacity-0 animate-fadeUp"
            style={{
              animationDelay: "0.2s",
              animationFillMode: "forwards",
            }}
          >
            <div className="section-divider"></div>

            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
              style={{
                background: C.light + "60",
                color: C.dark,
                backdropFilter: "blur(10px)",
              }}
            >
              <span>❓</span>
              <span>Frequently Asked Questions</span>
            </div>

            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              style={{ color: C.dark }}
            >
              Common{" "}
              <span style={{ color: C.accent }}>Questions & Support</span>
            </h2>

            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: C.mid }}
            >
              Find answers to the most commonly asked questions regarding our
              funeral and cremation services.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                q: "Are your funeral services available 24×7?",
                a: "Yes, our team remains available day and night to provide immediate assistance during emergencies and difficult situations.",
              },
              {
                q: "Do you provide cremation arrangements?",
                a: "Yes, we manage complete cremation arrangements including transportation, rituals, bookings, and ceremony assistance.",
              },
              {
                q: "Can you help with documentation and certificates?",
                a: "We assist families with important paperwork including certificates, permissions, and required formalities.",
              },
              {
                q: "Do you provide freezer box services?",
                a: "Yes, we provide clean and properly maintained freezer box arrangements for homes and hospitals.",
              },
              {
                q: "Which areas do you serve?",
                a: "We provide services across Greater Noida, Noida Extension, Ghaziabad, Delhi NCR, and nearby surrounding regions.",
              },
              {
                q: "How quickly can your team respond?",
                a: "Our emergency response team works quickly and efficiently to provide immediate support and arrangements.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[28px] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: `1px solid ${C.light}`,
                  backdropFilter: "blur(12px)",
                  animation: `fadeUp 0.8s ease forwards`,
                  animationDelay: `${idx * 0.15}s`,
                  opacity: 0,
                }}
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${C.light}10, transparent 70%)`,
                  }}
                />

                {/* Question */}
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="relative w-full px-6 py-5 flex items-start justify-between text-left"
                >
                  <h3
                    className="font-bold text-base sm:text-lg pr-4 transition duration-300 group-hover:translate-x-1"
                    style={{ color: C.dark }}
                  >
                    {faq.q}
                  </h3>

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      openFaq === idx ? "rotate-180 scale-110" : ""
                    }`}
                    style={{
                      background: C.light + "50",
                      color: C.dark,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ${
                    openFaq === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-6 pb-6 border-t"
                      style={{
                        borderColor: `${C.light}`,
                      }}
                    >
                      <p
                        className="text-sm sm:text-base leading-relaxed pt-5"
                        style={{ color: C.mid }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-16 opacity-0 animate-fadeUp"
            style={{
              animationDelay: "1s",
              animationFillMode: "forwards",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[32px] p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${C.dark}, #7a3018, ${C.mid})`,
              }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at top, ${C.light}30, transparent 70%)`,
                }}
              />

              <div className="relative">
                <h3
                  className="font-display text-3xl sm:text-4xl font-bold mb-4"
                  style={{ color: C.light }}
                >
                  Need Immediate Assistance?
                </h3>

                <p
                  className="text-base sm:text-lg mb-7 max-w-2xl mx-auto leading-relaxed"
                  style={{ color: C.light + "CC" }}
                >
                  Our compassionate support team is available 24×7 to guide and
                  assist families with funeral arrangements and emergency
                  services.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={PHONE_HREF}
                    className="sp-btn px-8 py-4 rounded-2xl font-bold shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                  >
                    Call Now
                  </a>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 rounded-2xl font-bold transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      border: `1px solid ${C.light}40`,
                      color: C.light,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.dark} 0%, #2a0d12 50%, #120608 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Top Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            {/* Brand */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl border"
                  style={{
                    borderColor: `${C.light}40`,
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3
                    className="font-display text-2xl font-bold"
                    style={{ color: C.light }}
                  >
                    {NAME_EN}
                  </h3>

                  <p className="text-sm mt-1" style={{ color: C.mid + "90" }}>
                    {NAME_HI}
                  </p>
                </div>
              </div>

              {/* About */}
              <p
                className="text-sm leading-relaxed mb-5 max-w-2xl"
                style={{ color: C.mid + "BB" }}
              >
                We provide respectful funeral and cremation services with
                complete arrangements, compassionate support, and dignified
                assistance for families during difficult times.
              </p>

              {/* Hindi Quote */}
              <div
                className="inline-block px-5 py-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${C.mid}25`,
                  backdropFilter: "blur(10px)",
                }}
              >
                <p
                  className="text-sm sm:text-base font-medium italic"
                  style={{ color: C.light + "DD" }}
                >
                  "कृपया अपने प्रियजन की भस्म एवं राख साथ ले जाने की कृपा करें।"
                </p>

                <p className="text-xs mt-2" style={{ color: C.mid + "70" }}>
                  (Please collect the ashes after the ceremony.)
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-5" style={{ color: C.light }}>
                Quick Links
              </h4>

              <ul className="space-y-3">
                {["Home", "About", "Services", "Contact"].map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="group flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-1"
                      style={{ color: C.mid + "BB" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full transition-all duration-300 group-hover:w-4"
                        style={{ background: C.accent }}
                      ></span>

                      <span>{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-5" style={{ color: C.light }}>
                Contact Details
              </h4>

              <ul className="space-y-5">
                {/* Phone */}
                <li className="flex items-start space-x-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: C.mid + "20",
                      color: C.light,
                    }}
                  >
                    <Phone size={18} />
                  </div>

                  <div>
                    <a
                      href={PHONE_HREF}
                      className="font-semibold hover:opacity-80 transition-opacity"
                      style={{ color: C.light }}
                    >
                      {PHONE_DISPLAY}
                    </a>

                    <p className="text-xs mt-1" style={{ color: C.mid + "70" }}>
                      24×7 Emergency Support
                    </p>
                  </div>
                </li>

                {/* Address */}
                <li className="flex items-start space-x-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: C.mid + "20",
                      color: C.light,
                    }}
                  >
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: C.light + "CC" }}
                    >
                      {ADDRESS}
                    </p>
                  </div>
                </li>

                {/* Timing */}
                <li className="flex items-start space-x-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: C.mid + "20",
                      color: C.light,
                    }}
                  >
                    <Clock size={18} />
                  </div>

                  <div>
                    <p className="text-sm" style={{ color: C.light + "CC" }}>
                      Available 24×7 — Day & Night Assistance
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              borderTop: `1px solid ${C.mid}25`,
            }}
          >
            <p
              className="text-xs sm:text-sm text-center sm:text-left"
              style={{ color: C.mid + "70" }}
            >
              © 2026 {NAME_EN}. All Rights Reserved.
            </p>

            <div
              className="flex items-center space-x-2 text-xs sm:text-sm"
              style={{ color: C.mid + "70" }}
            >
              <span>Designed with Care & Respect</span>

              <span style={{ color: C.accent }}>●</span>

              <span>24×7 Funeral Assistance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
