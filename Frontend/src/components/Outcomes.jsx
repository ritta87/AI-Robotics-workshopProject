function Outcomes() {
  const outcomes = [
    "Understand the basics of Artificial Intelligence",
    "Learn block-based coding concepts",
    "Build simple robotics projects",
    "Improve problem-solving and critical thinking skills",
    "Create and showcase a final mini AI project",
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Learning Outcomes</h2>

        <ul className="outcomes-list">
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Outcomes;