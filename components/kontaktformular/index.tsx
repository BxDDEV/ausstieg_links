
import { ValidationError, useForm } from '@formspree/react'
import styles from './style.module.css'
import Link from 'next/link'

export default function Kontaktformular() {
  const [state, handleSubmit] = useForm("ss")
  if (state.succeeded) {
    return <p>Danke</p>
  }
  return (
    <>
      <div style={{ textAlign: 'center', paddingTop: '2%' }}>
        <h1>Kontakt</h1>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
          </label>
          <input id='email' type='email' name='email' />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
          <label htmlFor="name">
            Name:
          </label>
          <input id='name' type='text' name='name' />
          <ValidationError prefix='Name' field='name' errors={state.errors} />
          <label htmlFor="message">
            Nachricht:
          </label>
          <textarea id='message' name='message' />
          <ValidationError prefix='Nachricht' field='message' errors={state.errors} />
          <input type="checkbox" id='accept'/>
          <ValidationError prefix='' field='accept' errors={state.errors} />
          <label className={styles.datenschutzerklärung} htmlFor="accept"> Ich habe die <Link href="datenschutz" target='_blank' className={styles.datenschutz}>Datenschutzerklärung</Link> zur Kenntnis genommen.</label>
          <br />
          <br />
          <button className={styles.submitButton} type="submit" disabled={state.submitting}>
            Senden
          </button>
        </form>
      </div>
    </>
  )
}