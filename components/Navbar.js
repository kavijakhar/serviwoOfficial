import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  const [dropdownToggled, setdropdownToggle] = useState(false);
  const [background, setbackground] = useState(false)



  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setbackground(true)
    } else {
      setbackground(false)
    }
  }

  const navToggle = () => {
    if (dropdownToggled) {
      setdropdownToggle(false)
    } else {
      setdropdownToggle(true)
    }
  }


  if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeBackground)
    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName(styles.nav);
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains(`${styles.toggle}`)) {
            openDropdown.classList.remove(`${styles.toggle}`);
            setdropdownToggle(false)
          }
        }
      }
    }
  }
  function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
  
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    }
  }
  
  return (
    <>
      <div className={`${styles.nav} ${dropdownToggled ? styles.toggle : ""} ${background || pathname !== '/' ? styles.active : ""} `} >
        <div>
          <Link href="/"  >
            <Image src='/Untitled design.svg' width={350} height={50} className={styles.navlogo} style={{ 'marginTop': '6px' }} alt="icon"></Image>
          </Link>
        </div>
        <div className={styles.navrow}>
          {pathname === "/" ?
            <nav>
              <ul>
                <li>
                  <a type='button' onClick={() => smoothScroll("home")} className='cursor-pointer'>Home</a>
                  <a type='button' onClick={() => smoothScroll("about") }  className='cursor-pointer'>About</a>
                  <Link href="/services">Services</Link>
                  <a type='button' onClick={() => smoothScroll("blogs")}  className='cursor-pointer'>Blogs</a>
                  <Link href="/logos">Logo</Link>
                  <Link href="/joinUs">Join Us</Link>
                </li>
              </ul>
            </nav> :

            <nav>
              <ul>
                <li>
                  <Link href="/" className='hover:text-gray-300'>Home</Link>
                  <Link href="/aboutUs" className='hover:text-gray-300'>About</Link>
                  <Link href="/services" className='hover:text-gray-300'>Services</Link>
                  <Link href="/allblogs" className='hover:text-gray-300'>Blogs</Link>
                  <Link href="/logos" className='hover:text-gray-300'>Logo</Link>
                  <Link href="/joinUs" className='hover:text-gray-300'>Join Us</Link>
                </li>
              </ul>
            </nav>
          }
        </div>
        <div className={`${styles.navburgur} dropbtn`} onClick={navToggle}  >
          <div className={`dropbtn ${styles.line1}`} onClick={navToggle}></div>
          <div className={`dropbtn ${styles.line2}`} onClick={navToggle}></div>
          <div className={`dropbtn ${styles.line3}`} onClick={navToggle}></div>
        </div>
      </div>

    </>
  )
}
