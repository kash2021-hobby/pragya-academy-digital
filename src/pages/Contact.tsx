import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import PageHero from '@/components/PageHero';
import aboutHero from '@/assets/about-hero.jpg';

const Contact = () => {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Get In Touch" bgImage={aboutHero} />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 scroll-reveal">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: 'name', label: 'Full Name', type: 'text' },
                  { key: 'email', label: 'Email Address', type: 'email' },
                  { key: 'subject', label: 'Subject', type: 'text' },
                ].map((field) => (
                  <div key={field.key} className="relative">
                    <input
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.label}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all placeholder:text-muted-foreground"
                    />
                  </div>
                ))}
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your Message"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all placeholder:text-muted-foreground resize-none"
                />
                <button type="submit" className="btn-orange flex items-center gap-2">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            {/* Info Card */}
            <div className="lg:col-span-2 scroll-reveal">
              <div className="bg-navy rounded-xl p-8 text-primary-foreground h-full">
                <h3 className="font-heading text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Address</p>
                      <p className="text-primary-foreground/70 text-sm">Baihata Chariali, Mangaldoi Road, Assam, 781381</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Phone</p>
                      <p className="text-primary-foreground/70 text-sm">+91-9435015476</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Email</p>
                      <p className="text-primary-foreground/70 text-sm">pragyaacademy2017@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 scroll-reveal rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Pragya Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28632.74!2d91.58!3d26.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59c!2sBaihata%20Chariali!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
