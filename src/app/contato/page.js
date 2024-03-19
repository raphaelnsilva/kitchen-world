import ContactForm from "@/components/contactForm/contactForm"
import styles from './page.module.css'


export default function page() {
  return (
    <div className={styles.contactContainer}>
      <header className={styles.header}>
        <h1>Página de contato</h1>
        <p>Preencha o formulario abaixo e envie sua mensagem, ou entre em contato atravez do email</p>
      </header>
      <div className={styles.content}>
        <ContactForm />
        <div className={styles.contacts}>
          <p>MEIOS DE CONTATO ALTERNATIVOS</p>
          <br />
          <p>raphaelsilva1897@gmail.com</p>
          <p>(11) 98662-3604</p>
        </div>
      </div>
    </div>
  )
}
