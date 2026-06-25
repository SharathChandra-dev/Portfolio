import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckCircle, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { profile } from '../../data/portfolio.js';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  } else if (values.message.trim().length < 20) {
    errors.message = 'Message should be at least 20 characters.';
  }

  return errors;
}

export default function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio inquiry from ${values.name}`,
      )}&body=${encodeURIComponent(values.message)}`;
      setValues(initialValues);
    }
  };

  return (
    <MotionSection id="contact" className="bg-carbon/60">
      <SectionHeader eyebrow="Contact" title="Let's build something dependable and polished">
        Based in Munich and open to frontend, React, and full-stack development roles across Germany.
      </SectionHeader>

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-4">
          <a href={`mailto:${profile.email}`} className="contact-card">
            <FiMail aria-hidden="true" />
            <span>
              <strong>Email</strong>
              {profile.email}
            </span>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-card">
            <FiPhone aria-hidden="true" />
            <span>
              <strong>Phone</strong>
              {profile.phone}
            </span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-card">
            <FiLinkedin aria-hidden="true" />
            <span>
              <strong>LinkedIn</strong>
              linkedin.com/in/sharath-c1
            </span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-card">
            <FiGithub aria-hidden="true" />
            <span>
              <strong>GitHub</strong>
              Repository profile
            </span>
          </a>
          <div className="contact-card">
            <FiMapPin aria-hidden="true" />
            <span>
              <strong>Location</strong>
              {profile.location}
            </span>
          </div>
        </div>

        <form className="glass-card p-5 sm:p-6" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Name
              <input
                className="field-input"
                name="name"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="Your name"
              />
              {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
            </label>
            <label className="field-label">
              Email
              <input
                className="field-input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="you@example.com"
              />
              {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
            </label>
          </div>

          <label className="field-label mt-5">
            Message
            <textarea
              className="field-input min-h-40 resize-y"
              name="message"
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell me about the role, project, or collaboration."
            />
            {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-pulse px-6 py-3 text-sm font-semibold text-white shadow-violet transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              <FiSend aria-hidden="true" />
              Send Message
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  className="flex items-center gap-2 text-sm font-semibold text-mint"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  role="status"
                  aria-live="polite"
                >
                  <FiCheckCircle aria-hidden="true" />
                  Message prepared successfully.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </MotionSection>
  );
}
