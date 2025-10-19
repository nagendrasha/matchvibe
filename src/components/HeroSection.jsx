import React from 'react'

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <span className="eyebrow">Swipe into meaningful connections</span>
        <h1>Find your perfect match with MatchVibe</h1>
        <p>
          MatchVibe brings together people who vibe with your energy. Discover authentic connections,
          spark real conversations, and meet someone who truly gets you.
        </p>
        <div className="hero__cta-group">
          <a href="#download" className="btn btn--primary">Get the app</a>
          <a href="#how-it-works" className="btn btn--text">See how it works</a>
        </div>
        <div className="hero__stats">
          <div>
            <strong>2M+</strong>
            <span>Successful matches</span>
          </div>
          <div>
            <strong>4.8/5</strong>
            <span>App store rating</span>
          </div>
          <div>
            <strong>190+</strong>
            <span>Countries worldwide</span>
          </div>
        </div>
      </div>
      <div className="hero__card">
        <div className="hero__card-profile">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80" alt="Profile" />
          <div>
            <h3>Amelia, 27</h3>
            <p>Concert lover • Foodie • Traveler</p>
          </div>
        </div>
        <p className="hero__card-quote">
          "MatchVibe helped me find someone who loves spontaneous trips as much as I do!"
        </p>
      </div>
    </section>
  )
}

export default HeroSection