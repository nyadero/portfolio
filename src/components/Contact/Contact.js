import React from 'react'
import styles from "./Contact.module.css"
import { FaMailBulk } from 'react-icons/fa';
import { useForm, ValidationError } from "@formspree/react";


export default function Contact() {
  const [state, handleSubmit] = useForm("xvoyryao");

  return (
        <div className={styles.contactContainer}>
        {/* left cntainer */}
        <div>
          <h2 className={styles.actionCall}>Lets talk</h2>
          <h2 className={styles.title}>
            Lets talk about your projects or just chat.
          </h2>
          <p className={styles.subTitle}>
            Fill the form and send in your queries. I will respond as soon as I
            can. Alternatively, you can reach out to me at my email address.
          </p>
        </div>

        {/* contact form */}
        <div className={styles.contactFormContainer}>
           {state.succeeded &&
               <p>Thanks for your submission!</p>
           }
          <form onSubmit={handleSubmit}>
            <h1 className={styles.header}>Send a message</h1>

            <div className={styles.formControl}>
                <label>Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Full names"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formControl}>
            <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="email@xyz.com"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formControl}>
            <label>Subject</label>
              <input
                name="subject"
                placeholder="subject"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formControl}>
            <label>Message</label>
              <textarea
              rows="5"
                name="message"
                placeholder="message"
                className={styles.formInput}
                required
              />
            </div>

            <button className={styles.sendMail} type="submit" disabled={state.submitting}>
              Send <FaMailBulk className={styles.mailIcon}/>
            </button>

      <ValidationError errors={state.errors} />
 
          </form>
        </div>
      </div>
  )
}
