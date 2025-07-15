// src/Watermark.tsx
import React from 'react';
import './Watermark.css';

const Watermark = () => {
  return (
    <a
      className="saad-watermark"
      href="https://aboutsaad.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/public/WhatsApp Image 2025-07-13 at 17.15.05_130c299c.jpg" alt="Saad" className="saad-image" />
      <strong>Made by Saad Hassan</strong>
    </a>
  );
};

export default Watermark;
