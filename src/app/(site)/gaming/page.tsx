import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaming | Nicole Alonso",
  description: "Fantasy RPG, crafting, adventure, and cozy game projects by Nicole Alonso.",
};

const games = [
  {
    title: "Alexeon Kingdom",
    description: "Forge your legend across wild fantasy realms in this action RPG.",
    url: "https://share.aippy.ai/p/qBs4",
    image: "/images/howls/project-03.jpg",
    label: "Play Alexeon Kingdom",
  },
  {
    title: "CraftQuest RPG",
    description: "Gather resources, craft powerful equipment, upgrade your gear, and adventure onward.",
    url: "https://rpg-quest.base44.app/",
    image: "/images/howls/theme-02.jpg",
    label: "Play CraftQuest",
  },
  {
    title: "FernHollow",
    description: "Start a peaceful farm adventure, grow your valley, and build a cozy life.",
    url: "https://share.aippy.ai/p/qBsf",
    image: "/images/howls/theme-03.jpg",
    label: "Play FernHollow",
  },
  {
    title: "Welcome to the Forge",
    description: "Gather materials, craft rare items, upgrade your equipment, and become a master crafter.",
    url: "https://share.aippy.ai/p/qBrP",
    image: "/images/howls/theme-04.jpg",
    label: "Enter the Forge",
  },
];

export default function GamingPage() {
  return (
    <main className="gaming-page">
      <header className="gaming-hero" id="home">
        <div className="gaming-container gaming-hero-content">
          <p className="gaming-eyebrow">INDIE GAMING • RPG • ADVENTURE</p>
          <h1>Welcome to My Gaming World</h1>
          <p>
            Explore fantasy adventures, RPG worlds, crafting games, and cozy experiences.
            Choose a game and begin your adventure.
          </p>
          <a href="#games" className="gaming-button">Explore Games ↓</a>
        </div>
      </header>

      <section className="gaming-intro" id="about">
        <div className="gaming-container">
          <div className="gaming-section-heading">
            <p className="gaming-eyebrow">THE COLLECTION</p>
            <h2>Games &amp; Interactive Worlds</h2>
            <div className="gaming-line" />
          </div>
          <div className="gaming-intro-grid">
            <p>
              Welcome to my gaming collection. I enjoy creating and sharing experiences that combine
              exploration, progression, crafting, combat, and adventure.
            </p>
            <p>
              Check out the games below and discover a different world in every project. You can also
              follow me on Twitch for gaming content and updates.
            </p>
          </div>
        </div>
      </section>

      <section className="gaming-projects" id="games">
        <div className="gaming-container">
          <div className="gaming-title">
            <h2>My Gaming Projects</h2>
            <p>Choose your next adventure.</p>
          </div>
          <div className="gaming-card-grid">
            {games.map((game) => (
              <article className="gaming-card" key={game.title}>
                <div
                  className="gaming-card-image"
                  style={{ backgroundImage: `url("${game.image}")` }}
                  role="img"
                  aria-label={game.title}
                />
                <div className="gaming-card-content">
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <a href={game.url} target="_blank" rel="noopener noreferrer">
                    {game.label} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gaming-twitch">
        <div className="gaming-container gaming-twitch-box">
          <div>
            <p className="gaming-eyebrow">FOLLOW THE ADVENTURE</p>
            <h2>Watch Me on Twitch</h2>
            <p>Watch gameplay, gaming sessions, new projects, and more on my Twitch channel.</p>
          </div>
          <a
            className="gaming-button"
            href="https://www.twitch.tv/SioxReaper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My Twitch →
          </a>
        </div>
      </section>

      <footer className="gaming-footer">
        <div className="gaming-container gaming-footer-grid">
          <div>
            <h3>SioxReaper Gaming</h3>
            <p>Building worlds, playing games, and sharing the adventure.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <div className="gaming-footer-links">
              <a href="#games">Games</a>
              <a href="#about">About</a>
              <a href="https://www.twitch.tv/SioxReaper" target="_blank" rel="noopener noreferrer">Twitch</a>
            </div>
          </div>
        </div>
        <div className="gaming-container gaming-copyright">
          <span>© 2026 Nicole Alonso&apos;s Gaming Portfolio</span>
          <span>Gaming Projects Portfolio</span>
        </div>
      </footer>
    </main>
  );
}
