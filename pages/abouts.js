import React, { useEffect } from 'react';
import styles from '../styles/basicpage/About.module.css';
import Link from 'next/link';



const Abouts = () => {

  const scrollToSection = (id, event) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetScroll = rect.top + scrollTop - 20; // Adjust the value as needed

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };
  


  return (
    <>
      <div className="p-8 rounded-lg shadow-md mx-10 mt-40" style={{ overflow: 'hidden' }}>
        <h1 className="text-5xl text-gray-600 font-bold mb-6">About Us</h1>

        <div className="flex items-center mb-6">
          <img className="w-30 h-28 rounded-full mr-4" src="https://static.vecteezy.com/system/resources/thumbnails/000/622/795/small/23-22.jpg" alt="Author" />
          <div>
            <p className="text-gray-700 font-medium text-2xl">Author: Serviwo Team</p>
            <p className="text-gray-500 text-xl">Date: may 15, 2022</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/3">
            <hr className="border-t-2 border-gray-400 mb-6" />
            <div className="space-y-4">
              <h2 className="text-4xl text-gray-700 font-bold">On this page</h2>
              <ul className="list-disc list-inside text-2xl space-y-6">
                <li><a href="#" onClick={(e) => scrollToSection("mission" , e)}>Our Mission</a></li>
                <li><a href="#" onClick={(e) => scrollToSection("help" , e)}>How Do We Help You?</a></li>
                <li><a href="#" onClick={(e) => scrollToSection("values" , e)}>Our Values</a></li>
                <li><a href="#" onClick={(e) => scrollToSection("story" , e)}>Our Story</a></li>
                <li><a href="#" onClick={(e) => scrollToSection("team" , e)}>Our Team</a></li>
                <li><a href="#" onClick={(e) => scrollToSection("research" , e)}>Our Research</a></li>
                <li><a href="#" onClick={(e) => scrollToSection("talking" , e)}>We&apos;re Talking To You...</a></li>
                <li><a href="#" onClick={(e) => scrollToSection("funded" , e)}>How We&apos;re Funded</a></li>
              </ul>
            </div>
          </div>
          <div className=" md:w-1/2 w-auto">

            <h2 className="text-4xl font-bold text-gray-700">Welcome to Our Web Development Services</h2>
            <p className="text-gray-700 text-2xl leading-loose mb-4">
              At our company, we&apos;re dedicated to providing top-notch web development services that meet your needs. Whether you&apos;re looking to build a stunning website or a powerful web application, our team of skilled developers is here to bring your vision to life.
            </p>
            <div id="mission">
              <h2 className="text-3xl font-bold text-gray-700" >Our Mission</h2>
              <p className="text-gray-700 text-xl leading-loose mb-4">
                At Serviwo, our mission is to transform your digital aspirations into reality. Through innovative web development solutions, we strive to empower businesses and individuals to harness the full potential of the online world. Our commitment lies in crafting captivating, functional, and user-centric websites that not only reflect your vision but also resonate with your target audience. With a blend of cutting-edge technologies and creative prowess, we are dedicated to being the driving force behind your online success.
              </p>

            </div>

            <div id="help">
              <h2 className="text-3xl font-bold text-gray-700" >How Do We Help You?</h2>
              <p className="text-gray-700 text-xl leading-loose mb-4">
                We understand that navigating the digital landscape can be overwhelming. That&apos;s where Serviwo comes in. We are your partners in turning challenges into opportunities. Our web development services encompass a holistic approach – from conceptualizing and designing to coding and optimizing. Whether you&apos;re a startup looking for a striking online presence or an established business aiming to revamp your website, Serviwo tailors solutions to meet your specific needs. With a keen eye on user experience and a passion for innovation, we&apos;re here to make your digital journey seamless and rewarding.
              </p>
            </div>



            <div id="values">

              <h2 className="text-3xl font-bold text-gray-700" >Our Values</h2>
              <p className="text-gray-700 text-xl leading-loose mb-4">
                Integrity, innovation, and collaboration form the cornerstone of our values at Serviwo. We believe in transparent communication, adhering to the highest standards of quality and ethics. Innovation drives us to explore new horizons of web development, ensuring you stay ahead in a rapidly evolving digital landscape. Through collaboration, both within our team and with you, we forge partnerships that lead to exceptional outcomes.
              </p>
            </div>


            <div id="story">

              <h2 className="text-3xl font-bold text-gray-700" >Our Story</h2>
              <p className="text-gray-700 text-xl leading-loose mb-4">
                Founded with a vision and fueled by passion, Serviwo was established with the aim of reshaping the online world. Our journey began with a small team of dedicated individuals who shared a common goal – to make the internet a more engaging and functional space. Over the years, our story has been one of growth, learning, and continuous adaptation. Today, we take pride in our diverse portfolio and the positive impact we&apos;ve had on businesses across various industries.
              </p>
            </div>

            <div id="team">

              <h2 className="text-3xl font-bold text-gray-700">Our Team</h2>
              <p className="text-gray-700 text-xl leading-loose mb-4">
                Behind every line of code and every pixel perfected, there&apos;s a team of skilled professionals at Serviwo. Our team brings together a blend of expertise in web development, design, and user experience. With a passion for staying updated with the latest industry trends and a commitment to delivering excellence, Serviwo is not just a service provider – we&apos;re your partners in success.
              </p>
            </div>

            <div id="research">

              <h2 className="text-3xl font-bold text-gray-700" >Our Research</h2>
              <p className="text-gray-700 text-xl leading-loose mb-4">
                We stay up-to-date with the latest industry trends and technologies to ensure that our clients receive cutting-edge solutions. Our research-driven approach enables us to provide effective and modern web development services.
              </p>
            </div>
            <div id="talking">

              <h2 className="text-3xl font-bold text-gray-700" >We&apos;re Talking To You...</h2>
              <p className="text-gray-700 text-xl leading-loose mb-4">
                If you&apos;re a business owner, entrepreneur, or individual looking to establish a strong online presence, we&apos;re here to listen to your ideas and turn them into reality. Your success is our motivation.
              </p>
            </div>
            <div id="funded">

              <h2 className="text-3xl font-bold text-gray-700" >How We&apos;re Funded</h2>
              <p className="text-gray-700 text-xl leading-loose mb-4">
                We&apos;re funded through a combination of client projects, partnerships, and investments. Our sustainable business model allows us to focus on delivering high-quality web development services without compromising on excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abouts;
