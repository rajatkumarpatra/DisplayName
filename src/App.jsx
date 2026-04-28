import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const first = firstName.trim();
    const last = lastName.trim();

    if (!first || !last) {
      setFullName("");
      return;
    }

    setFullName(`${first} ${last}`);
  }

  return (
    <main className="app">
      <div className="card">
        <h1>Enter your name</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First name</label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setFullName("");
            }}
          />

          <label htmlFor="last-name">Last name</label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setFullName("");
            }}
          />

          <button type="submit">Submit</button>
        </form>

        {/* Always present for test compatibility */}
        <div className="output">
          <div id="full-name">{fullName}</div>
        </div>
      </div>
    </main>
  );
}

export default App;