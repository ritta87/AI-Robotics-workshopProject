function Details() {
  const details = [
    { title: "Age Group", value: "8–14 Years" },
    { title: "Duration", value: "4 Weeks" },
    { title: "Mode", value: "Online" },
    { title: "Fee", value: "₹2,999" },
    { title: "Start Date", value: "15 July 2026" },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Workshop Details</h2>

        <div className="details-grid">
          {details.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Details;