import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  HeartHandshake,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost/backend/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMsg(result.message);

        setFormData({
          name: "",
          phone: "",
          email: "",
          location: "",
          message: "",
        });
      } else {
        setErrorMsg(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            style={{
              background: C.light + "60",
              color: C.dark,
              backdropFilter: "blur(10px)",
            }}
          >
            <HeartHandshake size={14} />
            <span>Contact Us</span>
          </div>

          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: C.dark }}
          >
            We're Here To{" "}
            <span style={{ color: C.accent }}>
              Support You
            </span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: C.mid }}
          >
            Reach out anytime for immediate funeral assistance,
            cremation arrangements, or respectful guidance during difficult moments.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            {/* Image Card */}
            <div
              className="group relative overflow-hidden rounded-[30px] shadow-2xl border"
              style={{
                borderColor: `${C.light}`,
              }}
            >
              <img
                src="https://i.pinimg.com/1200x/b5/34/e9/b534e9bb4c9372c33471cd7c9a6698be.jpg"
                alt="Support"
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${C.dark}EE, transparent)`,
                }}
              ></div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3
                  className="font-display text-3xl font-bold mb-2"
                  style={{ color: C.light }}
                >
                  Compassionate Support
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: C.light + "CC" }}
                >
                  Our dedicated team is available 24×7 to assist families
                  with dignity, care, and immediate response.
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Phone size={22} />,
                  title: "Phone",
                  detail: "+91 9211975057",
                  link: "tel:+919211975057",
                },
                {
                  icon: <Mail size={22} />,
                  title: "Email",
                  detail: "Info@omicron.com",
                  link: "mailto:Info@omicron.com",
                },
                {
                  icon: <MapPin size={22} />,
                  title: "Location",
                  detail: "Delhi NCR",
                },
                {
                  icon: <Clock size={22} />,
                  title: "24×7 Support",
                  detail: "Always Available",
                },
              ].map((contact, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: `1px solid ${C.light}`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                    style={{
                      background: `linear-gradient(135deg, ${C.light}12, transparent 70%)`,
                    }}
                  />

                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: C.light + "50",
                      color: C.dark,
                    }}
                  >
                    {contact.icon}
                  </div>

                  <h4
                    className="relative font-bold mb-1"
                    style={{ color: C.dark }}
                  >
                    {contact.title}
                  </h4>

                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="relative text-sm transition duration-300 hover:opacity-70"
                      style={{ color: C.mid }}
                    >
                      {contact.detail}
                    </a>
                  ) : (
                    <p
                      className="relative text-sm"
                      style={{ color: C.mid }}
                    >
                      {contact.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Trust Card */}
            <div
              className="relative overflow-hidden rounded-[28px] p-7 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${C.dark}, #7a3018, ${C.mid})`,
              }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: C.light + "20",
                    color: C.light,
                  }}
                >
                  <Shield size={26} />
                </div>

                <div>
                  <h4
                    className="font-bold text-xl"
                    style={{ color: C.light }}
                  >
                    Trusted Funeral Service
                  </h4>

                  <p
                    className="text-sm"
                    style={{ color: C.light + "AA" }}
                  >
                    Serving families with dignity & respect
                  </p>
                </div>
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{ color: C.light + "CC" }}
              >
                We are committed to providing compassionate funeral and
                cremation assistance while maintaining complete respect,
                professionalism, and peaceful support for grieving families.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <div
              className="relative overflow-hidden rounded-[32px] shadow-2xl border p-6 sm:p-8 lg:p-10"
              style={{
                background: "rgba(255,255,255,0.75)",
                borderColor: `${C.light}`,
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${C.light}12, transparent 70%)`,
                }}
              />

              <form
                onSubmit={handleSubmit}
                className="relative space-y-5"
              >

                {/* Inputs */}
                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label
                      className="block font-semibold mb-2"
                      style={{ color: C.dark }}
                    >
                      Full Name *
                    </label>

                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300"
                      style={{
                        borderColor: `${C.light}`,
                        background: "rgba(255,255,255,0.85)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-semibold mb-2"
                      style={{ color: C.dark }}
                    >
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300"
                      style={{
                        borderColor: `${C.light}`,
                        background: "rgba(255,255,255,0.85)",
                      }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label
                      className="block font-semibold mb-2"
                      style={{ color: C.dark }}
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300"
                      style={{
                        borderColor: `${C.light}`,
                        background: "rgba(255,255,255,0.85)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-semibold mb-2"
                      style={{ color: C.dark }}
                    >
                      Location *
                    </label>

                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          location: e.target.value,
                        })
                      }
                      placeholder="Enter your location"
                      className="w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300"
                      style={{
                        borderColor: `${C.light}`,
                        background: "rgba(255,255,255,0.85)",
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block font-semibold mb-2"
                    style={{ color: C.dark }}
                  >
                    Message
                  </label>

                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Write your requirements..."
                    className="w-full px-4 py-3 rounded-xl border outline-none resize-none transition-all duration-300"
                    style={{
                      borderColor: `${C.light}`,
                      background: "rgba(255,255,255,0.85)",
                    }}
                  ></textarea>
                </div>

                {/* Messages */}
                {successMsg && (
                  <p className="text-green-600 text-sm text-center">
                    {successMsg}
                  </p>
                )}

                {errorMsg && (
                  <p className="text-red-600 text-sm text-center">
                    {errorMsg}
                  </p>
                )}

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sp-btn px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 shadow-2xl disabled:opacity-50"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Request →"}
                </button>

                <p
                  className="text-sm text-center"
                  style={{ color: C.mid }}
                >
                  We usually respond within a few minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}