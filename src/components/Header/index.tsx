"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [activeHash, setActiveHash] = useState("overview");

  const pathUrl = usePathname();

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash.replace("#", "") || "overview");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-1000 w-full ${
          stickyMenu
            ? "before:features-row-border bg-dark/70 py-4! shadow-sm backdrop-blur-lg transition duration-100 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full lg:py-0!"
            : "py-7 lg:py-0"
        }`}
      >
        <div className="relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 lg:flex xl:px-0">
          <div className="flex w-full items-center justify-end lg:hidden">
            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="block lg:hidden"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-0 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-150 duration-200 ease-in-out ${
                      !navigationOpen ? "delay-400 w-full!" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-200 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-0" : "h-full"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-200" : "h-0.5"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            className={`invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-full ${
              navigationOpen
                ? "visible! relative mt-4 h-auto! max-h-[400px] overflow-y-scroll rounded-md bg-dark p-7.5 shadow-lg"
                : ""
            }`}
          >
            <nav>
              <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-2">
                {menuData.map((menuItem, key) => (
                  <li
                    key={key}
                    className={`nav__menu group relative ${
                      stickyMenu ? "lg:py-4" : "lg:py-7"
                    }`}
                  >
                    {menuItem.submenu ? (
                      <>
                        <DropDown menuItem={menuItem} />
                      </>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        onClick={() => {
                          const hash = menuItem.path?.split("#")[1];
                          if (hash) window.setTimeout(() => window.dispatchEvent(new HashChangeEvent("hashchange")), 0);
                        }}
                        className={`relative rounded-full px-4 py-2 text-sm font-bold transition duration-200 ${
                          ((menuItem.title === "AI Tool" && pathUrl?.startsWith("/ai-examples")) ||
                            (menuItem.path?.startsWith("/#") && menuItem.path.slice(2) === activeHash && pathUrl === "/"))
                            ? "overflow-hidden border border-orange-100/50 bg-cover bg-center text-white shadow-[0_8px_24px_rgba(239,68,68,.32)] brightness-110 hover:-translate-y-0.5"
                            : "border border-transparent text-white/85 hover:text-white"
                        }`}
                        style={((menuItem.title === "AI Tool" && pathUrl?.startsWith("/ai-examples")) ||
                          (menuItem.path?.startsWith("/#") && menuItem.path.slice(2) === activeHash && pathUrl === "/")) ? {
                          backgroundImage: "linear-gradient(90deg, rgba(24,12,8,.82), rgba(180,48,18,.58), rgba(24,12,8,.82)), url('/images/howls/background.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center 42%",
                          textShadow: "0 1px 3px rgba(0,0,0,.95)",
                        } : undefined}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-7 flex items-center gap-3 lg:mt-0">
              <Link
                href="/auth/signin"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition hover:text-white"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="rounded-full border border-orange-300/30 bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(239,68,68,.25)] transition hover:-translate-y-0.5"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
