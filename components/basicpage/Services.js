import React from "react";
import { RiSeoFill } from "react-icons/ri";
import { BsChatSquareDots, BsWallet2, BsFunnelFill } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiTaichigraphics, SiXdadevelopers } from "react-icons/si";
import { PiIdentificationCardThin } from "react-icons/pi";
import styles from '../styles/services.module.css'
import { useState } from "react";
const Services = () => {
  const serviceBlocksData = [
    {
      icon: RiSeoFill,
      title: "SEO (Search Engine Optimization) Services",
      description: "Get noticed by your target audience with our result-driven SEO strategies. We optimize your website to rank higher on search engines, attracting organic traffic and boosting your online visibility. Stay ahead of the competition with our data-driven approach and watch your website climb the search rankings."
    },
    {
      icon: BsChatSquareDots,
      title: "Social Content",
      description: "Unlock the power of social media with our compelling content strategies. We curate and create captivating posts that drive engagement, build brand awareness, and foster meaningful connections with your audience. From eye-catching visuals to engaging copy, our social content will help you stand out in the digital landscape and drive real results for your business"
    },
    {
      icon: SiTaichigraphics,
      title: "Graphic Designs",
      description: "Our expert graphic designers bring creativity and innovation to life with stunning visuals. From eye-catching logos to engaging marketing materials, we craft captivating designs that leave a lasting impression. Whether you need branding, packaging, or promotional graphics, our team ensures your brand stands out in the crowded market."
    },
    {
      icon: PiIdentificationCardThin,
      title: "Brand Identity",
      description: "Our expert team specializes in creating captivating brand identities that resonate with your target audience. From logos to color palettes, we ensure your brand stands out in the competitive market, leaving a lasting impression on customers. Elevate your brand presence and build trust with our top-notch brand identity solutions."
    },
    {
      icon: BsWallet2,
      title: "Website Designs",
      description: "Create an online presence that speaks volumes about your business. Our website designs are user-friendly, visually appealing, and optimized for all devices. We combine aesthetics with functionality to deliver seamless user experiences, keeping your visitors engaged and converting them into loyal customers"
    },
    {
      icon: SiXdadevelopers,
      title: "Website Development",
      description: "Leave the technicalities to us and focus on what matters most – your business goals. Our skilled developers build responsive and scalable websites that match your unique requirements. With cutting-edge technologies and a focus on performance, your website will provide a seamless digital experience to your users."
    },
  ];
  return (
    <div
      id="Services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white max-md:mx-0"
    >
      <div className=" md:!mx-24 max-sm:m-28 max-md:mx-44  m px-4">
        {/* Heading start */}
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black heading">
            What We Do
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{
                fill: "transparent",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
          </svg>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Empower Your Brand&#39;s Potential: Unleash the Power of Creativity,
            Technology, and Strategy. Let Us Handle Your Graphic Designs,
            Website Designs, SEO, Website Development, and Engaging Social
            Content. Elevate Your Brand&#39;s Identity and Accelerate Your
            Success Today!
          </p>
        </header>
        {/* End heading */}
        {/* row */}
        <div className="flex flex-wrap flex-row -mx-4 text-center">
      {serviceBlocksData.map((block, index) => (
        <ServiceBlock
          key={index}
          icon={block.icon}
          title={block.title}
          description={block.description}
        />
      ))}
    </div>
        {/* end row */}
      </div>
    </div>
  );
};

const ServiceBlock = ({ icon, title, description }) => {
  const IconComponent = icon;
  const [cardtoggle, setcardtoggle] = useState(false)

  return (
    <div
      className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp "
      data-wow-duration="1s"
      style={{
        visibility: "visible",
        animationDuration: "1s",
        animationName: "fadeInUp",
      }}
      onMouseOver={()=>{setcardtoggle(true)}} onMouseOut={()=>{setcardtoggle(false)}}
    >
      <div className="py-8 px-12 mb-12 bg-white border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 shadow-lg">
        <div className={`inline-block text-gray-900 mb-45  ${cardtoggle?styles.toggle:"" } ${styles.fa}`} >
          {/* icon */}
          <IconComponent className={`text-7xl text-[#ff4d1c]`} />
        </div>
        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          {title}
        </h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Services;
