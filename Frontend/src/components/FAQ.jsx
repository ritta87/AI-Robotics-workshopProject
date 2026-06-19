function FAQ() {
  const faqs = [
    {
      question: "Do children need prior coding experience?",
      answer: "No, this workshop is beginner-friendly.",
    },
    {
      question: "Will session recordings be available?",
      answer: "Yes, recordings will be shared after every session.",
    },
    {
      question: "What devices are required?",
      answer: "A laptop or desktop computer with a stable internet connection.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>

        {faqs.map((faq) => (
          <div className="faq-card" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;