'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './navigation.module.css'
import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  }

  useEffect(() => {
    if (!searchQuery) {
      router.push('/')
    } else {
      router.push(`/search?query=${searchQuery}`)
    }
  }, [router, searchQuery])

  return (
    <>
      <nav className={`${styles.navContainer} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.navbar}>
          <div className={styles.sidebarOpen} onClick={toggleMenu}><HiMenuAlt2 /></div>
          <span className={`${styles.logo} ${styles.navLogo}`}>
            <Link href='/'>
              <Image src='/brand.png' alt={'brand'} width={40} height={40} />
              <p>Mundo da<br />Cozinha</p>
            </Link>
          </span>
          <div className={styles.menu}>
            <div className={styles.logoToggle}>
              <span className={styles.logo}>
                <Link href='/' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <Image src='/brand.png' alt={'brand'} width={30} height={30} />
                  <p>Mundo da<br />Cozinha</p>
                </Link>
              </span>
              <div className={styles.siderbarClose} onClick={toggleMenu}><IoCloseSharp /></div>
            </div>
            <ul className={styles.navLinks}>
              <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link href='/'>Página inicial</Link></li>
              <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link href='/posts'>Receitas</Link></li>
              {/* <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link href='/'>Categorias</Link></li>
              <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link href='/about'>Sobre nós</Link></li> */}
            </ul>
          </div>
          <div className={styles.searchBox}>
            <div className={`${styles.searchToggle} ${isSearchOpen ? styles.active : styles.searchToggle}`} onClick={toggleSearch}>
              <div className={styles.cancel} onClick={() => setSearchQuery('')}><IoCloseSharp /></div>
              <div className={styles.search}><IoSearch /></div>
            </div>
            <div className={styles.searchField}>
              <input
                type="text"
                placeholder='Search...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <IoSearch />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

