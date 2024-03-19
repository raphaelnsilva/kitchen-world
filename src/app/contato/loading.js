import React from 'react'
import styles from './page.module.css'

export default function loading() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.skeletonHeader}>
        <div className={`${styles.skeleton} ${styles.skeletonHeaderTitle}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonHeaderDescription}`}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.skeletonForm}>
          <div className={`${styles.skeleton} ${styles.skeletonFormH1}`}></div>
          <div className={`${styles.skeleton} ${styles.skeletonFormP}`}></div>
          <br />
          <div className={`${styles.skeleton} ${styles.skeletonFormInput}`}></div>
          <br />
          <div className={`${styles.skeleton} ${styles.skeletonFormInput}`}></div>
          <br />
          <div className={`${styles.skeleton} ${styles.skeletonFormTextarea}`}></div>
          <br />
          <div className={`${styles.skeleton} ${styles.skeletonFormCaptcha}`}></div>
          <br />
          <div className={`${styles.skeleton} ${styles.skeletonFormBtn}`}></div>
        </div>
        <div className={styles.skeletonContactsContainer}>
          <div className={`${styles.skeleton} ${styles.skeletonContacts}`}></div>
          <br />
          <div className={`${styles.skeleton} ${styles.skeletonContacts}`}></div>
          <br />
          <div className={`${styles.skeleton} ${styles.skeletonContacts}`}></div>
        </div>
      </div>
    </div>
  )
}
