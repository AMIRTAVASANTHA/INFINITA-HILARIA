import { useState } from "react";
import "./App.css";
const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    category: "Island getaway",
    image: "/santori%20greece.jpg",
  },
  {
    name: "Kyoto",
    country: "Japan",
    category: "Culture & calm",
    price: "From ₹55,000",
    image: "/kyoto%20japan.jpg",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    category: "Mountain escape",
    price: "From ₹65,000",
    image: "/swiss%20alps.avif",
  },
];
function App() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("3-5 days");
  const [travelStyle, setTravelStyle] = useState("Nature");
  const [message, setMessage] = useState("");
  const [favorites, setFavorites] = useState([]);
  function planTrip(event) {
    event.preventDefault();

    if (!destination.trim()) {
      setMessage("Please enter a destination to begin your journey.");
      return;
    }
    setMessage(
      `Your ${days} ${travelStyle.toLowerCase()} adventure to ${destination.trim()} is ready to plan!`
    );

    document.getElementById("trip-planner")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function toggleFavorite(name) {
    setFavorites((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  }

  return (
    <div className="website">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">✳</span>
          <span>
            INFINITA HILARIA
            <small>TRAVEL, WITH INTENTION</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#destinations">Destinations</a>
          <a href="#trip-planner">Plan a trip</a>
          <a href="#about">Our philosophy</a>
        </nav>

        <a className="nav-cta" href="#trip-planner">
          Start exploring <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
        <img
  className="hero-image"
  src="/lakes.jpg"
  alt="Beautiful lake"
/>

          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
               &nbsp; YOUR NEXT CHAPTER BEGINS HERE
            </p>

            <h1>
              The world is wide.
              <br />
              <em>Make it yours.</em>
            </h1>

            <p className="hero-description">
              Thoughtful itineraries, unforgettable places, and little
              moments that become your favourite memories.
            </p>

            <a className="primary-button" href="#trip-planner">
              Plan your journey <span>↗</span>
            </a>

            <div className="hero-note">
              <span className="note-line" />
              MADE FOR THE WAY YOU LOVE TO TRAVEL
            </div>
          </div>

          <div className="hero-number">
            <span>01</span> / THE ART OF GETTING AWAY
          </div>

          <div className="image-credit">A WORLD WAITING TO BE DISCOVERED</div>
        </section>

        <section className="intro section-padding" id="about">
          <div>
            <p className="eyebrow">TRAVEL A LITTLE DIFFERENTLY</p>
            <h2>
              Less scrolling.
              <br />
              <em>More experiencing.</em>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Every great trip starts with a feeling. We help you turn that
              feeling into a journey, with a plan that fits your pace,
              interests, and budget.
            </p>
            <a className="text-link" href="#trip-planner">
              Find your kind of getaway <span>→</span>
            </a>
          </div>
        </section>

        <section className="destinations section-padding" id="destinations">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LITTLE INSPIRATION</p>
              <h2>Places to <em>fall for.</em></h2>
            </div>
            <span className="destination-count">01 — 03 / EDITOR'S PICKS</span>
          </div>

          <div className="destination-grid">
            {destinations.map((place, index) => (
              <article className="destination-card" key={place.name}>
                <div className="destination-image-wrap">
                  <img src={place.image} alt={`${place.name}, ${place.country}`} />
                  <span className="card-index">
                    0{index + 1}
                  </span>
                  <button
                    className={`favorite-button ${
                      favorites.includes(place.name) ? "is-favorite" : ""
                    }`}
                    onClick={() => toggleFavorite(place.name)}
                    aria-label={`${
                      favorites.includes(place.name) ? "Remove" : "Save"
                    } ${place.name} ${favorites.includes(place.name) ? "from" : "to"} favorites`}
                    aria-pressed={favorites.includes(place.name)}
                  >
                    {favorites.includes(place.name) ? "♥" : "♡"}
                  </button>
                </div>

                <div className="destination-info">
                  <div>
                    <p className="destination-category">{place.category}</p>
                    <h3>{place.name}</h3>
                    <p className="destination-country">{place.country}</p>
                  </div>
                  <span className="destination-arrow">↗</span>
                </div>
                <p className="destination-price">{place.price} per person*</p>
              </article>
            ))}
          </div>

          <p className="disclaimer">
            *Illustrative starting budgets only. Actual travel costs vary by
            dates, flights, accommodation, and preferences.
          </p>
        </section>

        <section className="planner-section" id="trip-planner">
          <div className="planner-copy">
            <p className="eyebrow">YOUR ADVENTURE, YOUR RULES</p>
            <h2>
              Let's make
              <br />
              <em>some memories.</em>
            </h2>
            <p>
              Tell us what you're dreaming of. Your personalised trip starts
              with a few little details.
            </p>
            <div className="planner-decoration">✳</div>
          </div>

          <form className="planner-form" onSubmit={planTrip}>
            <label htmlFor="destination">WHERE TO?</label>
            <input
              id="destination"
              type="text"
              placeholder="Enter a city or country..."
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
            />

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="days">HOW LONG?</label>
                <select
                  id="days"
                  value={days}
                  onChange={(event) => setDays(event.target.value)}
                >
                  <option>Weekend</option>
                  <option>3–5 days</option>
                  <option>1 week</option>
                  <option>2 weeks</option>
                  <option>More than 2 weeks</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="style">YOUR TRAVEL MOOD</label>
                <select
                  id="style"
                  value={travelStyle}
                  onChange={(event) => setTravelStyle(event.target.value)}
                >
                  <option>Nature</option>
                  <option>Adventure</option>
                  <option>Culture</option>
                  <option>Romantic</option>
                  <option>Relaxation</option>
                  <option>Food & shopping</option>
                </select>
              </div>
            </div>

            <button className="submit-button" type="submit">
              Let's plan my trip <span>↗</span>
            </button>

            {message && (
              <p className="form-message" role="status">
                {message}
              </p>
            )}

            <p className="form-note">
              YOUR JOURNEY. YOUR PACE. YOUR KIND OF MAGIC.
            </p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon">✳</span>
          <span>
            INFINITA HILARIA
            <small>MAKE THE WORLD YOURS</small>
          </span>
        </a>
        <p>Made for dreamers, explorers & everywhere in between.</p>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

export default App;