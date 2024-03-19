import styles from './page.module.css';

export default function Loading() {
  // Você pode adicionar qualquer interface dentro de Loading, incluindo um Skeleton.
  return (
    <>
      <div className={styles.skeletonHeader}>
        <div className={`${styles.skeleton} ${styles.skeletonHeaderTitle}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonHeaderDescription}`}></div>
      </div>

      <div className={styles.posts}>
        {[... new Array(18)].map((index) => (

          <div key={index} className={styles.cardLink}>
            <div className={`${styles.skeleton} ${styles.skeletonCardImg}`}></div>
            
            <div className={styles.cardContent}>
              <div className={`${styles.skeleton} ${styles.skeletonCardCategory}`}></div>
              <div className={`${styles.skeleton} ${styles.skeletonCardTitle}`}></div>
              <div className={`${styles.skeleton} ${styles.skeletonCardTitle}`}></div>
              <div className={`${styles.skeleton} ${styles.skeletonCardTitle}`}></div>
            </div>
          </div>

        ))}
      </div>

    </>
  );
}