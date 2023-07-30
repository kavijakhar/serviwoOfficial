import Link from 'next/link';
import styles from '../../styles/basicpage/About.module.css'

export default function Projects() {
  return <>  <section id="about" className={styles.about}>

  <h1 className={`${styles.heading} heading !mb-9`}>Our Projects</h1>

  {/* <div className={`${styles.row} mx-20 my-20`}>


    <div className={`${styles.content}    ` }>
      <h3   style={{'line-height': 'inherit'}}>We build Websites that build your business</h3>
      <p>LOGO HI LOGO is spreading faster than fire  now past 3443 business logo designed! WE provide Professional, Premium  & LUXURY 2D/3D logo</p>
      <p>Our team of dedicated designers combines their creativity and expertise to craft visually captivating logos that leave a lasting impression. We understand the power of a well-designed logo in establishing a brands identity and setting it apart from the competition.</p>
      <Link href={"/abouts"}><button className={styles.btn}>read more</button></Link>
    </div>

  </div> */}

  <div className={`${styles.row} flex-nowrap`}>
    <div className="image p-10 md:!w-full bg-[#efe1ef] m-5 shadow-lg ">
      <img src="/projects/house-fam.webp" alt="house-fam project " width={510} />
    </div>

    <div className="image p-10 bg-[#efe1ef] m-5 shadow-lg">
      <img src="/projects/booking.webp" alt="house-fam project" width={510} />
    </div>


    <div className="image p-10 bg-[#efe1ef] m-5 shadow-lg ">
    <div className="image p-10 bg-[#efe1ef] m-5 shadow-lg md:!w-full">
      <img src="/projects/Gadgetst.webp" alt="house-fam project" width={510} />
    </div>
      <img src="/projects/vedessi.webp" alt="house-fam project" width={510} />
    </div>

  </div>

</section></>;
}
