import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false); // New state to show thank you message

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-400">Let's discuss how we can transform your business</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Netlify Form */}
          {!submitted ? (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <label className="block text-slate-300 mb-2 font-medium">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 flex items-center justify-center"
                onClick={() => setSubmitted(true)} // Show thank you message after submission
              >
                <Send className="w-5 h-5 mr-2" />Send Message
              </button>
            </form>
          ) : (
            <div className="p-6 bg-teal-500/10 border border-teal-500/50 rounded-lg text-teal-400 text-center">
              Thank you! We'll get back to you shortly.
            </div>
          )}

          <div>
            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Our Office', content: '212 N. 2ND ST. STE 100, RICHMOND KY 40475' },
                { icon: Phone, title: 'Phone', content: '+1 (555) 123-4567' },
                { icon: Mail, title: 'Email', content: 'info@thelogicless.com' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden h-96 border border-slate-800">
              <iframe
                title="Map"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 12 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=212+N+2nd+St,+Richmond,+KY+40475&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
