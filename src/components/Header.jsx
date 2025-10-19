import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Match<span>Vibe</span></div>
      <nav className="header__nav">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#stories">Stories</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a href="#download" className="header__cta">Join now</a>
    </header>
  )
}

export default Header