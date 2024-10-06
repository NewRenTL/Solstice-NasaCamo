import { useState } from "react";

const TemplateCreation = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  // Function to show the pop-up
  const showPopUp = () => {
    setIsPopUpVisible(true);
  };

  // Function to hide the pop-up
  const hidePopUp = () => {
    setIsPopUpVisible(false);
  };

  return (
    <section className="flex flex-col w-full sm:flex-row p-2 min-h-lvh bg-green-200">
      <div className="flex flex-col w-full sm:w-[40%] px-2 py-3 bg-slate-950">
        <button
          onClick={showPopUp}
          className="flex flex-col w-20 bg-red-500 rounded-xl text-center justify-center items-center hover:bg-fuchsia-500"
        >
          Button
        </button>
      </div>
      <div className="flex flex-col w-full sm:w-[60%] px-2 py-3 bg-slate-700"></div>

      {isPopUpVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] sm:w-[40%]">
            <h2 className="text-xl font-bold mb-4">
              Enter data to create a creature:
            </h2>
            <div className="flex flex-col mn:flex-row">
              
            </div>
            <button
              onClick={hidePopUp}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TemplateCreation;
