import React, { useState } from 'react';

function FAQ() {
  const footerStyle = {
    background: 'linear-gradient(purple, var(--color))',
  };

  const headingstyle = {
    margin: '2rem',
    paddingTop: '1rem',
    display: 'inline-block',
    fontSize: '2.5rem',
    color: 'var(--color)',
    position: 'relative',
    letterSpacing: '.1.5rem',
    textAlign: 'center',
  };



  const faqs = [
    {
        question: 'What kind of companies and businesses are you working with?',
        answer: 'I have worked for a wide variety of businesses ranging from small start-ups to medium sized established businesses. The industries and business areas I have worked with include coaching, investing, real estate, local businesses, brick and mortar, personal sites and service based entrepreneurs. ',
    },
    {
        question: 'When the site is over, will I be able to update it myself?',
        answer: 'Yes, indeed. I like to give my clients the option of updating their websites. I’ll provide you with all of the necessary training and resources to make changes to your website easily without relying on a developer.',
    },
    {
        question: 'How much time will you take to build a website?',
        answer: 'Actually, the time I need to build a website will vary depending upon the industries and businesses I work with. It also depends on the quality of design, number of pages, different components, and features the customer requires. For small projects usually take 3 weeks and for medium and large projects it can take upto 6-8 weeks to ensure you get the best in class.',
    },
    {
        question: 'How much does it cost to build a website?',
        answer: 'The total cost to build a website depends upon the features and complexity of the project but for a ballpark figure, it can range from $499- $10,000+.  Small sites usually range between $499-2000, medium $3k-5k and for large enterprises can be upwards of $10k.The more the budget is, the more freedom I have, to research and build the best site in your industry.  Since I am a web design freelancer, my rates are usually more affordable than web agencies. Besides, I could also give you personalized attention to your project which you can rarely find with agencies who work on heaps of projects simultaneously.'
    },
    {
        question: 'How does the payment process work?',
        answer: 'Yes! I have made the payment process simpler and affordable. For every website project, the payment is split into 3 parts: 30% deposit to book your slot in my production calendar, 35% in the middle of the project, and 35% at the end of the project.'
    },
    {
        question: 'What costs should I expect other than website design services?',
        answer: 'Hosting: It’s the place where you build website files that are stored on a server connected to the internet 24/7. I recommend Bluehost for hosting if I build on WordPress. Bluehost is the best hosting provider out there for small businesses and personal brands.Shopify, Squarespace and Webflow have their own plans which you can check out on their official sites. Domain: If you purchase your hosting from Bluehost, it’s free for your first year with any hosting plan. Moreover, if I am going to use other CMS besides WP you can buy a domain from godaddy and I will connect to the platform. That’s it!'
    },
    {
        question: 'On what platforms will you create my website?',
        answer: 'It totally depends upon the requirements and size of the project. I am proficient in WordPress, Webflow, Shopify, Woocommerce and Squarespace. All these platforms are affordable, faster and breeze to build and maintain. You’ll be able to update most of the stuff on your site yourself. ',
    },    {
        question: 'Will you help me write content for my website?',
        answer: 'Of course I will help you. As a web design freelancer, copywriting and editing are included in my services. If writing is not something you enjoy I can totally write conversion and SEO optimized copy for your new website. Since you are the expert in your industry, I will have to ask you a lot of questions to write an amazing copy focused on presenting your brand message effectively and position you as an industry expert.',
    },    {
        question: 'Who owns the content on my new website?',
        answer: 'When I transfer ownership of your new website over to you, I also give you the rights to the intellectual property. You own everything.',
    },    {
        question: 'Do you offer ongoing support after the project is over?',
        answer: 'Absolutely. At the end of the web design project, we can discuss how I can continue to support your business so you can stay in your zone of genius – growing your business. I take away all the hassle of maintaining and updating your growing business site.',
    },    {
        question: 'What if I don’t have the money to invest in a new website right now?',
        answer: 'I know investment decisions can be difficult. I run a small business, too! But what if you could get new customers and sales faster and actually make back your investment within a few months?Each month that goes by without new sales is actually another month you bear the loss. Doing the same things that aren’t getting you results is more expensive than taking action and fixing your website.I definitely wouldn’t hesitate to invest considering it can help my business get more sales and you shouldn’t too.',
    },
    {
        question: 'How soon can we get started?',
        answer: 'It totally depends on your launch deadline and my availability to take on a new project that month. We can discuss that on a call if you are ready to move forward with me. Book a “FREE CALL” with me and find out your perfect spot!',
    },

];

const [activeIndex, setActiveIndex] = useState(null);

const toggleFaq = (index) => {
  if (activeIndex === index) {
    setActiveIndex(null);
  } else {
    setActiveIndex(index);
  }
};

return (
    <div className="max-w-7xl mx-auto mb-10 p-8 min-h-screen shadow-xl rounded-lg">
      <div className="flex justify-center">
        <h1 className="font-semibold" style={headingstyle}>
          Frequently Asked Questions
        </h1>
      </div>
      <div className="md:flex">
        <div className="md:w-1/2 pr-4">
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
            <div key={index} className="mb-8">
              <div
                className="cursor-pointer flex justify-between items-center text-white py-9 px-6 rounded-lg"
                style={footerStyle}
                onClick={() => toggleFaq(index)}
              >
                <p className="text-2xl">{faq.question}</p>
                <svg
                  className={`w-6 h-6 transition-transform duration-500 transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {activeIndex === index && (
                <div className="mt-4 py-7 px-6 text-xl bg-gray-200 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="md:w-1/2 md:pl-7">
          {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
            <div key={index} className="mb-8">
              <div
                className="cursor-pointer flex justify-between items-center text-white py-9 px-6 rounded-lg"
                style={footerStyle}
                onClick={() => toggleFaq(index + Math.ceil(faqs.length / 2))}
              >
                <p className="text-2xl">{faq.question}</p>
                <svg
                  className={`w-6 h-6 transition-transform duration-500 transform ${
                    activeIndex === index + Math.ceil(faqs.length / 2) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {activeIndex === index + Math.ceil(faqs.length / 2) && (
                <div className="mt-4 py-7 px-6 text-xl bg-gray-200 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
);
}

export default FAQ;