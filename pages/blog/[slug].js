import React from 'react'
import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns'


export default function Slug({ blog }) {
  const date = parseISO(blog.createdAt);
  const formattedDate = format(date, 'do MMM, yyyy');
  const router = useRouter()
  const { slug } = router.query
  console.log(slug)
  function createMarkup(c) {
    let a = JSON.parse(c)
    return { __html: a };
  }
  return (<>
    <div className='mt-20 my-component'>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg sm:mx-0 mx-3  overflow-hidden" style={{ 'height': '300px' }}>
              <img alt="content" class="object-cover object-center h-full w-full" src={blog.image} />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img className='rounded-xl' src={blog.image} alt="" />
                </div>
                <div class="flex flex-col">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{blog.authorName}</h2>
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{formattedDate}</h2>
                  <div class="w-52 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    Developing the habit of reading blogs is crucial for personal growth. It exposes you to diverse perspectives, insights, and information on various topics. </p>
                </div>
              </div>
              <div className=''>
                <div class=" sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-4xl mb-4">{blog.title}</p>

                </div>
                <div class=" sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-xl mb-4">{blog.description}</p>
                  <div className='container'
                    dangerouslySetInnerHTML={createMarkup(
                      blog.content ? blog.content : ""
                    )}
                  ></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>)
}
export async function getServerSideProps(context) {
  // Fetch data from external data source
  const { slug } = context.params
  const res = await fetch(`http://localhost:3000/api/blogs/blogdetails?slug=${slug}`)
  const blog = await res.json()

  return { props: { blog } }
}