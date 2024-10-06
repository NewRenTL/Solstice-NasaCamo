

const WelcomeVideo = () => {
  return (
    <section className="flex flex-col items-center pt-14 px-10 justify-center min-h-lvh bg-gray-100">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
        Oceanis
      </h1>
      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 mb-6 text-center max-w-2xl">
        Texto de descripción
      </p>
      {/* Video */}
      <div className="w-full md:w-3/4 lg:w-1/2 mb-8 bg-black h-64 md:h-80 lg:h-96 p-4 rounded-md">
        <div className="w-full h-full flex items-center justify-center text-white text-lg">
          Video 
        </div>
      </div>
      {/* Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none">
        Comencemos!
      </button>
    </section>
  );
}

export default WelcomeVideo