import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia entre abrir/cerrar menú
  };

  return (
    <div
      className={`flex flex-row fixed top-0 left-0 z-20 w-full h-14 justify-between px-3 py-2 ${
        isScrolled ? "backdrop-blur-md bg-opacity-50" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      {/* Image of project and letter */}
      <div className="hidden mn:flex flex-row mn:w-[30%] bg-pink-50">
        <div className="flex flex-row bg-fuchsia-500 w-[40%]"></div>
        <div className="flex flex-row bg-orange-600 w-[60%] items-center justify-center">
          <p className="flex text-center text-[10px]">Solstice</p>
        </div>
      </div>
      <div className="flex flex-row w-[8%] mn:hidden" onClick={toggleMenu}>
        <RxHamburgerMenu className="flex w-full h-full"></RxHamburgerMenu>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute top-14 left-0 w-full transition-all duration-300 ease-in-out text-white flex flex-col items-center py-4 z-30 mn:hidden ${
            isScrolled ? "backdrop-blur-md bg-gray-800 bg-opacity-50" : "backdrop-blur-md bg-transparent"
          }`}
        >
          <button className="w-[90%] bg-transparent rounded-lg text-start font-semibold text-[#00F7FF] transition duration-300 ease-in-out hover:shadow-lg hover:text-shadow-glow uppercase px-2 text-[14px] sm:hover:scale-125 sm:text-[16px] py-2 my-2">
            Explore
          </button>
          <button className="w-[90%] bg-transparent rounded-lg text-start font-semibold text-[#00F7FF] transition duration-300 ease-in-out hover:shadow-lg hover:text-shadow-glow uppercase px-2 text-[14px] sm:hover:scale-125 sm:text-[16px] py-2 my-2">
            About Us
          </button>
          <button className="w-[90%] bg-transparent rounded-lg text-start font-semibold text-[#00F7FF] transition duration-300 ease-in-out hover:shadow-lg hover:text-shadow-glow uppercase px-2 text-[14px] sm:hover:scale-125 sm:text-[16px] py-2 my-2">
            Start
          </button>
        </div>
      )}

      {/*Button of Navigation*/}
      <div className="hidden mn:flex mn:flex-row justify-between p-1 bg-transparent bg-slate-200 w-[45%] sm:w-[48%]">
        <button className="w-[30%] bg-orange-300 bg-transparent rounded-lg font-semibold text-[#00F7FF] transition duration-300 ease-in-out hover:shadow-lg hover:text-shadow-glow uppercase px-2 text-[12px] sm:hover:scale-125 sm:text-[16px]">
          Explore
        </button>
        <button className="w-[30%] bg-orange-300 bg-transparent rounded-lg font-semibold text-[#00F7FF] transition duration-300 ease-in-out  hover:text-shadow-glow  uppercase px-2 text-[12px] sm:hover:scale-125  sm:text-[16px]">
          About Us
        </button>
        <button className="w-[30%] bg-orange-300 bg-transparent rounded-lg font-semibold text-[#00F7FF] transition duration-300 ease-in-out hover:text-shadow-glow uppercase px-2 text-[12px] sm:hover:scale-125  sm:text-[16px]">
          Start
        </button>
      </div>
    </div>
  );
};

export default TopBar;
