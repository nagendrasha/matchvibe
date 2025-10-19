import React from 'react'

const DownloadSection = () => {
  return (
    <section className="download" id="download">
      <div className="section-heading">
        <span className="eyebrow">Get started</span>
        <h2>Bring the right vibe anywhere you go</h2>
        <p>
          Download MatchVibe on your favorite platform. Sync your calendar, set your preferences,
          and start discovering people nearby in minutes.
        </p>
      </div>
      <div className="download__buttons">
        <a href="https://apps.apple.com" className="store-badge" aria-label="Download on the App Store">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store badge" />
        </a>
        <a href="https://play.google.com" className="store-badge" aria-label="Get it on Google Play">
          <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play badge" />
        </a>
      </div>
    </section>
  )
}

export default DownloadSection