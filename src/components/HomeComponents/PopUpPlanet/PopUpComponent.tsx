import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./PopUpComponent.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useMainContext } from "../../../MainContext";

const animatedComponents = makeAnimated();

const Metales = [
  { value: "IRON", label: "Iron" },
  { value: "NICKEL", label: "Nickel" },
  { value: "MAGNESIUM", label: "Magnesium" },
  { value: "SULFUR", label: "Sulfur" },
  { value: "COPPER", label: "Copper" },
  { value: "CHLORIDES", label: "Chlorides" },
  { value: "COBALT", label: "Cobalt" },
  { value: "SULFATES", label: "Sulfates" },
  { value: "CHLORIDES", label: "Chlorides" },
];

const Compositions = [
  { value: "WATER", label: "Water" },
  { value: "SULFATES", label: "Sulfates" },
  { value: "CHLORIDES", label: "Chlorides" },
  { value: "AMMONIA", label: "Ammonia" },
  { value: "METHANE", label: "Methane" },
  { value: "LIQUIDIRON", label: "Liquid Iron" },
];

const EnergySources = [
  {
    value: "GEOTHERMAL",
    label: "Geothermal Energy",
  },
  {
    value: "CHEMOSYNTHESIS",
    label: "Chemosynthesis Energy",
  },
];

const AtmosphereCompostions = [
  {
    value: "H2O",
    label: "Carbon Dioxide",
  },
  {
    value: "N2",
    label: "Nitrogen",
  },
  {
    value: "CH4",
    label: "Methane",
  },
  {
    value: "NH3",
    label: "Ammonia",
  },
  {
    value: "HE",
    label: "Helium",
  },
  {
    value: "H2",
    label: "Hydrogen",
  },
];

const RadiationLevel = [
  {
    value: "HIGH",
    label: "High Radiation",
  },
  {
    value: "LOW",
    label: "Low Radiation",
  },
];

const soilType = [
  {
    value: "METALLIC",
    label: "Metallic",
  },
  {
    value: "SEDIMENTARY",
    label: "Sedimentary Rocks",
  },
];

const planets = ["Abyssum", "Ferrum", "Hydriom", "Metalis", "Thalasson"];

const planets2 = {
    "Hydriom":"https://www.youtube.com/embed/1eX5DptFS00?si=-H5U6nh4LlmJI_iG",
    "Metalis":"https://www.youtube.com/embed/xbFduLFcBgU?si=MyhLlwiqwSDJIFV8",
    "Thalasson":"https://www.youtube.com/embed/MneEbHrLoJw?si=FjZKhfFe7qD-Vwxh",
    "Abyssum":"https://www.youtube.com/embed/1eX5DptFS00?si=e2FGg9LZBR1NqvI0",
    "Ferrum":"https://www.youtube.com/embed/DlFJlqXMAnw?si=43UHsXORllEDbIQ6"
}

