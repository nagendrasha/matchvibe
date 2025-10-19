import React from 'react'

const features = [
  {
    title: 'Smart matching',
    description:
      'AI-powered matching learns what matters to you and recommends profiles that share your vibe.',
    icon: '💘',
  },
  {
    title: 'Authentic profiles',
    description:
      'Verified badges, photo prompts, and voice notes help you get to know people beyond the surface.',
    icon: '🔐',
  },
  {
    title: 'Premium events',
    description:
      'Join curated in-app experiences, group chats, and local events to connect in real life.',
    icon: '🎉',
  },
]

const FeaturesSection = () => {
  return (
    <section className="features" id="features">
      <div className="section-heading">
        <span className="eyebrow">Why MatchVibe?</span>
        <h2>Everything you need to spark something real</h2>
        <p>
          We built MatchVibe to feel human. Our features help you go beyond swipes so you can
          build genuine connections with ease.
        </p>
      </div>
      <div className="features__grid">
        {features.map(({ title, description, icon }) => (
          <article key={title} className="feature-card">
            <div className="feature-card__icon" aria-hidden>
              {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection