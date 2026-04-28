import { useRef, useState } from 'react'
import './App.css'

function App() {
  const firstInputRef = useRef(null)
  const lastInputRef = useRef(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  function clearCustomValidity() {
    firstInputRef.current?.setCustomValidity('')
    lastInputRef.current?.setCustomValidity('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    const first = (firstInputRef.current?.value ?? '').trim()
    const last = (lastInputRef.current?.value ?? '').trim()

    if (!first) {
      clearCustomValidity()
      firstInputRef.current?.setCustomValidity('Please fill out this field.')
      firstInputRef.current?.reportValidity()
      setFullName('')
      return
    }

    if (!last) {
      clearCustomValidity()
      lastInputRef.current?.setCustomValidity('Please fill out this field.')
      lastInputRef.current?.reportValidity()
      setFullName('')
      return
    }

    clearCustomValidity()
    setFullName(`${first} ${last}`)
  }

  return (
    <div className="app">
      <div className="card">
        <h1>Enter your name</h1>

        <form id="name-form" noValidate onSubmit={handleSubmit}>
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
              setFullName('')
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
              setFullName('')
              lastInputRef.current?.setCustomValidity('')
            }}
            required
          />

          <button type="submit">Submit</button>
        </form>

        {fullName ? (
          <div className="output" role="status" aria-live="polite">
            <div className="output-label">Full name</div>
            <div id="full-name" className="output-name">
              {fullName}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
