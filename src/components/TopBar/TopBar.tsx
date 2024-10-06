import { RxHamburgerMenu } from "react-icons/rx";

const TopBar = () => {
  return (
    <div className="flex flex-row fixed top-0 left-0 z-10 w-full h-14 justify-between px-3 py-2 bg-blue-400">
      {/* Image of project and letter */}
      <div className="hidden mn:flex flex-row mn:w-[30%] bg-pink-50">
        <div className="flex flex-row bg-fuchsia-500 w-[40%]"></div>
        <div className="flex flex-row bg-orange-600 w-[60%] items-center justify-center">
            <p className="flex text-center text-[10px]">Solstice</p>
        </div>
      </div>
      <div className="flex flex-row w-[8%] mn:hidden ">
        <RxHamburgerMenu className="flex w-full h-full"></RxHamburgerMenu>
      </div>

      {/*Button of Navigation*/}
      <div className="hidden mn:flex mn:flex-row justify-between p-1 bg-slate-200 w-[45%] sm:w-[48%]">
        <button className="w-[30%] bg-orange-300 rounded-lg font-medium uppercase px-2 text-[10px] sm:text-[14px]">Explore</button>
        <button className="w-[30%] bg-orange-300 rounded-lg font-medium uppercase px-2 text-[10px] sm:text-[14px]">About Us</button>
        <button className="w-[30%] bg-orange-300 rounded-lg font-medium uppercase px-2 text-[10px] sm:text-[14px]">Start</button>
      </div>
    </div>
  );
};

export default TopBar;
