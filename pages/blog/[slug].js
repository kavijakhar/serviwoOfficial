import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import NotFound from "../../components/sections/NotFound";

export default function Slug({ blog, error }) {
  const [date, setdate] = useState("");
  useEffect(() => {
    if (blog) {
      const date = parseISO(blog ? blog.createdAt : "0-00-0000");
      const formattedDate = format(date, "do MMM, yyyy");
      setdate(formattedDate);
    }
  }, [blog]);

  function createMarkup(c) {
    let a = JSON.parse(c);
    return { __html: a };
  }
  return (
    <>
      {blog && (
        <div className="mt-10 my-component">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
              <div className="lg:w-4/6 mx-auto">
                <div
                  className="rounded-lg sm:mx-0 mx-3  overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={blog.image}
                  />
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                      <img className="rounded-xl" src={blog.image} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                        {blog.authorName}
                      </h2>
                      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                        {date}
                      </h2>
                      <div className="w-52 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                      <p className="text-base">
                        Developing the habit of reading blogs is crucial for
                        personal growth. It exposes you to diverse perspectives,
                        insights, and information on various topics.
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className=" sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                      <h1 className="leading-relaxed text-4xl mb-4">
                        {blog.title}
                      </h1>
                    </div>
                    <div className=" sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                      <h3 className="leading-relaxed text-xl mb-4">
                        {blog.description}
                      </h3>
                      <div
                        className="container"
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
      )}
      {error && <NotFound />}
    </>
  );
}
export async function getServerSideProps(context) {
  // Fetch data from external data source
  const { slug } = context.params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_KEY}/blogs/blogdetails?slug=${slug}`
  );
  const blog = await res.json();
  if (blog?.error) {
    return { props: { blog: null, error: blog.error } };
  }

  return { props: { blog, error: null } };
}
