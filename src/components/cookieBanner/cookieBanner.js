'use client'
import React from 'react'
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useState, useEffect } from 'react';
import styles from './cookieBanner.module.css'

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);
  const [showPopup, setShowPopup] = useState(true); 

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null)

    setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])


  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    window.gtag("consent", 'update', {
      'analytics_storage': newValue
    });

    setLocalStorage("cookie_consent", cookieConsent)
  }, [cookieConsent]);

  const handleClick = (consent) => {
    setCookieConsent(consent)
    setShowPopup(false)
  }

  return (
    <>
      {showPopup && (
        <div className={styles.popupContainer}>
          <p className={styles.popupText}>
            Ao clicar em “Aceitar todos os cookies”,
            você concorda com o armazenamento de cookies
            no seu dispositivo para melhorar a navegação
            no site, analisar o uso do site e ajudar em
            nossos esforços de marketing.
          </p>
          <div className={styles.popupBtns}>
              <button className={styles.declineButton} onClick={() => handleClick(false)}>Rejeitar todos</button>
              <button className={styles.allowButton} onClick={() => handleClick(true)}>Aceitar todos os cookies</button>
          </div>
        </div>
      )}
    </>
  )
}
