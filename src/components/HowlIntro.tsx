'use client';

import { useEffect, useState } from 'react';

export default function HowlIntro() {
  const [visible, setVisible] = useState(false);
  const [qrSrc, setQrSrc] = useState('');

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has('howl')) {
      sessionStorage.removeItem('howlIntroSeen');
    }

    if (!sessionStorage.getItem('howlIntroSeen')) setVisible(true);

    const entranceURL = new URL('rickroll.html', window.location.href).href;
    setQrSrc(
      `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(entranceURL)}`,
    );
  }, []);

  if (!visible) return null;

  return (
    <div id="howl-intro">
      <div className="howl-sky" />
      <div className="howl-sparkles" aria-hidden="true" />
      <div className="howl-content">
        <section className="rickroll-entrance">
          <h1>✦ Welcome to My Magical World ✦</h1>
          <p>Scan the enchanted QR code to enter!</p>

          <div className="qr-frame">
            {qrSrc && (
              <img
                src={qrSrc}
                alt="Scan to enter Nicole Alonso's website"
                width="220"
                height="220"
              />
            )}
          </div>

          <p className="mystery-text">
            ✨ A magical surprise awaits you... ✨
          </p>

          <a className="entrance-btn" href="rickroll.html">
            Enter the Magic ✦
          </a>
        </section>
      </div>
    </div>
  );
}
