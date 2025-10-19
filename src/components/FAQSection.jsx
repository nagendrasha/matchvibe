import React from 'react'

const faqs = [
  {
    question: 'Is MatchVibe free to use?',
    answer:
      'Yes! You can create a profile, discover matches, and start chatting for free. Premium features are available for deeper insights and exclusive events.',
  },
  {
    question: 'How does MatchVibe keep me safe?',
    answer:
      'We use photo verification, AI-powered content moderation, and in-app safety tools so you can connect confidently.',
  },
  {
    question: 'Can I use MatchVibe while traveling?',
    answer:
      'Absolutely. MatchVibe works in over 190 countries, and we adapt your matches based on where you are.',
  },
]

const FAQSection = () => {
  return (
    <section className="faq" id="faq">
      <div className="section-heading">
        <span className="eyebrow">FAQ</span>
        <h2>Answers before your first swipe</h2>
      </div>
      <div className="faq__list">
        {faqs.map(({ question, answer }) => (
          <article key={question} className="faq-item">
            <h3>{question}</h3>
            <p>{answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FAQSection