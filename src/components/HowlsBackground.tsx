"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function HowlsBackground() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [controls, setControls] = useState(false);
  const speedRef = useRef(0.9);
  const asset = (name: string) => `/images/howls/${name}`;

  useEffect(() => {
    if (!sceneRef.current) return;
    const root = sceneRef.current;
    const castleContainer = root.querySelector<HTMLElement>(".castle-container");
    const castle = root.querySelector<HTMLElement>(".castle");
    if (!castleContainer || !castle) return;

    let frame = 0;
    let progress = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const scale = Math.max(0.55, width / 1440);

    gsap.set(castle, { rotationZ: 7, scale: Math.min(scale * 0.85, 0.72) });

    const animateCastle = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      progress = (progress + 0.0012 * speedRef.current) % 1;
      gsap.set(castleContainer, {
        x: ((1440 * scale + castle.offsetWidth * scale) * -progress + castle.offsetWidth * scale / 2),
        y: 900 * scale * -(0.36 + progress * 0.35),
      });
      frame = requestAnimationFrame(animateCastle);
    };

    gsap.to(".cloud1, .cloud2, .cloud3, .cloud4, .cloud5", {
      x: () => window.innerWidth * 2,
      duration: 20,
      ease: "none",
      repeat: -1,
      stagger: 4,
    });
    gsap.to(".cloud-bg, .cloud-bg2", {
      x: () => window.innerWidth * 2,
      y: 120,
      duration: 40,
      ease: "none",
      repeat: -1,
      stagger: 20,
      force3D: true,
    });
    gsap.to(castle, { rotationZ: 9, x: 4, y: -4, duration: 1.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".mound-group", { rotationZ: -1, y: 3, duration: 1, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".wing", { rotationZ: -1, x: -5, duration: 1, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".chimney1, .chimney2, .chimney3", { rotationZ: 5, y: -8, duration: 1.5, yoyo: true, repeat: -1, stagger: 0.25, ease: "sine.inOut" });
    gsap.to(".houses-group", { rotationZ: -1, y: 5, duration: 1, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".treehouse", { rotationZ: 10, y: -5, duration: 1, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".antenna, .wind", { rotationZ: 10, duration: 1.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".flleg, .blleg", { rotationZ: -45, x: 12, duration: 1, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".frleg, .brleg", { rotationZ: -35, x: 25, y: -12, duration: 1, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".flfoot, .blfoot, .frfoot, .brfoot", { rotationZ: -10, duration: 1, yoyo: true, repeat: -1, ease: "sine.inOut" });

    animateCastle();

    return () => {
      cancelAnimationFrame(frame);
      gsap.killTweensOf(root.querySelectorAll("*"));
    };
  }, []);

  useEffect(() => {
    if (!controls) {
      speedRef.current = 0.9;
      return;
    }
    const onMove = (event: MouseEvent) => {
      speedRef.current = (1 - (event.clientX / window.innerWidth) * 2) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [controls]);

  return (
    <> 
    <div ref={sceneRef} className={controls ? "howls-scene active" : "howls-scene"} aria-hidden="true">
      <img className="background" src={asset("background.jpg")} alt="" />
      <img className="cloud-bg" src={asset("cloud-bg.png")} alt="" />
      <img className="cloud-bg2" src={asset("cloud-bg.png")} alt="" />

      <div className="castle-container">
        <div className="castle">
          <div className="brleg"><img className="brfoot" src={asset("brfoot.png")} alt="" /><img className="brbottom" src={asset("brbottom.png")} alt="" /></div>
          <div className="frleg"><img className="frfoot" src={asset("frfoot.png")} alt="" /><img className="frbottom" src={asset("frbottom.png")} alt="" /></div>
          <img className="chimney3" src={asset("chimney3.png")} alt="" />
          <img className="treehouse" src={asset("treehouse.png")} alt="" />
          <div className="houses-group">
            <img className="point6" src={asset("point6.png")} alt="" />
            <img className="point5" src={asset("point5.png")} alt="" />
            <img className="point4" src={asset("point4.png")} alt="" />
            <img className="houses" src={asset("houses.png")} alt="" />
          </div>
          <img className="chimney2" src={asset("chimney2.png")} alt="" />
          <img className="chimney1" src={asset("chimney1.png")} alt="" />
          <img className="wing" src={asset("wing.png")} alt="" />
          <div className="mound-group">
            <img className="antenna" src={asset("antenna.png")} alt="" />
            <img className="point3" src={asset("point3.png")} alt="" />
            <img className="point2" src={asset("point2.png")} alt="" />
            <img className="point1" src={asset("point1.png")} alt="" />
            <img className="mound" src={asset("mound.png")} alt="" />
          </div>
          <img className="wind" src={asset("wind.png")} alt="" />
          <img className="cannon" src={asset("cannon.png")} alt="" />
          <img className="main" src={asset("main.png")} alt="" />
          <div className="blleg">
            <div className="blbottom-group"><img className="blfoot" src={asset("flfoot.png")} alt="" /><img className="blbottom" src={asset("flbottom.png")} alt="" /></div>
            <img className="bltop" src={asset("fltop.png")} alt="" />
          </div>
          <img className="blcover" src={asset("blcover.png")} alt="" />
          <img className="knob" src={asset("knob.png")} alt="" />
          <img className="tele" src={asset("tele.png")} alt="" />
          <img className="telecover" src={asset("telecover.png")} alt="" />
          <div className="flleg">
            <div className="flbottom-group"><img className="flfoot" src={asset("flfoot.png")} alt="" /><img className="flbottom" src={asset("flbottom.png")} alt="" /></div>
            <img className="fltop" src={asset("fltop.png")} alt="" />
          </div>
          <img className="flcover" src={asset("flcover.png")} alt="" />
        </div>
      </div>

      <img className="foreground" src={asset("foreground.png")} alt="" />
      <div className="clouds">
        <img className="cloud-shadow1" src={asset("cloud_shadow-1.png")} alt="" />
        <img className="cloud-shadow2" src={asset("cloud_shadow-1.png")} alt="" />
        <img className="cloud-shadow3" src={asset("cloud_shadow-1.png")} alt="" />
        <img className="cloud1" src={asset("cloud-1.png")} alt="" />
        <img className="cloud2" src={asset("cloud-1.png")} alt="" />
        <img className="cloud3" src={asset("cloud-2.png")} alt="" />
        <img className="cloud4" src={asset("cloud-1.png")} alt="" />
        <img className="cloud5" src={asset("cloud-2.png")} alt="" />
      </div>
    </div>
    <button
      type="button"
      className="control-toggle"
      onClick={() => setControls((current) => !current)}
      aria-pressed={controls}
    >
      {controls ? "Castle controls on" : "Castle controls off"}
    </button>
    </>
  );
}
