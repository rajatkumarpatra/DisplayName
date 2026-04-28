import { useRef, useState } from 'react'
import './App.css'

function App() {
  const firstInputRef = useRef(null)
  const lastInputRef = useRef(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullNameLine, setFullNameLine] = useState('')

  function clearCustomValidity() {
    firstInputRef.current?.setCustomValidity('')
    lastInputRef.current?.setCustomValidity('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const fd = new FormData(form)
    const first = String(
      firstInputRef.current?.value ?? fd.get('firstName') ?? firstName,
    ).trim()
    const last = String(
      lastInputRef.current?.value ?? fd.get('lastName') ?? lastName,
    ).trim()

    if (!first) {
      clearCustomValidity()
      firstInputRef.current?.setCustomValidity('Please fill out this field.')
      firstInputRef.current?.reportValidity()
      setFullNameLine('')
      return
    }

    if (!last) {
      clearCustomValidity()
      lastInputRef.current?.setCustomValidity('Please fill out this field.')
      lastInputRef.current?.reportValidity()
      setFullNameLine('')
      return
    }

    clearCustomValidity()
    setFullNameLine(`Full Name: ${first} ${last}`)
  }

  return (
    <main className="app">
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
              setFullNameLine('')
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
              setFullNameLine('')
              lastInputRef.current?.setCustomValidity('')
            }}
            required
          />

          <button type="submit">Submit</button>
        </form>

        <h2 className="full-name-display-heading">Full Name Display</h2>

        {fullNameLine ? (
          <div className="output">
            <div id="full-name">{fullNameLine}</div>
          </div>
        ) : null}
      </div>
    </main>
  )
}

export default App
