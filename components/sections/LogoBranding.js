import { BiBulb } from 'react-icons/bi';
import {AiOutlineSmile } from 'react-icons/ai';
import {IoMdGlobe  } from 'react-icons/io';

export default function LogoBranding() {
  return (
    <>
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">

                
              <div>
                <h1 className="text-3xl font-semibold text-gray-700 capitalize lg:text-4xl dark:text-black">
                A Logo .. <br/>Your Brand&apos;s Unique Identity
                </h1>

                <div className="mt-2">
                  <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                  <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-darktext-dark dark:bg-blue-100">
                  <AiOutlineSmile />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-dark">
                  The Face of Your Brand
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-600">
                  A logo is the primary visual representation of your brand. It serves as the face of your business, making it the first point of contact with your audience. A well-designed logo immediately communicates the essence of your brand and sets the tone for all other brand elements.
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-dark dark:bg-blue-100">
                <BiBulb className="w-6 h-6" />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-dark">
                  Creating Lasting Impressions
                  </h1>

                  <p className="mt-3 text-gray-900 dark:text-gray-700">
                  Good logo design creates a lasting impression on your audience. A well-crafted logo can leave a memorable mark in the minds of customers, making it easier for them to recall your brand when they need your products or services.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-dark ">
                <IoMdGlobe className="w-6 h-6" />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-dark">
                  Enhancing Brand Recognition
                  </h1>

                  <p className="mt-3 text-gray-900 dark:text-gray-900">
                  Brand recognition is crucial for business success. A unique and well-designed logo helps your brand stand out amidst competitors. Consistent use of the logo across various platforms and materials helps reinforce your brand&apos;s identity, making it easily recognizable and trustworthy.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
                alt=""
              />
            </div>
          </div>

          <hr className="border-gray-200 my-12 dark:border-gray-100" />

       
        </div>
      </section>
    </>
  );
}
