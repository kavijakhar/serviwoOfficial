import React from 'react'
import styles from '../../styles/basicpage/Team.module.css'
import Teamcard from '../cards/Teamcard'
export default function Team() {
  return (
    <section id="team" className={styles.team}>

    <h1 className="heading">our team</h1>
    
    <div className={styles.row}>
    
   <Teamcard/>
    
    </div>
    
    
    </section>
  )
}
