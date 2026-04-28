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

    const first = firstName.trim()
    const last = lastName.trim()

    clearCustomValidity()

    if (!first) {
      firstInputRef.current?.setCustomValidity('Please fill out this field.')
      firstInputRef.current?.reportValidity()
      clearCustomValidity()
      setFullName('')
      return
    }

    if (!last) {
      lastInputRef.current?.setCustomValidity('Please fill out this field.')
      lastInputRef.current?.reportValidity()
      clearCustomValidity()
      setFullName('')
      return
    }

    setFullName(`${first} ${last}`)
  }

  return (
    <div className="app">
      <div className="card">
        <h1>Enter your name</h1>

        <form onSubmit={handleSubmit}>
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

        <div
          className={
            fullName ? 'output output--visible' : 'output output--empty'
          }
          role="status"
          aria-live="polite"
        >
          {!!fullName && <div className="output-label">Full name</div>}
          <div id="full-name" className={fullName ? 'output-name' : undefined}>
            {fullName}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
