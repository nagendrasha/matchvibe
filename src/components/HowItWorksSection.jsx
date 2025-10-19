import React from 'react'

const steps = [
  {
    title: 'Create your vibe',
    description:
      'Tell us about your interests, share your favorite moments, and let your personality shine with prompts.',
    number: '01',
  },
  {
    title: 'Discover matches',
    description:
      'Get curated profiles tailored to your vibe and dive into authentic conversations with ice breakers.',
    number: '02',
  },
  {
    title: 'Meet when it feels right',
    description:
      'Plan your first meetup with in-app planning tools, shared playlists, and curated date ideas.',
    number: '03',
  },
]

const HowItWorksSection = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-heading">
        <span className="eyebrow">How it works</span>
        <h2>Three steps to find your vibe</h2>
      </div>
      <div className="how-it-works__steps">
        {steps.map(({ title, description, number }) => (
          <article key={title} className="step-card">
            <span className="step-card__number">{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HowItWorksSection