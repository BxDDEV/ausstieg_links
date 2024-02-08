
import { ValidationError, useForm } from '@formspree/react'
import styles from './style.module.css'

export default function Kontaktformular()
{
  const [state, handleSubmit] = useForm("")
if(state.succeeded) {
  return <p>Thanks</p>
}    
    return (
      <>
      <div style={{textAlign:'center', paddingTop:'2%'}}>
        <h1>Kontakt</h1>
      </div>

      <div className={styles.form}>
      <form onSubmit={handleSubmit}>

      <label htmlFor="email">
        Email:
      </label>
      
      <input  type='email' name='email'/>
      <ValidationError prefix='Email' field='email' errors={state.errors}/>
      <label htmlFor="name">
        Name:
      </label>
      <input id='name' type='text' name='name'/>
      <ValidationError prefix='Name' field='name' errors={state.errors}/>
      <label htmlFor="message">
        Message:
      </label>
      <textarea id='message' name='message'/>
      <ValidationError prefix='Email' field='email' errors={state.errors}/>

      

      <button className={styles.submitButton} type="submit" disabled={state.submitting}>
        Senden
      </button>
      </form>
      </div>




      </>
    )
}