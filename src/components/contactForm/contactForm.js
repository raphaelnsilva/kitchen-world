'use client'
import styles from './contactForm.module.css'
import { useState } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../lib/firebaseConfig'
import ReCAPTCHA from 'react-google-recaptcha'
import DOMPurify from 'dompurify'
import { FaCheckCircle } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";

async function addDataToFirestore(name, email, message) {
  try {
    if (!name || !email || !message || !validateEmail(email)) {
      throw new Error('Dados inválidos')
    }

    const sanitizedMessage = sanitizeMessage(message)

    await addDoc(collection(db, 'Mensagens'), {
      name: name.trim(),
      email: email.trim(),
      message: sanitizedMessage,
      createdAt: Timestamp.now()
    })
    return true;
  } catch (error) {
    console.error('Erro ao adicionar documento ', error)
    return false
  }
}

function sanitizeMessage(message) {
  const sanitizedHTML = DOMPurify.sanitize(message)
  const allowedCharactersRegex = /[^\w\s.,?!()-]/g
  const sanitizedMessage = sanitizedHTML.replace(allowedCharactersRegex, '')
  return sanitizedMessage
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [myAlert, setMyAlert] = useState('')
  const [recaptchaValidated, setRecaptchaValidated] = useState(false)

  const [nameBorderError, setNameBorderError] = useState('')
  const [nameError, setNameError] = useState('')

  const [emailBorderError, setEmailBorderError] = useState('')
  const [emailError, setEmailError] = useState('')

  const [messageBorderError, setMessageBorderError] = useState('')
  const [messageError, setMessageError] = useState('')

  const [recaptchaError, setRecaptchaError] = useState('')

  const verificationForm = () => {
    if (!name) {
      setNameBorderError('#FF8888')
      setNameError('Nome é obrigatório*')
    } else {
      setNameBorderError('')
      setNameError('')
    }

    if (!email) {
      setEmailBorderError('#FF8888')
      setEmailError('Email é obrigatório*')
    } else {
      setEmailBorderError('')
      setEmailError('')
    }

    if (!message) {
      setMessageBorderError('#FF8888')
      setMessageError('Mensagem é obrigatória*')
    } else {
      setMessageBorderError('')
      setMessageError('')
    }

    if (!recaptchaValidated) {
      setRecaptchaError('Validação de ReCAPTCHA obrigatória*')
    } else {
      setRecaptchaError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name && email && message && recaptchaValidated) {
      setLoading(true)

      const added = await addDataToFirestore(name, email, message)

      if (added) {
        setName('')
        setEmail('')
        setMessage('')
        setMyAlert('Mensagem enviada com sucesso!')
        setLoading(false)
      }
    }
    setLoading(false)
    verificationForm()
  }

  const onChange = () => {
    setRecaptchaValidated(true)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Mensagem</h1>
      <p>Preencha o formulario para enviar sua mensagem</p>
      <br />
      <input
        className={styles.input}
        style={{ borderColor: nameBorderError }}
        type="text"
        placeholder='Digite seu nome...'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameError && <p className={styles.inputError}>{nameError}</p>}
      <br />
      <input
        className={styles.input}
        style={{ borderColor: emailBorderError }}
        type="email"
        placeholder='Digite seu email...'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p className={styles.inputError}>{emailError}</p>}
      <br />
      <textarea
        placeholder='Escreva aqui sua mensagem...'
        className={styles.input}
        style={{ borderColor: messageBorderError }}
        cols="30" rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {messageError && <p className={styles.inputError}>{messageError}</p>}
      <br />
      <ReCAPTCHA
        sitekey="6LcpX50pAAAAAE4H0bG_3D06DQTnZq9L3OndRm6S"
        onChange={onChange}
      />
      {recaptchaError && <p className={styles.inputError}>{recaptchaError}</p>}
      <br />
      {!loading && <button className={`${recaptchaValidated ? styles.submitBtn : styles.submitBtnDisabled}`}>Enviar</button>}
      {loading && <button className={styles.submitBtn}>Aguarde...</button>}
      <br />
      {myAlert && (
        <div className={styles.myAlert}>
          <FaCheckCircle />
          {myAlert}
        </div>
      )}
    </form>
  )
}
