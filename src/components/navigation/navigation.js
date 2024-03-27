'use client'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import styles from './navigation.module.css'
import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryList, setCategoryList] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  }

  useEffect(() => {
    if (!searchQuery) {
      router.push(pathname)
    } else {
      router.push(`/pesquisa?query=${searchQuery}`)
    }
  }, [router, searchQuery])

  return (
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
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link href='/'>Home</Link></li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link href='/receitas'>Receitas</Link></li>
            <li onClick={() => setCategoryList(!categoryList)}><Link href='#'>Categorias</Link></li>
            <ul className={`${styles.categoryList} ${categoryList ? styles.active : ''}`}>
              <Link href='/categorias?query=receitas%20doces' onClick={() => { setIsMenuOpen(!isMenuOpen); setCategoryList(!categoryList) }}>Receitas doces</Link>
              <Link href='/categorias?query=bebidas' onClick={() => { setIsMenuOpen(!isMenuOpen); setCategoryList(!categoryList) }}>Bebidas</Link>
              <Link href='/categorias?query=receitas%20salgadas' onClick={() => { setIsMenuOpen(!isMenuOpen); setCategoryList(!categoryList) }}>Receitas salgadas</Link>
              <Link href='/categorias?query=caldos' onClick={() => { setIsMenuOpen(!isMenuOpen); setCategoryList(!categoryList) }}>Caldos</Link>
              <Link href='/categorias?query=dicas' onClick={() => { setIsMenuOpen(!isMenuOpen); setCategoryList(!categoryList) }}>Dicas</Link>
            </ul>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link href='/sobre'>Sobre nós</Link></li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link href='/contato'>Contato</Link></li>
          </ul>
        </div>
        <div className={styles.searchBox}>
          <div className={`${styles.searchToggle} ${isSearchOpen ? styles.active : styles.searchToggle}`} onClick={toggleSearch}>
            <div className={styles.cancel}><IoCloseSharp /></div>
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
  )
}

