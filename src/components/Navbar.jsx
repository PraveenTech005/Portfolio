import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [change, setChange] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const disableScroll = () => {
      if (change) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "auto";
    };

    disableScroll();
  }, [change]);

  return (
    <>
      <div className="fixed w-full top-3 left-0 z-10">
        <div className="w-8/12 mx-auto backdrop-blur-sm bg-[#00000055] p-2 px-5 rounded-2xl lg:flex flex-row justify-between items-center text-white shade hidden border">
          <img src="/P.png" alt="P" className="w-10 rounded-full border" />
          <div className="flex flex-row justify-between items-center w-5/12">
            {["Home", "About", "Skills", "Projects"].map((item, index) => (
              <div key={index} className="h-full">
                <a href={`#${item.toLowerCase()}`} className="h-full">
                  {item}
                </a>
              </div>
            ))}
          </div>
          <a href="#contact" className="hidden" ref={contactRef}>
            Contact Me
          </a>
          <button onClick={() => contactRef.current.click()}>Contact Me</button>
        </div>
      </div>
      <div className="fixed w-full top-0 left-0 lg:hidden backdrop-blur-sm bg-[#00000055] p-3 flex flex-row justify-between items-center z-10">
        <img
          src="/P.png"
          alt="P"
          className="w-10 rounded-full border border-white"
        />
        <div
          className={`menu ${change && "change"} z-20`}
          onClick={() => setChange((prev) => !prev)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {change && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center space-y-15">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <div key={index} className="w-full text-center Sora text-xl">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="h-full"
                    onClick={() => setChange((prev) => !prev)}
                  >
                    {item}
                  </a>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
