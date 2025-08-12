import { useState, useEffect } from 'react'

function App() {
   const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Network response not ok");
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <div className="wrap">Loading contacts...</div>;
  if (error) return <div className="wrap error">Error: {error}</div>;

 return (
  <div className="wrap">
    <h1 className="title">Contacts</h1>
    <div className="grid">
      {contacts.map((c) => (
        <article className="card" key={c.id}>
          {/* Header */}
          <header className="card-header">
            <div className="name">{c.name}</div>
            <div className="username">@{c.username}</div>
          </header>

          {/* Company Details */}
          <div className="section">
            <h3 className="section-title">Company</h3>
            <ul className="info-list">
              <li className="info-row">
                <strong className="label">Name:</strong>
                <span className="value">{c.company?.name}</span>
              </li>
              <li className="info-row">
                <strong className="label">Tagline:</strong>
                <span className="value">{c.company?.catchPhrase}</span>
              </li>
              <li className="info-row">
                <strong className="label">Expertise:</strong>
                <span className="value">{c.company?.bs}</span>
              </li>
            </ul>
          </div>

          {/* Communication */}
          <div className="section">
            <h3 className="section-title">Contact Information</h3>
            <ul className="info-list">
              <li className="info-row">
                <strong className="label">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  Email:
                </strong>
                <span className="value">{c.email}</span>
              </li>
              <li className="info-row">
                <strong className="label">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>
                  Phone:
                </strong>
                <span className="value">{c.phone}</span>
              </li>
              <li className="info-row">
                <strong className="label">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0012 13.5c-2.998 0-5.74-1.1-7.843-2.918m0 0A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253" /></svg>
                  Web:
                </strong>
                <span className="value">{c.website}</span>
              </li>
              <li className="info-row">
                <strong className="label">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  Address:
                </strong>
                <span className="value">
                  {c.address?.street}, {c.address?.suite}, {c.address?.city} - {c.address?.zipcode}
                </span>
              </li>
            </ul>
          </div>
        </article>
      ))}
    </div>
  </div>
);
}

export default App
