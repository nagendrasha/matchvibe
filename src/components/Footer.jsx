import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">Match<span>Vibe</span></div>
      <div className="footer__links">
        <a href="mailto:hello@matchvibe.app">Contact</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/careers">Careers</a>
      </div>
      <p className="footer__note">© {new Date().getFullYear()} MatchVibe. All rights reserved.</p>
    </footer>
  )
}

export default Footer