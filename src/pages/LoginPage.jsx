import { useState } from 'react'

function LoginPage({ onLogin }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedName = name.trim()
    if (!trimmedName) {
      setError('Please enter your name to continue.')
      return
    }
    onLogin(trimmedName)
  }

  return <main className="login-page"><section className="login-card" aria-labelledby="login-title"><div className="login-brand"><span className="brand-mark">S</span><span>StudyFlow</span></div><p className="eyebrow">WELCOME TO STUDYFLOW</p><h1 id="login-title">Let’s get started</h1><p className="login-copy">Enter your name to personalize your study space.</p><form onSubmit={handleSubmit} noValidate><label htmlFor="user-name">Your name</label><input id="user-name" name="name" value={name} onChange={(event) => { setName(event.target.value); setError('') }} placeholder="Enter your name" autoComplete="name" autoFocus aria-describedby={error ? 'name-error' : undefined} aria-invalid={Boolean(error)} />{error && <p className="form-error" id="name-error" role="alert">{error}</p>}<button className="login-button" type="submit">Continue</button></form></section></main>
}

export default LoginPage
