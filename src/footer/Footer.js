import React from 'react';
import { Mail, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-section-title">Car Tech India</div>
          <p>Peer-to-peer marketplace for buying & selling cars in India.</p>
        </div>
        <div>
          <div className="footer-section-title">Safety Tips</div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Meet in public places and bring a friend.</li>
            <li>Inspect documents and service history.</li>
            <li>Never share OTPs or make advance payments.</li>
          </ul>
        </div>
        <div>
          <div className="footer-section-title">Contact</div>
          <div className="footer-contact-item"><Mail className="w-4 h-4"/> support@cartechindia.com</div>
          <div className="footer-contact-item"><Phone className="w-4 h-4"/> +91 99999 99999</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
