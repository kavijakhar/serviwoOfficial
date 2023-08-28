import React from 'react';
import { BsChevronRight } from 'react-icons/bs';


const WebDesignProcess = () => {
    const processData=[
    {
        title:"Consultation",
        description:"We will hop on as many consultation calls as it takes and discuss your business requirements, pain points, struggles and goals. I will diagnose your main problems and come up with the exact solution  ",
    },
    {
        title:"Strategy",
        description:"I will develop a growth and website strategy and explain it to you to confirm if that works for you. We will then move ahead to design your website with a solid success strategy. ",
    },
    {
        title:"Design",
        description:"I will get your design preferences and research your competition. I will then design your dream website while getting your approval at each step so that your website doesn’t come as a surprise.  ",
    },
    {
        title:"Development",
        description:"Once your design is finalized and you have a visual of your website, I will start building it on a suitable platform for ease of use and scalability, then we are ready to celebrate.🎉",
    },
    ]
    const footerStyle = {
      background: 'linear-gradient(purple, var(--color))',
  };
  return (
<>
        <div className="flex flex-col items-center justify-centerspace-y-4 !mx-16 mb-20">
            <h2 className='heading '> 
            web design Process
            </h2>
          <ol className="flex  max-md:flex-wrap items-center p-3 space-x-2 max-md:justify-around  text-sm font-medium text-center text-gray-500 bg-white rounded-lg  sm:text-base sm:p-4 sm:space-x-4">
            {processData&&processData.length!==0&&processData.map((list,i)=>{
          return  <li key={i} className={`flex items-center ${i+1===1?"text-blue-600":"text-gray-500"} max-md:w-[40%] my-10`}>
              <span className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border ${i+1===1?"border-blue-600":"border-gray-500"}  rounded-full shrink-0`}>
                {i+1}
              </span>
              <div className='text-left ml-4'>
                <div className='pb-4 text-blue-800'>

            {list.title}
                </div>
                <div className='!text-gray-500'>
{list.description}

                </div>
              </div>
            {i+1!==4&&  <BsChevronRight className=" h-3 ml-2 sm:ml-4 text-7xl w-14" />}
            </li>

            })}
          </ol>
        </div>
          <div className='mx-20 rounded p-10 flex flex-col justify-center align-middle text-center items-center space-y-4  border-double  border-4' style={footerStyle}>

            <h3 className='text-[#ffffff] w-1/2 tracking-wider text-2xl'>
            Big agency like quality with the personalized attention of an expert
            </h3>
            <p className='w-2/3 text-white tracking-wide text-xl'>
            Being an expert in coaching business web design, I am more affordable than big agencies while still delivering high quality results and undivided attention. You get my personalized expertise and suggestions on what works best for your business.
            </p>
          </div>
 </>
    
  );
};

export default WebDesignProcess;
