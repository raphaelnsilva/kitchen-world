'use client'
import styles from './breadcrumb.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Breadcrumb({ homeElement, separator, capitalizeLinks }) {
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)
  const pathNamesReplaced = pathNames.map((path) => path.replace(/-/g, ' '))

  return (
    <>
      {paths === '/' ? '' : (
        <div className={styles.containerClasses}>
          <Link href={'/'}>{homeElement}</Link>
          {pathNamesReplaced.length > 0 && separator}
          {pathNamesReplaced.map((link, index) => {
            const href = `/${pathNames.slice(0, index + 1).join('/')}`

            const itemClasses = paths === href ? `${styles.activeClasses}` : '';

            const itemLink = capitalizeLinks ? link[0] + link.slice(1, link.length) : link;

            return (
              <span key={index} className={itemClasses}>
                <Link key={index} className={itemClasses} href={href}>{itemLink}</Link>
                {pathNamesReplaced.length !== index + 1 && separator}
              </span>
            )
          })}
        </div>
      )}
    </>
  )
}

