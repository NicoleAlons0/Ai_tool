'use client';

import { useEffect, useState } from 'react';

export default function HowlIntro() {
  const [visible, setVisible] = useState(false);
  const [disappearing, setDisappearing] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has('howl')) {
      sessionStorage.removeItem('howlIntroSeen');
    }

    if (!sessionStorage.getItem('howlIntroSeen')) setVisible(true);
  }, []);

  const enterWebsite = () => {
    sessionStorage.setItem('howlIntroSeen', 'true');
    setDisappearing(true);
    window.setTimeout(() => setVisible(false), 1600);
  };

  if (!visible) return null;

  return (
    <div id="howl-intro" className={disappearing ? 'disappear' : ''}>
      <div className="howl-sky" />
      <div className="howl-sparkles" aria-hidden="true" />
      <div className="howl-content">
        <div className="howl-decoration">✧ ✦ ✧</div>
        <h1>WELCOME</h1>
        <p>A little magic is waiting for you...</p>
        <button id="howl-enter" type="button" onClick={enterWebsite}>
          ✦ Click here to get started! ✦
        </button>
      </div>
    </div>
  );
}
