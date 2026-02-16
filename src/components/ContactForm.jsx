import React, { useState } from 'react';
import { z } from 'zod';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Section from './Section';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const MAX_WORDS = 700;

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters.')
    .refine((val) => val.trim().split(/\s+/).length <= MAX_WORDS, {
      message: `Message cannot exceed ${MAX_WORDS} words.`
    }),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(null);

  const getWordCount = (text) => text.trim() ? text.trim().split(/\s+/).length : 0;

  const validateField = (name, value) => {
    const fieldSchema = contactSchema.shape[name];
    if (!fieldSchema) return;

    const result = fieldSchema.safeParse(value);
    if (result.success) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: result.error.issues[0].message }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      validateField(name, value);
    }
    
    if (sendError) setSendError(null);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const isFormValid = () => {
    return contactSchema.safeParse(formData).success;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    setSendError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setSendError('Failed to send message. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  const wordCount = getWordCount(formData.message);
  const isOverLimit = wordCount > MAX_WORDS;

  return (
    <Section title="Get in Touch" subtitle="Have a question or want to work together?" id="contact-form">
      <div className="contact-wrapper">
        {submitted ? (
          <div className="success-box">
            <CheckCircle size={40} />
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="contact-form-inner">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text" id="contact-name" name="name"
                  value={formData.name} onChange={handleChange} onBlur={handleBlur}
                  placeholder="Your name"
                  disabled={sending}
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  type="email" id="contact-email" name="email"
                  value={formData.email} onChange={handleChange} onBlur={handleBlur}
                  placeholder="you@example.com"
                  disabled={sending}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
            </div>
            <div className="form-group">
              <div className="label-row">
                <label htmlFor="contact-message">Message</label>
                <span className={`word-count ${isOverLimit ? 'over-limit' : ''}`}>
                  {wordCount}/{MAX_WORDS} words
                </span>
              </div>
              <textarea
                id="contact-message" name="message" rows="5"
                value={formData.message} onChange={handleChange} onBlur={handleBlur}
                placeholder="Tell me about your project or just say hi..."
                disabled={sending}
                className={errors.message || isOverLimit ? 'input-error' : ''}
              />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
            {sendError && <p className="error-text" style={{ marginBottom: '1rem' }}>{sendError}</p>}
            <button 
              type="submit" 
              className="btn-primary" 
              disabled={sending || !isFormValid()}
            >
              {sending ? (
                <><Loader2 size={16} className="spin-icon" /> Sending...</>
              ) : (
                <><Send size={16} /> Send Message</>
              )}
            </button>
          </form>
        )}
      </div>
      <style>{`
        .contact-wrapper {
          max-width: 640px;
          margin: 0 auto;
        }
        .contact-form-inner {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }
        .label-row label {
          margin-bottom: 0;
        }
        .word-count {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .word-count.over-limit {
          color: #ef4444;
        }
        .input-error {
          border-color: #ef4444 !important;
        }
        .success-box {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accent-4);
        }
        .success-box h3 {
          font-size: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .success-box p {
          color: var(--text-secondary);
        }
        .spin-icon {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  );
};

export default ContactForm;
