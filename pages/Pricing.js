import Link from "next/link";
import React from "react"
import { FiCheck, FiX } from 'react-icons/fi';

function Test() {
    const footerStyle = {
        background: 'linear-gradient(purple, var(--color))',
    };
    const features = [ 
        { "feature": "Basic logo", "included": true },
        { "feature": "Basic design", "included": true },
        { "feature": "Upto 3 Pages", "included": true },
        { "feature": "1 revision", "included": true },
        { "feature": "Responsive design", "included": true },
        { "feature": "2 consultation calls", "included": true },
        { "feature": "Technology: (Next.js/React.js)", "included": true },
        { "feature": "Include source code", "included": true },
        { "feature": "Time: 2-4 weeks", "included": true },
        { "feature": "Copywriting", "included": false },
        { "feature": "3 months free maintenance", "included": false } ,
        { "feature": "Detailed code comments", "included": false } ,
    ]

    const midiumplan = [
        { "feature": "Premium Logo", "included": true },
        { "feature": "Premium Design", "included": true },
        { "feature": "Upto 6 Pages", "included": true },
        { "feature": "2 revision", "included": true },
        { "feature": "4 consultation calls", "included": true },
        { "feature": "1 month free maintenance", "included": true },
        { "feature": "Include source code", "included": true },
        { "feature": "Time: 4-6 weeks", "included": true },
        { "feature": "Technology: (Next.js/React.js)", "included": true },
        { "feature": "Detailed code comments", "included": true } ,
        { "feature": "Responsive design", "included": true },
        { "feature": "Copywriting", "included": false },
        { "feature": "3 months free maintenance", "included": false }
    ];
    const highplan = [
        { "feature": "Premium Logo", "included": true },
        { "feature": "Premium Design", "included": true },
        { "feature": "Upto 10 Pages", "included": true },
        { "feature": "3 revision", "included": true },
        { "feature": "8 consultation calls", "included": true },
        { "feature": "3 month free maintenance", "included": true },
        { "feature": "Include source code", "included": true },
        { "feature": "Time: 8-10 weeks", "included": true },
        { "feature": "Detailed code comments", "included": true } ,
        { "feature": "Personalised strategy & advice", "included": true },
        { "feature": "Technology: (Next.js/React.js)", "included": true },
        { "feature": "Responsive design", "included": true },
        { "feature": "Copywriting", "included": true },
        ];

    return (
        <>

            <div class="min-h-screen md:mx-20  mx-7 flex flex-wrap items-center text-xl justify-center">

                <div class="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items-center container mx-auto">
                    <div class="py-12 mt-5 md:mt-0 shadow-md sm:py-12 h-[full] md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[350px]  sm:w-full bg-white z-30">
                        <h1 class="text-gray-500 font-semibold text-xl">Starter</h1>
                        <div class="text-center py-4 px-7">
                            <h1 class="text-gray-700 text-4xl font-black">$125.00</h1>
                            <p class="text-gray-700 ">Suitable for new businesses just getting started</p>


                        </div>
                        <div class="h-px bg-gray-200"></div>
                        <div class="text-center mt-3">
                            <ol className="list-inside">
                                {features.map((item, index) => (
                                    <li key={index} className="mb-4 flex">
                                        {item.included ? (
                                            <FiCheck className="mr-3 h-5 w-5 text-primary dark:text-primary-400" />
                                        ) : (
                                            <FiX className="mr-3 h-5 w-5 text-red-500" />
                                        )}
                                        <span>{item.feature}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <Link href="https://wa.link/7lautn" type="button"  class="w-full text-center mt-6 mb-3 py-2 text-white font-semibold  hover:shadow-xl duration-200 hover:bg-gray-800" style={footerStyle}>Get Started</Link>
                    </div>

                    <div class="py-12 h-[full] sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[350px] sm:w-full bg-purple-500 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  mt-5 md:mt-0 md:shadow-xl lg:shadow-xl xl:shadow-xl text-white">
                        <h1 class="text-purple-200 font-semibold text-xl">Growth</h1>
                        <div class="text-center py-4 px-7">
                            <h1 class="text-white text-4xl font-black">$725.00</h1>
                            <p class=" text-white">Full blown website and business solution for businesses who want to thrive online</p>

                        </div>
                        <div class="h-px bg-purple-400"></div>
                        <div class="text-center mt-3">
                        <ol className="list-inside">
                                {highplan.map((item, index) => (
                                    <li key={index} className="mb-4 flex">
                                        {item.included ? (
                                            <FiCheck className="mr-3 h-5 w-5 text-primary dark:text-primary-400" />
                                        ) : (
                                            <FiX className="mr-3 h-5 w-5 text-red-500" />
                                        )}
                                        <span>{item.feature}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <Link href="https://wa.link/7lautn" type="button" class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-purple-400 hover:shadow-xl text-center duration-200 hover:bg-purple-800">Get Started</Link>
                    </div>

                    <div class="py-12 shadow-md mt-5 md:mt-0 h-[full] sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[350px] sm:w-full bg-white z-30">
                        <h1 class="text-gray-500 font-semibold text-xl">Business</h1>
                        <div class="text-center py-4 px-7">
                            <h1 class="text-gray-700 text-4xl font-black">$365.00</h1>
                            <p class="text-gray-700 ">Suitable for business that want to generate sales and make an impact online</p>

                        </div>
                        <div class="h-px bg-gray-200"></div>
                        <div class="text-center mt-3">
                        <ol className="list-inside">
                                {midiumplan.map((item, index) => (
                                    <li key={index} className="mb-4 flex">
                                        {item.included ? (
                                            <FiCheck className="mr-3 h-5 w-5 text-primary dark:text-primary-400" />
                                        ) : (
                                            <FiX className="mr-3 h-5 w-5 text-red-500" />
                                        )}
                                        <span>{item.feature}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <Link href="https://wa.link/7lautn" type="button"  class="w-full mt-6 mb-3 py-2 text-white font-semibold  hover:shadow-xl text-center duration-200 hover:bg-blue-800" style={footerStyle}>Get Started</Link>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Test