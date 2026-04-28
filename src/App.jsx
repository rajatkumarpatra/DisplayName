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
    <div>
      <h1>Enter your name</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
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

        <label htmlFor="last-name">Last Name</label>
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

      {/* IMPORTANT: render ONLY when valid */}
      {fullName && (
        <h2 className="full-name-display-heading">
          Full Name: {fullName}
        </h2>
      )}
    </div>
  );
}

export default App;