import React, { useEffect, useRef, useState } from "react";
import { format, parseISO } from "date-fns";
import NotFound from "../../components/sections/NotFound";
import { FaFacebook, FaInstagram, FaRegShareFromSquare } from 'react-icons/fa6';
import { FaWhatsapp, FaExpand } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

export default function Slug({ blog, error }) {
  const [date, setdate] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [blogUrl, setBlogUrl] = useState("");
  const dropdownRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  // Generate the blog URL only on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBlogUrl(window.location.href);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
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

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Function to handle click outside of dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Add and clean up event listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getAuthorInitials = (name) => {
    if (!name) return "";
    const nameArray = name.split(" ");
    const initials = nameArray.map(n => n.charAt(0)).join("");
    return initials.toUpperCase();
  };

  return (
    <>
      {blog && (

        <article className="flex">
          <div className="container mx-auto sm:px-32 px-7 py-44">
            <div className="flex justify-between">
              <div className="flex items-center mb-4 ">
                <div className="flex items-center mr-4">
                  <div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden  rounded-full bg-blue-600">
                    <span className="font-medium text-white dark:text-white text-2xl">{getAuthorInitials(blog.authorName)}</span>
                  </div>
                  <span className="ml-2 text-gray-600 text-xl font-bold">{blog.authorName}</span>
                </div>
                <div className="border-2 border-gray-500 h-8 mx-4"></div>
                <div className="text-gray-700 text-xl">{date}</div>
                <div className="border-2 border-gray-500 h-8 mx-4"></div>
                <div className="text-gray-700 text-xl">1 min read</div>
              </div>
              <div className="mt-5 mr-20 relative" ref={dropdownRef}>
                <button onClick={toggleDropdown} className="flex items-center">
                  <FaRegShareFromSquare size={20} className="text-gray-500 text-xl cursor-pointer" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                    <div className="py-1">
                      <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blogUrl)}`} target="_blank" rel="noopener noreferrer" className="flex px-4 py-2 text-gray-800 hover:bg-gray-200">
                        <span><FaWhatsapp size={15} className="mx-2" /></span> WhatsApp
                      </a>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`} target="_blank" rel="noopener noreferrer" className="flex px-4 py-2 text-gray-800 hover:bg-gray-200">

                        <span><FaFacebook size={15} className="mx-2" /></span> Facebook
                      </a>
                      <a href={`https://www.instagram.com/?url=${encodeURIComponent(blogUrl)}`} target="_blank" rel="noopener noreferrer" className="flex px-4 py-2 text-gray-800 hover:bg-gray-200">

                        <span><FaInstagram size={15} className="mx-2" /></span> Instagram
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{blog.title}</h1>
            <p className="my-2 text-xl">
              {blog.description}
            </p>
            <div className="my-7 relative flex">
              <img
                src={blog.image}
                className={`rounded-lg ${expanded ? 'w-full h-full' : 'w-1/2 h-1/2'}`}
                style={{ transition: 'all 0.3s ease' }}
              />
              {expanded && (
                <RxCross1
                  size={24}
                  className="absolute top-2 right-2 text-white text-xl cursor-pointer hover:text-gray-500"
                  onClick={() => setExpanded(false)}
                />
              )}
              {!expanded && (
                <FaExpand
                  size={18}
                  className="top-2 right-2 ml-3 text-gray-800 text-xl cursor-pointer hover:text-gray-300"
                  onClick={toggleExpand}
                />
              )}
            </div>
            <div className="text-gray-800 leading-relaxed">
              <div className="mb-4 text-xl py-4 my-component" dangerouslySetInnerHTML={createMarkup(
                blog.content ? blog.content : ""
              )}></div>
            </div>
          </div>
        </article>
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
