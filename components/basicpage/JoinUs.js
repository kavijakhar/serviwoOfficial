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
      <div className="container md:mx-auto px-20 min-h-screen  mt-36  p-4 md:shadow-md flex-grow">
        <h1 className="font-bold text-3xl my-8 text-center">Join Us</h1>
        <form className="mx-auto md:w-3/4 lg:w-3/4 " onSubmit={OnSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="col-span-2 mb-4 md:col-span-1">
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
                placeholder="Name"
                className="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-xl  outline-none text-gray-700 py-4 px-3 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="col-span-2 mb-4 md:col-span-1">
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
                placeholder="Email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-700 py-4 px-3 transition-colors duration-200 ease-in-out"
              />
            </div>{" "}
            <div className="col-span-2 mb-4">
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
                placeholder="Address"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-xl  outline-none text-gray-700 py-4 px-3 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="col-span-2 mb-4 md:col-span-1">
              <label
                htmlFor="phone"
                className="leading-7 text-lg text-gray-600"
              >
                Phone
              </label>
              <input
                type="tel"
                required
                value={credentials.phone}
                onChange={changeCredentials}
                placeholder="Phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-xl  outline-none text-gray-700 py-4 px-3 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="col-span-2 mb-4 md:col-span-1">
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
                placeholder="Pincode"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-xl  outline-none text-gray-700 py-4 px-3 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="col-span-2">
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
                placeholder="Designation"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-xl  outline-none text-gray-700 py-4 px-3 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4 ">
            <button
              type="submit"
              className="hover:bg-transparent bg-blue-500 hover:text-blue-700 font-medium text-white py-2 px-8 border hover:border-blue-500 border-transparent text-3xl rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
