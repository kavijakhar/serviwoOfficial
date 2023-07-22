// logosData containing logo information
const logosData = [
    { id: 1, src: "/logos/logo.jpg" },
    { id: 2, src: "/logos/logo3.jpg" },
    { id: 3, src: "/logos/logo4.png" },
    { id: 4, src: "/logos/logo5.jpeg" },
    { id: 5, src: "/logos/logo7.jpeg" },
    { id: 6, src: "/logos/logo8.jpeg" },
    { id: 7, src: "/logos/logo9.jpeg" },
    { id: 8, src: "/logos/logo10.jpeg" },
    { id: 9, src: "/logos/logo11.jpeg" },
    { id: 10, src: "/logos/logo20.jpg" },
    { id: 11, src: "/logos/logo21.jpg" },
    { id: 12, src: "/logos/logo24.jpg" },
    { id: 13, src: "/logos/logo108.jpg" },
    { id: 14, src: "/logos/logo19.jpg" },
    { id: 15, src: "/logos/logo16.jpg" },
    { id: 16, src: "/logos/logo14.jpg" },
    { id: 17, src: "/logos/logoDBT.jpg" },
    { id: 18, src: "/logos/logo111.jpeg" },
    { id: 19, src: "/logos/logo1111.png" },
  ];
  
  export default function Logos() {
    return (
      <div className="w-50 flex justify-around items-center mx-10 my-40 flex-wrap">
        {logosData.map((logo) => (
          <div key={logo.id} className="m-4 relative max-w-xl rounded-lg overflow-hidden bg-cover bg-no-repeat">
            <img
              src={logo.src}
              className="h-auto max-w-full transition duration-300 ease-in-out hover:scale-110"
              alt=""
            />
          </div>
        ))}
      </div>
    );
  }
  