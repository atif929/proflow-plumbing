"use client";

import { useState } from "react";
import Button from "../ui/Button";
import styles from "./ContactForm.module.css";

const SERVICE_OPTIONS = [
  { value: "", label: "Select required plumbing service..." },
  { value: "emergency", label: "Emergency Plumbing / Urgent Containment" },
  { value: "leak-detection", label: "Leak Detection & Pipe Inspection" },
  { value: "blocked-drains", label: "Blocked Drains & Jetting" },
  { value: "hot-water", label: "Hot Water System Service or Replacement" },
  { value: "fixtures", label: "Tap, Toilet & Fixture Repairs" },
  { value: "installations", label: "Plumbing Installation / Renovation" },
  { value: "other", label: "General Plumbing Inquiry" },
];

/**
 * ContactForm
 * Interactive client-validated demonstration contact form.
 * Provides accessible labels, email validation, clear error feedback,
 * and honest submission messaging indicating no external transmission occurs.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "standard",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@example.com).";
    }

    if (!formData.service) {
      newErrors.service = "Please select a plumbing service category.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your plumbing issue or inquiry.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide a few more details (minimum 10 characters).";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field for accessibility
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate standard frontend processing before rendering honest demo confirmation
    setTimeout(() => {
      setSubmittedData({ ...formData });
      setIsSubmitting(false);
    }, 400);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      urgency: "standard",
      message: "",
    });
    setErrors({});
  };

  if (submittedData) {
    return (
      <div className={styles.confirmationBox} role="status" aria-live="polite">
        <div className={styles.confirmIconWrap} aria-hidden="true">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h3 className={styles.confirmTitle}>Inquiry Validated Successfully</h3>
        <p className={styles.confirmIntro}>
          Thank you, <strong>{submittedData.name}</strong>. Your demonstration inquiry passed all
          client-side checks.
        </p>

        <div className={styles.demoNoticeCard}>
          <div className={styles.demoNoticeTag}>Demonstration Notice</div>
          <p className={styles.demoNoticeText}>
            This is a portfolio showcase website for CimpleTech. No message was transmitted across
            the network or sent to a real dispatch inbox. The form architecture is clean and ready
            for integration with a server action or API route.
          </p>
        </div>

        <div className={styles.summaryDetails}>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Contact Email:</span>
            <span className={styles.summaryValue}>{submittedData.email}</span>
          </div>
          {submittedData.phone && (
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Phone:</span>
              <span className={styles.summaryValue}>{submittedData.phone}</span>
            </div>
          )}
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Service:</span>
            <span className={styles.summaryValue}>
              {SERVICE_OPTIONS.find((opt) => opt.value === submittedData.service)?.label ||
                submittedData.service}
            </span>
          </div>
        </div>

        <Button onClick={handleReset} variant="secondary" className={styles.resetBtn}>
          Submit Another Demo Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Plumbing Service Inquiry Form">
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Send a Service Inquiry</h2>
        <p className={styles.formSubtitle}>
          Complete the fields below for non-urgent quotes, routine maintenance, or consultation bookings.
        </p>
      </div>

      {/* Name Field */}
      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>
          Full Name <span className={styles.requiredMark}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          placeholder="e.g. Jane Smith"
        />
        {errors.name && (
          <p id="name-error" className={styles.errorMessage} role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email & Phone Dual Column */}
      <div className={styles.dualRow}>
        <div className={styles.fieldGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address <span className={styles.requiredMark}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            placeholder="name@example.com"
          />
          {errors.email && (
            <p id="email-error" className={styles.errorMessage} role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="phone" className={styles.label}>
            Contact Phone <span className={styles.optionalMark}>(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div className={styles.fieldGroup}>
        <label htmlFor="service" className={styles.label}>
          Service Required <span className={styles.requiredMark}>*</span>
        </label>
        <div className={styles.selectWrapper}>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={`${styles.select} ${errors.service ? styles.inputError : ""}`}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {errors.service && (
          <p id="service-error" className={styles.errorMessage} role="alert">
            {errors.service}
          </p>
        )}
      </div>

      {/* Urgency Radio Group */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Inquiry Timing &amp; Urgency</legend>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="urgency"
              value="standard"
              checked={formData.urgency === "standard"}
              onChange={handleChange}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>Standard (Next Available / General Quote)</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="urgency"
              value="priority"
              checked={formData.urgency === "priority"}
              onChange={handleChange}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>Priority (Within 24–48 Hours)</span>
          </label>
        </div>
      </fieldset>

      {/* Message Textarea */}
      <div className={styles.fieldGroup}>
        <label htmlFor="message" className={styles.label}>
          Issue Description &amp; Details <span className={styles.requiredMark}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          placeholder="Please describe the plumbing symptom (e.g., location of leak, fixture type, sounds, or error codes)..."
        />
        {errors.message && (
          <p id="message-error" className={styles.errorMessage} role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className={styles.submitRow}>
        <Button
          type="submit"
          variant="primary"
          className={styles.submitBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Validating Inquiry..." : "Submit Service Inquiry"}
        </Button>
        <span className={styles.submitNote}>
          Demo Form · Client-side validation only
        </span>
      </div>
    </form>
  );
}
