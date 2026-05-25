import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Heart,
  Award,
  Menu,
  X,
  Star,
  Users,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Zap,
  HeartHandshake,
  ClipboardList,
  Scale,
  FileText,
  ShieldCheck,
  Briefcase,
  Landmark,
} from "lucide-react";

const PHONE_DISPLAY = "+91 9971466271";
const PHONE_HREF = "tel:+919971466271";
const NAME_EN = "Om Antim Niwas";
const NAME_FULL = "Om Antim Niwas Shamshan Bhoomi";
const NAME_HI = "ॐ अन्तिम निवास शमसान भूमि";
const ADDRESS = "Sector-2, Gram Patwadi Seva Samiti, Greater Noida West";

export default function OmAntimNiwasSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const services = [
    {
      icon: <Scale size={42} strokeWidth={1.8} color="#5c1d26" />,
      subtitle: "Legal Guidance",
      title: "Family Law Support",
      desc: "Professional legal consultation and complete assistance for family-related matters.",
    },
    {
      icon: <FileText size={42} strokeWidth={1.8} color="#5c1d26" />,
      subtitle: "Documentation",
      title: "Document Preparation",
      desc: "Accurate drafting and management of important legal and personal documents.",
    },
    {
      icon: <Users size={42} strokeWidth={1.8} color="#5c1d26" />,
      subtitle: "Consultation",
      title: "Expert Advisors",
      desc: "Connect with experienced professionals for trusted advice and planning.",
    },
    {
      icon: <ShieldCheck size={42} strokeWidth={1.8} color="#5c1d26" />,
      subtitle: "Protection",
      title: "Secure Assistance",
      desc: "Reliable and confidential handling of all your sensitive information.",
    },
    {
      icon: <Briefcase size={42} strokeWidth={1.8} color="#5c1d26" />,
      subtitle: "Professional Services",
      title: "Business Support",
      desc: "Complete legal and documentation support tailored for businesses.",
    },
    {
      icon: <Landmark size={42} strokeWidth={1.8} color="#5c1d26" />,
      subtitle: "Government Work",
      title: "Official Procedures",
      desc: "Smooth assistance for registrations, approvals, and official processes.",
    },
  ];

  const faqs = [
    {
      q: "Are services really available 24 hours?",
      a: "Yes. Our phone never goes off. Pandit Ji and the full team are reachable any hour of any day.",
    },
    {
      q: "Which areas do you cover?",
      a: "Greater Noida West, Noida Extension, Noida, Ghaziabad, Crossing Republik, and nearby NCR regions.",
    },
    {
      q: "Do you help with all religions?",
      a: "Absolutely. We serve Hindu, Muslim, Christian, Sikh, Jain, and all other communities with equal respect.",
    },
    {
      q: "What does a typical package include?",
      a: "Freezer box, transportation, Pandit Ji, cremation ground booking, documentation support, and ash collection.",
    },
    {
      q: "How do I get pricing information?",
      a: "Call Pandit Ji directly at 9971466271 for a compassionate, transparent consultation with no hidden costs.",
    },
    {
      q: "How fast can you respond?",
      a: "Our emergency team coordinates within minutes — we understand every second matters.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
        background: "#fdf6ec",
        color: "#5c1d26",
      }}
    >
      {/* ═══════ REVEAL OBSERVER ═══════ */}
      <RevealObserver />

      {/* ═══════ NAV ═══════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background:
            scrollY > 60 ? "rgba(253,246,236,0.97)" : "rgba(253,246,236,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(187,135,68,0.2)",
          boxShadow: scrollY > 60 ? "0 4px 30px rgba(92,29,38,0.1)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* Logo Area */}
          <div
            onClick={() => goTo("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              cursor: "pointer",
            }}
          >
            {/* Logo Image */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/logo.png"
                alt="Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div>
              <div
                className="display"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#5c1d26",
                  lineHeight: 1.1,
                }}
              >
                {NAME_EN}
              </div>

              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#bb8744",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Shamshan Bhoomi
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 36 }}
            className="hidden-mobile"
          >
            {["Home", "About", "Services", "Contact"].map((n) => (
              <button
                key={n}
                onClick={() => goTo(n.toLowerCase())}
                className="nav-link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {n}
              </button>
            ))}
            <a
              href={PHONE_HREF}
              className="btn-gold"
              style={{
                padding: "10px 22px",
                borderRadius: 12,
                fontSize: "0.88rem",
              }}
            >
              <Phone size={16} /> Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "1px solid rgba(187,135,68,0.4)",
              borderRadius: 10,
              padding: 8,
              cursor: "pointer",
              color: "#5c1d26",
            }}
            className="show-mobile"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "#fdf6ec",
              borderTop: "1px solid rgba(187,135,68,0.2)",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {["Home", "About", "Services", "Contact"].map((n) => (
              <button
                key={n}
                onClick={() => goTo(n.toLowerCase())}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "12px 0",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#5c1d26",
                  borderBottom: "1px solid rgba(187,135,68,0.15)",
                }}
              >
                {n}
              </button>
            ))}
            <a
              href={PHONE_HREF}
              className="btn-gold"
              style={{
                marginTop: 16,
                padding: "14px 24px",
                borderRadius: 14,
                justifyContent: "center",
                fontSize: "1rem",
              }}
            >
              <Phone size={18} /> {PHONE_DISPLAY}
            </a>
          </div>
        )}
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          paddingTop: 72,
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #f5e2bb 0%, #f0d5a0 45%, #e8c68a 100%)",
          }}
        />

        {/* Geometric accents */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(92,29,38,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(187,135,68,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Decorative vertical lines */}
        {[20, 40, 60, 80].map((p) => (
          <div
            key={p}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${p}%`,
              width: 1,
              background: "rgba(92,29,38,0.05)",
            }}
          />
        ))}

        {/* Big ornamental Om */}
        <div
          className="float"
          style={{
            position: "absolute",
            right: "8%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "clamp(160px, 20vw, 280px)",
            opacity: 0.08,
            color: "#5c1d26",
            fontFamily: "serif",
            pointerEvents: "none",
            lineHeight: 1,
            textShadow: "0 0 40px rgba(92,29,38,0.08)",
          }}
        >
          ॐ
        </div>

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 24px",
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
        >
          <div style={{ maxWidth: 680 }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(92,29,38,0.08)",
                border: "1px solid rgba(92,29,38,0.15)",
                borderRadius: 40,
                padding: "8px 20px",
                marginBottom: 32,
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#8b2f3b",
                  animation: "pulse-ring 2s ease-out infinite",
                  position: "relative",
                  boxShadow: "0 0 12px rgba(139,47,59,0.5)",
                }}
                className="pulse-ring"
              />

              <span
                style={{
                  color: "#5c1d26",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                24×7 Available — Greater Noida & NCR
              </span>
            </div>

            {/* Headline */}
            <h1
              className="display"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                fontWeight: 900,
                color: "#4a1720",
                lineHeight: 1.05,
                marginBottom: 12,
                textShadow: "0 2px 12px rgba(92,29,38,0.08)",
              }}
            >
              Dignified
            </h1>

            <h1
              className="display gold-shimmer"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                background:
                  "linear-gradient(90deg, #5c1d26 0%, #8b2f3b 35%, #bb8744 50%, #8b2f3b 65%, #5c1d26 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: 12,
              }}
            >
              Last Rites
            </h1>

            <h1
              className="display"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                fontWeight: 900,
                color: "rgba(92,29,38,0.45)",
                lineHeight: 1.05,
                marginBottom: 32,
                fontStyle: "italic",
              }}
            >
              Services
            </h1>

            {/* Hindi name badge */}
            <div
              style={{
                display: "inline-block",
                background: "rgba(92,29,38,0.08)",
                border: "1px solid rgba(92,29,38,0.15)",
                borderRadius: 12,
                padding: "10px 18px",
                marginBottom: 28,
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  color: "#5c1d26",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                }}
              >
                {NAME_HI}
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                color: "rgba(92,29,38,0.82)",
                fontSize: "1.05rem",
                lineHeight: 1.85,
                maxWidth: 520,
                marginBottom: 44,
              }}
            >
              We stand beside your family in the most difficult moments —
              arranging peaceful, respectful, and dignified farewells with
              complete care and compassion.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 56,
              }}
            >
              <button
                onClick={() => goTo("contact")}
                className="btn-gold"
                style={{
                  padding: "16px 36px",
                  borderRadius: 14,
                  fontSize: "1rem",
                  background: "#5c1d26",
                  color: "#fff",
                  border: "none",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(92,29,38,0.18)",
                }}
              >
                Request Service <ArrowRight size={18} />
              </button>

              <a
                href={PHONE_HREF}
                style={{
                  padding: "16px 36px",
                  borderRadius: 14,
                  fontSize: "1rem",
                  border: "2px solid rgba(92,29,38,0.2)",
                  color: "#5c1d26",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  background: "rgba(255,255,255,0.35)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(92,29,38,0.08)";
                  e.currentTarget.style.borderColor = "#5c1d26";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.35)";
                  e.currentTarget.style.borderColor = "rgba(92,29,38,0.2)";
                }}
              >
                <Phone size={18} /> {PHONE_DISPLAY}
              </a>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
              {[
                ["500+", "Families Served"],
                ["10+", "Years Experience"],
                ["24×7", "Emergency Support"],
                ["NCR", "Coverage Area"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div
                    className="display"
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "#8b2f3b",
                      marginBottom: 4,
                    }}
                  >
                    {n}
                  </div>

                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "rgba(92,29,38,0.75)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: 700,
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        ></div>
      </section>

      {/* ═══════ MARQUEE STRIP ═══════ */}
      <div
        style={{
          background: "linear-gradient(90deg, #5c1d26, #7a2833)",
          overflow: "hidden",
          padding: "14px 0",
        }}
      >
        <div
          className="marquee-track"
          style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}
        >
          {[...Array(2)].map((_, ri) => (
            <span
              key={ri}
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              {[
                "Freezer Box Services",
                "24×7 Emergency",
                "All Religions Served",
                "Greater Noida NCR",
                "Dignified Cremation",
                "Documentation Support",
                "Compassionate Team",
              ].map((t, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "#f0d5a0",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0 32px",
                  }}
                >
                  <span style={{ color: "#bb8744", marginRight: 32 }}>✦</span>
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════ ABOUT ═══════ */}
      <section
        id="about"
        style={{
          padding: "100px 0",
          background: "#fdf6ec",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Side ornament */}
        <div
          className="vert-text"
          style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%) rotate(180deg)",
            color: "rgba(187,135,68,0.12)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          About • About • About • About • About •
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          {/* Section label */}
          <div
            className="ornament reveal"
            style={{
              marginBottom: 16,
              color: "#bb8744",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Our Story
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            {/* Left — image mosaic */}
            <div className="reveal-left" style={{ position: "relative" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "auto auto",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    gridColumn: "1 / 2",
                    gridRow: "1 / 2",
                    borderRadius: 20,
                    overflow: "hidden",
                    height: 260,
                    background: "linear-gradient(135deg, #5c1d26, #3a0d14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="./2.png"
                    alt="Service"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div
                  style={{
                    gridColumn: "2 / 3",
                    gridRow: "1 / 3",
                    borderRadius: 20,
                    overflow: "hidden",
                    height: "100%",
                    minHeight: 340,
                    background: "linear-gradient(135deg, #bb8744, #d4a055)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 32,
                    textAlign: "center",
                  }}
                >
                  <img
                    src="./3.png"
                    alt="Care"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      inset: 0,
                      borderRadius: 20,
                      opacity: 0.3,
                    }}
                    onError={(e) => {}}
                  />
                  <div style={{ position: "relative" }}>
                    <div
                      className="display"
                      style={{
                        fontSize: "4.5rem",
                        fontWeight: 900,
                        color: "#5c1d26",
                        lineHeight: 1,
                      }}
                    >
                      10+
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#5c1d26",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginTop: 8,
                      }}
                    >
                      Years of Trusted Service
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    gridColumn: "1 / 2",
                    gridRow: "2 / 3",
                    borderRadius: 20,
                    overflow: "hidden",
                    height: 120,
                    background: "#5c1d26",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20,
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      className="display"
                      style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#bb8744",
                      }}
                    >
                      500+
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "rgba(240,213,160,0.7)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Families Served
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — text */}
            <div className="reveal-right">
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  color: "#5c1d26",
                  lineHeight: 1.2,
                  marginBottom: 24,
                }}
              >
                Compassionate Support{" "}
                <span style={{ color: "#bb8744", fontStyle: "italic" }}>
                  When You Need It Most
                </span>
              </h2>
              <p
                style={{
                  color: "#7a4a30",
                  lineHeight: 1.8,
                  marginBottom: 20,
                  fontSize: "1rem",
                }}
              >
                <strong style={{ color: "#5c1d26" }}>{NAME_FULL}</strong> has
                been providing dignified funeral and cremation services for over
                a decade in Greater Noida and the NCR region.
              </p>
              <p
                style={{
                  color: "#7a4a30",
                  lineHeight: 1.8,
                  marginBottom: 36,
                  fontSize: "1rem",
                }}
              >
                From freezer box arrangements and respectful transportation to
                pandit coordination, last rites, and documentation — we carry
                every burden so your family can grieve in peace.
              </p>

              {/* Feature list — horizontal chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 40,
                }}
              >
                {[
                  "All Religions",
                  "NCR-Wide Coverage",
                  "Transparent Pricing",
                  "Trained Staff",
                  "Legal Paperwork",
                  "Emergency Response",
                ].map((tag) => (
                  <div
                    key={tag}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(187,135,68,0.1)",
                      border: "1px solid rgba(187,135,68,0.3)",
                      borderRadius: 40,
                      padding: "7px 16px",
                    }}
                  >
                    <CheckCircle size={13} color="#bb8744" />
                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "#5c1d26",
                      }}
                    >
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button
                  onClick={() => goTo("services")}
                  className="btn-gold"
                  style={{
                    padding: "14px 32px",
                    borderRadius: 12,
                    fontSize: "0.95rem",
                  }}
                >
                  View Services <ChevronRight size={16} />
                </button>
                <a
                  href={PHONE_HREF}
                  className="btn-red"
                  style={{
                    padding: "14px 32px",
                    borderRadius: 12,
                    fontSize: "0.95rem",
                  }}
                >
                  <Phone size={16} /> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section
        id="services"
        style={{
          padding: "100px 0",
          background: "#f0d5a0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(92,29,38,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(92,29,38,0.08) 0%, transparent 65%)",
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div
              className="ornament reveal"
              style={{
                color: "#5c1d26",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 20,
                justifyContent: "center",
              }}
            >
              Professional Services
            </div>

            <h2
              className="display reveal"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 900,
                color: "#5c1d26",
                lineHeight: 1.15,
              }}
            >
              Everything Your Family
              <br />
              <span style={{ color: "#8b2f3b" }}>Needs, Arranged for You</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {services.map((s, i) => (
              <div
                key={i}
                className={`svc-card reveal d${(i % 6) + 1}`}
                style={{
                  background: "rgba(255,255,255,0.45)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(92,29,38,0.15)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(92,29,38,0.08)",
                }}
              >
                {/* Left Accent */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 24,
                    bottom: 24,
                    width: 4,
                    background:
                      "linear-gradient(to bottom, #5c1d26, rgba(92,29,38,0.2))",
                    borderRadius: "0 4px 4px 0",
                  }}
                />

                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>
                  {s.icon}
                </div>

                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#8b2f3b",
                    marginBottom: 8,
                  }}
                >
                  {s.subtitle}
                </div>

                <h3
                  className="display"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#5c1d26",
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(92,29,38,0.75)",
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="reveal"
            style={{ textAlign: "center", marginTop: 60 }}
          >
            <button
              onClick={() => goTo("contact")}
              className="btn-gold"
              style={{
                padding: "18px 48px",
                borderRadius: 16,
                fontSize: "1.05rem",
                background: "#5c1d26",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Request Assistance <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════ WHY US — Horizontal scrolling cards ═══════ */}
      <section
        style={{
          padding: "100px 0",
          background: "#f4ebe0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 60,
              alignItems: "center",
            }}
          >
            {/* Left sticky headline */}
            <div className="reveal-left">
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#bb8744",
                  marginBottom: 16,
                }}
              >
                WHY CHOOSE US
              </div>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  color: "#5c1d26",
                  lineHeight: 1.2,
                  marginBottom: 24,
                }}
              >
                Trusted by Families
                <br />
                <span style={{ color: "#bb8744", fontStyle: "italic" }}>
                  Across NCR
                </span>
              </h2>
              <p
                style={{ color: "#7a4a30", lineHeight: 1.8, marginBottom: 36 }}
              >
                In grief, the last thing you need is confusion. We handle
                everything — so you can be present for your family.
              </p>
              <a
                href={PHONE_HREF}
                className="btn-red"
                style={{
                  padding: "14px 32px",
                  borderRadius: 12,
                  fontSize: "0.95rem",
                }}
              >
                <Phone size={16} /> Talk to Us
              </a>
            </div>

            {/* Right — stacked feature rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  num: "01",
                  icon: <Zap size={28} strokeWidth={2} color="#5c1d26" />,
                  title: "24×7 Immediate Assistance",
                  desc: "Our team is available round the clock to provide quick support whenever your family needs us.",
                },
                {
                  num: "02",
                  icon: (
                    <ShieldCheck size={28} strokeWidth={2} color="#5c1d26" />
                  ),
                  title: "Respectful & Transparent Service",
                  desc: "Every ritual and arrangement is handled with dignity, honesty, and complete transparency.",
                },
                {
                  num: "03",
                  icon: (
                    <HeartHandshake size={28} strokeWidth={2} color="#5c1d26" />
                  ),
                  title: "Support for Every Tradition",
                  desc: "We carefully arrange ceremonies and rituals according to your family’s customs and beliefs.",
                },
                {
                  num: "04",
                  icon: (
                    <ClipboardList size={28} strokeWidth={2} color="#5c1d26" />
                  ),
                  title: "Complete End-to-End Arrangements",
                  desc: "From transportation and documentation to rituals and final arrangements, we take care of everything.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className={`reveal d${i + 1}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 20,
                    background: "#fffbf5",
                    borderRadius: 18,
                    padding: "24px 28px",
                    border: "1px solid rgba(187,135,68,0.15)",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(92,29,38,0.12)";
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 900,
                      color: "rgba(187,135,68,0.35)",
                      fontFamily: "monospace",
                      minWidth: 28,
                      paddingTop: 4,
                    }}
                  >
                    {f.num}
                  </div>

                  <div style={{ minWidth: 32, marginTop: 2 }}>{f.icon}</div>

                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "1.05rem",
                        color: "#5c1d26",
                        marginBottom: 6,
                      }}
                    >
                      {f.title}
                    </div>

                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "#7a4a30",
                        lineHeight: 1.6,
                      }}
                    >
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA FULL-BLEED ═══════ */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #3a0d14 0%, #5c1d26 50%, #7a3018 100%)",
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(240,213,160,0.04) 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="float"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(187,135,68,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#bb8744",
              marginBottom: 20,
            }}
          >
            EMERGENCY SUPPORT
          </div>
          <h2
            className="display reveal"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              color: "#f0d5a0",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            We're One Call Away
          </h2>
          <p
            className="reveal"
            style={{
              color: "rgba(240,213,160,0.7)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginBottom: 44,
            }}
          >
            {ADDRESS}
          </p>
          <div
            className="reveal"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
            }}
          >
            <a
              href={PHONE_HREF}
              className="btn-gold"
              style={{
                padding: "18px 48px",
                borderRadius: 16,
                fontSize: "1.1rem",
              }}
            >
              <Phone size={20} /> {PHONE_DISPLAY}
            </a>
            <button
              onClick={() => goTo("contact")}
              style={{
                padding: "18px 40px",
                borderRadius: 16,
                fontSize: "1rem",
                background: "rgba(240,213,160,0.08)",
                border: "2px solid rgba(240,213,160,0.25)",
                color: "#f0d5a0",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(240,213,160,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(240,213,160,0.08)")
              }
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* ═══════ CONTACT ═══════ */}
      <section
        id="contact"
        style={{ padding: "100px 0", background: "#fdf6ec" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div
              className="ornament reveal"
              style={{
                color: "#bb8744",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
                justifyContent: "center",
              }}
            >
              Get In Touch
            </div>
            <h2
              className="display reveal"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                color: "#5c1d26",
              }}
            >
              We're Here for You
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "start",
            }}
          >
            {/* Left — Info */}
            <div className="reveal-left">
              {/* Big phone */}
              <a
                href={PHONE_HREF}
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #5c1d26, #3a0d14)",
                  borderRadius: 24,
                  padding: "36px 32px",
                  marginBottom: 24,
                  textDecoration: "none",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(92,29,38,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: "rgba(187,135,68,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Phone size={24} color="#bb8744" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "rgba(240,213,160,0.5)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Call Pandit Ji Directly
                    </div>
                    <div
                      className="display"
                      style={{
                        fontSize: "1.9rem",
                        fontWeight: 700,
                        color: "#bb8744",
                      }}
                    >
                      {PHONE_DISPLAY}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(240,213,160,0.5)",
                    paddingLeft: 68,
                  }}
                >
                  Available 24 hours, 7 days a week
                </div>
              </a>

              {/* Info tiles */}
              {[
                {
                  icon: <MapPin size={20} color="#bb8744" />,
                  label: "Address",
                  value: ADDRESS,
                },
                {
                  icon: <Clock size={20} color="#bb8744" />,
                  label: "Hours",
                  value: "24×7 — Day and Night, Every Day",
                },
                {
                  icon: <Shield size={20} color="#bb8744" />,
                  label: "Coverage",
                  value: "Greater Noida, Noida, Ghaziabad, Delhi NCR",
                },
              ].map((info, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "18px 0",
                    borderBottom: "1px solid rgba(187,135,68,0.15)",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "rgba(187,135,68,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#bb8744",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: 4,
                      }}
                    >
                      {info.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        color: "#5c1d26",
                        fontWeight: 600,
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — Form */}
            <div
              className="reveal-right"
              style={{
                background: "#fffbf5",
                borderRadius: 24,
                padding: 40,
                border: "1px solid rgba(187,135,68,0.2)",
                boxShadow: "0 8px 40px rgba(92,29,38,0.08)",
              }}
            >
              <h3
                className="display"
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#5c1d26",
                  marginBottom: 28,
                }}
              >
                Send a Message
              </h3>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "48px 24px" }}>
                  <div style={{ fontSize: "3rem", marginBottom: 16 }}>🙏</div>
                  <p
                    style={{
                      color: "#5c1d26",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    Thank you. We'll reach out shortly with compassion and care.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "#bb8744",
                          marginBottom: 8,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
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
                        placeholder="Your name"
                        style={{
                          padding: "12px 16px",
                          borderRadius: 12,
                          fontSize: "0.95rem",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "#bb8744",
                          marginBottom: 8,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
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
                        placeholder="+91"
                        style={{
                          padding: "12px 16px",
                          borderRadius: 12,
                          fontSize: "0.95rem",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#bb8744",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="email@example.com"
                      style={{
                        padding: "12px 16px",
                        borderRadius: 12,
                        fontSize: "0.95rem",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#bb8744",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      How can we help?
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us what you need..."
                      style={{
                        padding: "12px 16px",
                        borderRadius: 12,
                        fontSize: "0.95rem",
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gold"
                    style={{
                      padding: "16px",
                      borderRadius: 14,
                      fontSize: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    Send Message <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICE AREAS + MAP ═══════ */}
      <section style={{ padding: "100px 0", background: "#f4ebe0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              className="display reveal"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "#5c1d26",
              }}
            >
              Areas We <span style={{ color: "#bb8744" }}>Serve</span>
            </h2>
          </div>
          {/* Area pills */}
          <div
            className="reveal"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              marginBottom: 48,
            }}
          >
            {[
              "Greater Noida West",
              "Gaur City",
              "Noida Extension",
              "Crossing Republik",
              "Techzone",
              "Greater Noida",
              "Pari Chowk",
              "Knowledge Park",
              "Noida",
              "Ghaziabad",
              "Indirapuram",
              "Delhi NCR",
            ].map((area) => (
              <span
                key={area}
                style={{
                  padding: "10px 20px",
                  borderRadius: 40,
                  background: "#fffbf5",
                  border: "1px solid rgba(187,135,68,0.25)",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  color: "#5c1d26",
                }}
              >
                {area}
              </span>
            ))}
          </div>
          {/* Map */}
          <div
            className="reveal"
            style={{
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 12px 48px rgba(92,29,38,0.12)",
              border: "2px solid rgba(187,135,68,0.2)",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Sector-2+Patwadi+Greater+Noida+West,+Uttar+Pradesh&output=embed"
              width="100%"
              height="460"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section style={{ padding: "100px 0", background: "#fdf6ec" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              className="ornament reveal"
              style={{
                color: "#bb8744",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
                justifyContent: "center",
              }}
            >
              FAQ
            </div>
            <h2
              className="display reveal"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "#5c1d26",
              }}
            >
              Common <span style={{ color: "#bb8744" }}>Questions</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  background: "#fffbf5",
                  border: `1px solid ${openFaq === i ? "rgba(187,135,68,0.5)" : "rgba(187,135,68,0.15)"}`,
                  borderRadius: 18,
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 28px",
                    textAlign: "left",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#5c1d26",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background:
                        openFaq === i ? "#5c1d26" : "rgba(187,135,68,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.2rem",
                        color: openFaq === i ? "#bb8744" : "#5c1d26",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </div>
                </button>
                <div className={`faq-body ${openFaq === i ? "open" : ""}`}>
                  <div
                    style={{
                      padding: "0 28px 24px",
                      color: "#7a4a30",
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer
        style={{
          background:
            "linear-gradient(160deg, #1a0508 0%, #2a0d12 50%, #3a0d14 100%)",
          padding: "72px 24px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(187,135,68,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 48,
              marginBottom: 56,
            }}
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 24,
                }}
              >
                {/* Logo */}
                <div
                  style={{
                    width: 82,
                    height: 62,
                    borderRadius: 16,
                    background: "#bb8744",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="Logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // contain bhi use kar sakte ho
                    }}
                  />
                </div>

                <div>
                  <div
                    className="display"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#f0d5a0",
                    }}
                  >
                    {NAME_FULL}
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#bb8744",
                      fontWeight: 600,
                    }}
                  >
                    {NAME_HI}
                  </div>
                </div>
              </div>

              <p
                style={{
                  color: "rgba(240,213,160,0.5)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  maxWidth: 320,
                  marginBottom: 24,
                }}
              >
                Providing respectful, dignified funeral and cremation services
                for all communities across Greater Noida and the NCR region
                since 2014.
              </p>

              <div
                style={{
                  padding: "16px 20px",
                  background: "rgba(187,135,68,0.08)",
                  border: "1px solid rgba(187,135,68,0.2)",
                  borderRadius: 14,
                }}
              >
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "rgba(240,213,160,0.7)",
                    fontStyle: "italic",
                  }}
                >
                  "कृपया अपने प्रियजन की भस्म एवं राख साथ ले जाने की कृपा करें।"
                </p>
              </div>
            </div>

            {/* Links */}
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#bb8744",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Navigate
              </div>
              {["Home", "About", "Services", "Contact"].map((n) => (
                <button
                  key={n}
                  onClick={() => goTo(n.toLowerCase())}
                  style={{
                    display: "block",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "8px 0",
                    fontSize: "0.92rem",
                    color: "rgba(240,213,160,0.55)",
                    fontWeight: 600,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#bb8744")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(240,213,160,0.55)")
                  }
                >
                  {n}
                </button>
              ))}
            </div>

            {/* Services */}
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#bb8744",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Services
              </div>
              {[
                "Freezer Box",
                "Transportation",
                "Cremation Rites",
                "Documentation",
                "Ritual Packages",
                "24×7 Emergency",
              ].map((s) => (
                <div
                  key={s}
                  style={{
                    padding: "8px 0",
                    fontSize: "0.88rem",
                    color: "rgba(240,213,160,0.5)",
                    fontWeight: 600,
                  }}
                >
                  {s}
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#bb8744",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Contact
              </div>
              <a
                href={PHONE_HREF}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  marginBottom: 20,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(240,213,160,0.4)",
                    fontWeight: 600,
                  }}
                >
                  24×7 HELPLINE
                </span>
                <span
                  className="display"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#bb8744",
                  }}
                >
                  {PHONE_DISPLAY}
                </span>
              </a>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(240,213,160,0.5)",
                  lineHeight: 1.6,
                }}
              >
                {ADDRESS}
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(187,135,68,0.15)",
              paddingTop: 28,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div
              style={{ fontSize: "0.82rem", color: "rgba(240,213,160,0.35)" }}
            >
              © 2026 {NAME_FULL}. All Rights Reserved.
            </div>
            <div
              style={{ fontSize: "0.82rem", color: "rgba(240,213,160,0.35)" }}
            >
              Designed with Care & Respect ✦ 24×7 Funeral Assistance
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .sticky-call { display: block !important; }
          section > div > div[style*="grid-template-columns: 1fr 1fr"],
          section > div > div[style*="grid-template-columns: 1fr 2fr"],
          section > div > div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        .show-mobile { display: none; }
      `}</style>
    </div>
  );
}

/* Intersection Observer for reveal animations */
function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
