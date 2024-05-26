import Container from '@/components/Container';
import { WEB3_FORM } from '@/constants';
import styles from '@/styles/Contact.module.css';
import Link from 'next/link';
import { ReactElement, useState } from 'react';

/**
 * Contact form using web3 forms that submits to pawnorder.proton.me.
 * 
 * @param   {object}       props        The props of the Contact page.
 * @param   {string}       props.apiKey The apiKey from the environment.
 * @returns {ReactElement}              Returns the Contact page.
 */
export default function Contact({ apiKey }) {
  const [result, setResult] = useState('');

  /**
   * Function used to submit the contact form to the gracious Cato.
   * @see process.env.WEB3FORMAPI
   * @param {Event} e The submit event from the HTML.
   */
  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append('access_key', apiKey);

    const response = await fetch(WEB3_FORM, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data?.success) {
      e.target.reset();
    } else {
      setResult(data?.message);
    }
  }
  return (
    <Container>
      <section>
        <h1 className={styles.heading}>
          Contact <del>Us</del> <ins>Me</ins>
        </h1>
        <p className={styles.tagline}>
          At Paw & Order, we gladly assume the worst of those who have wronged
          you. We are here to help everyone realize that they are wrong. Contact us today.
        </p>
      </section>
      <section>
        <form onSubmit={onSubmit} className={styles.contact}>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            <abbr title="Mention 'Maya and Captain' for a 1% discount">
              Message
            </abbr>
            <textarea name="message" required />
          </label>

          <button type="submit">Contact Me</button>
        </form>
        {result && <span>{result}</span>}
      </section>
      <section>
        <p>Also see:</p>
        <Link href="/pricing">Pricing</Link>
      </section>
    </Container>
  );
}

export async function getStaticProps() {
  return { props: { apiKey: process.env.WEB3FORMAPI } };
}
