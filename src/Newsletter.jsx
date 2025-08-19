// src/Newsletter.jsx
import React from 'react';
import './Newsletter.css';

export default function Newsletter() {
  return (
    <div className="newsletter-section">
      <h2>📬 Subscribe to Our Newsletter</h2>
      <p>Get updates about EMS features, tips, and releases.</p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
