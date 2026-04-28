import { useRef, useState } from 'react'
import './App.css'

function App() {
  const formRef = useRef(null)
  const firstInputRef = useRef(null)
  const lastInputRef = useRef(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState(null)

  function clearCustomValidity() {
    firstInputRef.current?.setCustomValidity('')
    lastInputRef.current?.setCustomValidity('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    const first = firstName.trim()
    const last = lastName.trim()

    if (firstInputRef.current) {
      firstInputRef.current.setCustomValidity(
        first ? '' : 'Please fill out this field.',
      )
    }
    if (lastInputRef.current) {
      lastInputRef.current.setCustomValidity(
        last ? '' : 'Please fill out this field.',
      )
    }

    const form = formRef.current
    if (!form || !form.checkValidity()) {
      form?.reportValidity()
      clearCustomValidity()
      setFullName(null)
      return
    }

    clearCustomValidity()
    setFullName(`${first} ${last}`)
  }

  return (
    <div className="app">
      <div className="card">
        <h1>Enter your name</h1>

        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="first-name">First name</label>
          <input
            ref={firstInputRef}
            id="first-name"
            name="firstName"
            type="text"
            placeholder="First name"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
              setFullName(null)
              firstInputRef.current?.setCustomValidity('')
            }}
            required
          />

          <label htmlFor="last-name">Last name</label>
          <input
            ref={lastInputRef}
            id="last-name"
            name="lastName"
            type="text"
            placeholder="Last name"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
              setFullName(null)
              lastInputRef.current?.setCustomValidity('')
            }}
            required
          />

          <button type="submit">Submit</button>
        </form>

        {fullName != null && (
          <div className="output visible" role="status" aria-live="polite">
            <div className="output-label">Full name</div>
            <div className="output-name">{fullName}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