const PopUpComponent = () => {
  const [sliderTemperature, setSliderTemperature] = useState(50);
  const [sliderValue2, setSliderValue2] = useState(0);
  const [sliderValue3, setSliderValue3] = useState(0);
  const [selectedMetales, setSelectedMetales] = useState([]);
  const [selectedComposition, setSelectedComposition] = useState([]);
  const [selectedATMComposition, setSelectedATMComposition] = useState([]);
  const [selectedEnergy, setSelectedEnergy] = useState(null);
  const [selectedRadiation, setSelectedRadiation] = useState(null);
  const [selectedSoilType, setSelectedSoilType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null); // Para almacenar el planeta

  const { hidePopUp } = useMainContext();

  const generateNumber = () => {
    const sumValues =
      sliderTemperature + sliderValue2 + sliderValue3 + selectedMetales.length;
    // Devolver el índice basado en el operador módulo
    return Math.floor(sumValues) % planets.length;
  };

  const handleSubmit = () => {
    setIsLoading(true); // Inicia el estado de carga
    setShowVideo(false); // Oculta el video
    const planetIndex = generateNumber(); // Generar índice
    console.log(planetIndex);
    console.log(planets2[planets[planetIndex]])
    console.log(planets[planetIndex]);
    setSelectedPlanet(planets2[planets[planetIndex]]);
    setTimeout(() => {
      setIsLoading(false); // Detiene el estado de carga después de 5 segundos
      setShowVideo(true); // Muestra el video después de 5 segundos
    }, 5000);
  };

  // Manejar los cambios en las opciones seleccionadas
  const handleSelectChangeMetales = (selected) => {
    if (selected) {
      const selectedValues = selected.map((option) => option.value);
      console.log(selectedValues);
      setSelectedMetales(selectedValues);
    } else {
      setSelectedMetales([]);
    }
  };
  const handleSelectChangeComposition = (selected) => {
    if (selected) {
      const selectedValues = selected.map((option) => option.value);
      console.log(selectedValues);
      setSelectedComposition(selectedValues);
    } else {
      setSelectedComposition([]);
    }
  };
  const handleSelectChangeATMComposition = (selected) => {
    if (selected) {
      // Guardar solo los valores seleccionados en el estado
      const selectedValues = selected.map((option) => option.value);
      console.log(selectedValues);
      setSelectedATMComposition(selectedValues);
    } else {
      // Si no hay selección, resetear el array
      setSelectedATMComposition([]);
    }
  };

  const handleSelectChangeEnerygySource = (selected) => {
    console.log(selected);
    setSelectedEnergy(selected);
  };
  const handleSelectChangeRadiationLevel = (selected) => {
    console.log(selected);

    setSelectedRadiation(selected);
  };

  const handleSelectChangeSoilType = (selected) => {
    console.log(selected);

    setSelectedSoilType(selected);
  };
  return (
    <div className="flex z-10 fixed inset-0 items-center justify-center bg-black backdrop-blur-[2px] bg-opacity-70 ">
      <div className="bg-black custom-scrollbar scrollbar-thin scrollbar-thumb-rounded-full  scrollbar-thumb-cyan-500 scrollbar-track-transparent scrollbar-corner-transparent flex flex-col pb-4 relative text-black px-6 rounded-lg overflow-y-auto h-[70%] shadow-lg w-[80%] sm:w-[40%] transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_10px_rgba(0,206,209,0.8)] hover:ring-4 hover:ring-[#00DEFF] ring-opacity-50">
        <div className="flex sticky z-10 top-0 py-3 w-full flex-row justify-end bg-black items-center">
          <IoIosCloseCircle
            onClick={hidePopUp}
            className="w-10 h-10 cursor-pointer text-white hover:scale-125 transition hover:text-[#45E7E7] items-center"
          />
        </div>
        <div className="flex flex-col w-full px-5">
          <h2 className="text-xl font-thin mb-4 text-white">
            Search for the ideal planet!
          </h2>
          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Temperature:
              </label>
              <Slider
                min={-150}
                max={400}
                className="w-full"
                value={sliderTemperature}
                onChange={(value) => setSliderTemperature(value as number)}
                trackStyle={{ backgroundColor: "#00DEFF", height: 10 }}
                handleStyle={{
                  borderColor: "#00DEFF",
                  height: 20,
                  width: 20,
                  marginTop: -5,
                  backgroundColor: "#00DEFF",
                }}
                railStyle={{ backgroundColor: "gray", height: 10 }}
              />
              <p className="flex w-full my-2 text-white">
                Temperature in Celsius: {sliderTemperature}
              </p>
            </div>
          </div>

          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Pressure:
              </label>
              <Slider
                min={0.1}
                max={1000}
                className="w-full"
                value={sliderValue2}
                onChange={(value) => setSliderValue2(value as number)}
                trackStyle={{ backgroundColor: "#00DEFF", height: 10 }}
                handleStyle={{
                  borderColor: "#00DEFF",
                  height: 20,
                  width: 20,
                  marginTop: -5,
                  backgroundColor: "#00DEFF",
                }}
                railStyle={{ backgroundColor: "gray", height: 10 }}
              />
              <p className="flex w-full my-2 text-white">
                Pressure in atm: {sliderValue2}
              </p>
            </div>
          </div>

          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Metals:
              </label>
              <Select
                isMulti
                options={Metales} // Lista de opciones
                onChange={handleSelectChangeMetales} // Manejador de cambios
                components={animatedComponents}
                classNamePrefix="select"
                placeholder="Choose options..." // Placeholder para las opciones
              />
            </div>
          </div>
          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Energy Source:
              </label>
              <Select
                options={EnergySources} // Lista de opciones
                onChange={handleSelectChangeEnerygySource} // Manejador de cambios
                classNamePrefix="select"
                placeholder="Choose options..." // Placeholder para las opciones
              />
            </div>
          </div>

          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Radiation:
              </label>
              <Select
                options={RadiationLevel} // Lista de opciones
                onChange={handleSelectChangeRadiationLevel} // Manejador de cambios
                classNamePrefix="select"
                placeholder="Choose options..." // Placeholder para las opciones
              />
            </div>
          </div>

          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Type of Soil:
              </label>
              <Select
                options={soilType} // Lista de opciones
                onChange={handleSelectChangeSoilType} // Manejador de cambios
                classNamePrefix="select"
                placeholder="Choose options..." // Placeholder para las opciones
              />
            </div>
          </div>

          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Environment composition:
              </label>
              <Select
                isMulti
                options={Compositions} // Lista de opciones
                onChange={handleSelectChangeComposition} // Manejador de cambios
                components={animatedComponents}
                classNamePrefix="select"
                placeholder="Choose options..." // Placeholder para las opciones
              />
            </div>
          </div>

          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Atmosphere composition:
              </label>
              <Select
                isMulti
                options={AtmosphereCompostions} // Lista de opciones
                onChange={handleSelectChangeATMComposition} // Manejador de cambios
                components={animatedComponents}
                classNamePrefix="select"
                placeholder="Choose options..." // Placeholder para las opciones
              />
            </div>
          </div>

          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Ph:
              </label>
              <Slider
                min={0.1}
                max={10.0}
                step={0.1}
                className="w-full"
                value={sliderValue3}
                onChange={(value) => setSliderValue3(value as number)}
                trackStyle={{ backgroundColor: "#00DEFF", height: 10 }}
                handleStyle={{
                  borderColor: "#00DEFF",
                  height: 20,
                  width: 20,
                  marginTop: -5,
                  backgroundColor: "#00DEFF",
                }}
                railStyle={{ backgroundColor: "gray", height: 10 }}
              />
              <p className="flex w-full my-2 text-white">
                Ph value: {sliderValue3}
              </p>
            </div>
          </div>

          <button
            className="bg-white text-black font-medium px-4 py-2 rounded-lg transition duration-300 hover:text-white hover:bg-[#45E7E7]"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div className="flex justify-center items-center mt-4">
            {isLoading && (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-cyan-500"></div>
              </div>
            )}
            {/* {showVideo && (
              <video width="320" height="240" controls>
                <source src={`videos/${selectedPlanet}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )} */}
            {showVideo && (
                <iframe
                width="520"
                height="240"
                src={`${selectedPlanet}`} // Cambia selectedPlanet por el ID del video de YouTube
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpComponent;
