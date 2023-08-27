import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
export default function JoinUs() {
  const router=useRouter()
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pincode: "",
    designation: "",
  });
  const changeCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log("credentials", credentials);
  }, [credentials]);
  const OnSubmit = async (event) => {
    event.preventDefault();
    let oid = Math.floor(Math.random() * Date.now());
    let data = {
      email: credentials.email,
      name: credentials.name,
      address: credentials.address,
      pincode: credentials.pincode,
      phone: credentials.phone,
      designation: credentials.designation,
    };
    const responce = await fetch(`${process.env.NEXT_PUBLIC_AUTH_KEY}/joinus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });
    let json = await responce.json();

    //checking json resoponse
    if (json.success) {
      setCredentials({
        name: "",
        email: "",
        address: "",
        phone: "",
        pincode: "",
        designation: "",
      });
      toast.success(`🦄 Your Details have been successfully Submited. `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      router.push("/")
    } else {
      toast.error(`🦄 ${json.error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      {" "}
      <div className="container m-auto mt-40 mb-40">
        <h1 className="font-bold text-3xl my-8 text-center">Join Us</h1>
        <h2 className="font-bold text-xl my-4">Details</h2>
        <div className="mx-auto ">
          <form action="post" onSubmit={OnSubmit}>
            <div className="px-4  md:w-3/4 sm:w-full lg:w-3/4   flex justify-between ">
              <div className="w-[32vh] md:w-[42vh] mb-4 ">
                <label
                  htmlFor="name"
                  className="leading-7 text-lg text-gray-600"
                >
                  name
                </label>
                <input
                  required
                  type="name"
                  value={credentials.name}
                  onChange={changeCredentials}
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="w-[32vh] md:w-[42vh] mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-lg text-gray-600"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={credentials.email}
                  onChange={changeCredentials}
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>{" "}
            </div>
            <div className=" px-4  md:w-3/4 sm:w-full lg:w-3/4  mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-lg text-gray-600"
              >
                Address
              </label>
              <textarea
                required
                id="address"
                value={credentials.address}
                onChange={changeCredentials}
                name="address"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="px-4  md:w-3/4 sm:w-full lg:w-3/4  flex justify-between ">
              <div className="w-[32vh] md:w-[42vh]mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-lg text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  value={credentials.phone}
                  onChange={changeCredentials}
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className=" w-[32vh] md:w-[42vh] mb-4">
                <label
                  htmlFor="pincode"
                  className="leading-7 text-lg text-gray-600"
                >
                  Pincode
                </label>
                <input
                  type="text"
                  required
                  value={credentials.pincode}
                  onChange={changeCredentials}
                  id="pincode"
                  name="pincode"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="px-4 w md:w-3/4 sm:w-full lg:w-3/4  flex justify-between ">
              <div className=" w-[32vh] md:w-[42vh] mb-4">
                <label
                  htmlFor="designation"
                  className="leading-7 text-lg text-gray-600"
                >
                  Designation
                </label>
                <input
                  type="text"
                  required
                  id="designation"
                  name="designation"
                  value={credentials.designation}
                  onChange={changeCredentials}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-4 w md:w-3/4 sm:w-full lg:w-3/4  flex justify-between ">
              <div className=" w-[32vh] md:w-[42vh] mb-4 text-lg">
                <button  type="submit" class="hover:bg-transparent bg-blue-500 hover:text-blue-700 font-semibold text-white py-2 px-4 border hover:border-blue-500 border-transparent rounded">
                Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
