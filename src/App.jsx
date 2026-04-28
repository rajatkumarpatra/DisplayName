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

    // validation
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
          <label>First name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setFullName("");
            }}
          />

          <label>Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setFullName("");
            }}
          />

          <button type="submit">Submit</button>
        </form>

        {/* Render only when valid */}
        {fullName && (
          <div className="output">
            <p>{fullName}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;