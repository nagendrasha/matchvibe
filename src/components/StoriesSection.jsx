import React from 'react'

const stories = [
  {
    quote:
      'We bonded over our love for indie films, and MatchVibe made it easy to transition from messaging to meeting IRL.',
    name: 'Lina & Marcus',
    location: 'Chicago, USA',
  },
  {
    quote:
      'I never thought an app could understand my vibe so well. Our first date felt like we had known each other for years.',
    name: 'Priya & Arjun',
    location: 'Mumbai, India',
  },
  {
    quote:
      'The curated events helped me connect with people who share my passions. Now I have an adventure partner for life.',
    name: 'Jess & Alex',
    location: 'Berlin, Germany',
  },
]

const StoriesSection = () => {
  return (
    <section className="stories" id="stories">
      <div className="section-heading">
        <span className="eyebrow">Success stories</span>
        <h2>Real vibes. Real connections.</h2>
      </div>
      <div className="stories__grid">
        {stories.map(({ quote, name, location }) => (
          <figure key={name} className="story-card">
            <blockquote>“{quote}”</blockquote>
            <figcaption>
              <strong>{name}</strong>
              <span>{location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default StoriesSection