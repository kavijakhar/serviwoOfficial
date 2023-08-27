import React from 'react';

const BenefitsSection = () => {
  // Define an array of benefits to populate the section.
  const benefits = [
    {
      title: 'Sales machine',
      description:
        'With a website that is built to sell, you get your potential leads to call, sign up, or purchase a service from your business. I can turn your website into a sales machine that works 24/7.',
    },
    {
      title: 'Build Credibility',
      description:
        'A website gives you the opportunity to tell potential customers what you are about and why you deserve their trust and confidence.',
    },
    {
      title: 'Look Professional',
      description:
        'Stand out from the rest, tell your customers why they should trust you. The website I build helps in making you look pro.',
    },
    {
      title: 'Tell your story',
      description:
        'I ensure your website design is perfectly aligned with your brand, delivers messages and tells your story and converts them into paying customers.',
    },
    {
      title: 'Fast & Easy to Use',
      description:
        'I make sure your website is fast and easy to navigate so that no visitor leaves your site confused and frustrated and becomes your ambassador.',
    },
    {
      title: 'Deliver Information',
      description:
        'Provide a quick and easy way of giving info to your customers. List your opening hours, contact info, show images of your location or products and use forms to facilitate inquiries.',
    },
  ];

  return (
    <section className="pt-20 mx-16">
      <div className="container mx-auto text-center ">
        
        <h1 className=" text-center font-semibold mb-8 !text-4xl !m-0   text-blue-800 heading ">All You&apos;ll Ever Need is Right Here</h1>
        {/* <h3 className=" text-center font-semibold mb-8 text-2xl mt-4 text-black ">One website many benefits</h3> */}
        <div className='flex flex-wrap mt-10 justify-center'>
            
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 md:max-w-[33.33%]">
          {benefits.slice(3,).map((benefit, index) => (
            <div key={index} className="p-6 max-md:text-3xl  rounded md:shadow-sm md:text-right text-center">
              <h5 className="text-2xl max-md:text-4xl font-semibold mb-4 text-[#7933ff] min-w-fit ">{benefit.title}</h5>
              <p className="text-gray-700 max-md:mx-20">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className='md:max-w-[33.33%]'>
           <img src="/agency-graphic.png" alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 md:max-w-[33.33%]">
          {benefits.slice(0,3).map((benefit, index) => (
            <div key={index} className="p-6 max-md:text-3xl  rounded md:shadow-sm md:text-left text-center">
              <h5 className="text-2xl max-md:text-4xl font-semibold mb-4 text-[#7933ff]">{benefit.title}</h5>
              <p className="text-gray-700  max-md:mx-20">{benefit.description}</p>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
