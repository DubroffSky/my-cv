import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa6';
import '../styles/contact-form.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const LinkedinIcon = FaLinkedin as React.ComponentType<{ size?: number; color?: string }>;
  const TelegramIcon = FaTelegram as React.ComponentType<{ size?: number; color?: string }>;
  const WhatsappIcon = FaWhatsapp as React.ComponentType<{ size?: number; color?: string }>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_c5gdu9b',
        'template_zgnppnh',
        formData,
        '7fVECcgsks_Ehp9wZ'
      );

      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSent(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Email sending error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form-container" id="contacts">
    <div className="contact-content">
      <div className="contact-heading">
        <h2>Contact Me</h2>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <h3 className="form-title">Email</h3>

        {isSent && <div className="success-message">Your message has been sent successfully.</div>}
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isLoading}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/твоя-ссылка" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon size={28} />
        </a>
        <a href="https://t.me/твой-ник" target="_blank" rel="noopener noreferrer">
          <TelegramIcon size={28} />
        </a>
        <a href="https://wa.me/твой-номер" target="_blank" rel="noopener noreferrer">
          <WhatsappIcon size={28} />
        </a>
      </div>
    </div>
  </div>
  );
}

export default ContactForm;