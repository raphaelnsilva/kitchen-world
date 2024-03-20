import styles from './page.module.css'

export default function Loading() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.skeletonAboutContent}>
        <div className={`${styles.skeleton} ${styles.skeletonAboutTitle}`}></div>
        <br />
        <div className={`${styles.skeleton} ${styles.skeletonText1}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText2}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText3}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText4}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText5}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText6}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText7}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText8}`}></div>
        <br />
        <div className={`${styles.skeleton} ${styles.skeletonText1}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText2}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText3}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText4}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText5}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText6}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText7}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText8}`}></div>
        <br />
        <div className={`${styles.skeleton} ${styles.skeletonText1}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText2}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText3}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText4}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText5}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText6}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText7}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText8}`}></div>
      </div>
    </section>
  )
}