import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { IoIosCloseCircle } from "react-icons/io";
import { useMainContext } from "../../../MainContext";

const animatedComponents = makeAnimated();

const Metales = [
  { value: "HIERRO", label: "Hierro" },
  { value: "NÍQUEL", label: "Niquel" },
  { value: "MAGNESIO", label: "Magnesio" },
  { value: "AZUFRE", label: "Azufre" },
  { value: "COBRE", label: "Cobre" },
  { value: "CLORUROS", label: "Cloruros" },
  { value: "COBALTO", label: "Cobal" },
  { value: "SULFATOS", label: "Sulfatos" },
  { value: "CLORUROS", label: "Cloruros" },
];

const Compositions = [
  { value: "AGUA", label: "Agua" },
  { value: "SULFATOS", label: "Sulfatos" },
  { value: "CLORUROS", label: "Cloruros" },
  { value: "AMONÍACO", label: "Amoníaco" },
  { value: "METANO", label: "Metano" },
  { value: "HIERROLIQUIDO", label: "Hierro liquido" },
];

const EnergySources = [
  {
    value: "GEOTERMICA",
    label: "Energia Geotermica",
  },
  {
    value: "QUIMIOSÍNTESIS",
    label: "Energia QuimioSíntesis",
  },
];

const AtmosphereCompostions = [
  {
    value: "H20",
    label: "Dioxido de Carbono",
  },
  {
    value: "N2",
    label: "Nitrogeno",
  },
  {
    value: "CH4",
    label: "Metano",
  },
  {
    value: "NH3",
    label: "Amoníaco",
  },
  {
    value: "HE",
    label: "Helio",
  },
  {
    value: "H2",
    label: "Hidrógeno",
  },
];

const RadiationLevel = [
  {
    value: "ALTA",
    label: "Racidiación Alta",
  },
  {
    value: "BAJA",
    label: "Radiación Baja",
  },
];

const soilType = [
  {
    value: "METALIC",
    label: "Metálicas",
  },
  {
    value: "SEDIMENTARY",
    label: "Rocas Sedimentarias",
  },
];

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
  const { hidePopUp } = useMainContext();

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
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-[2px] bg-opacity-70">
      <div className="bg-black flex flex-col pb-4 relative text-black px-6 rounded-lg overflow-y-auto h-[70%] shadow-lg w-[80%] sm:w-[40%]">
        <div className="flex sticky z-10 top-0 py-3 w-full flex-row justify-end bg-black items-center">
          <IoIosCloseCircle
            onClick={hidePopUp}
            className="w-10 h-10 cursor-pointer text-white hover:scale-125 transition hover:text-white items-center"
          />
        </div>
        <div className="flex flex-col w-full px-5">
          <h2 className="text-xl font-bold mb-4 text-white">Buscar el planeta ideal:</h2>
          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Temperatura:
              </label>
              <Slider
                min={-150}
                max={400}
                className="w-full"
                value={sliderTemperature}
                onChange={(value) => setSliderTemperature(value as number)}
                trackStyle={{ backgroundColor: "blue", height: 10 }}
                handleStyle={{
                  borderColor: "blue",
                  height: 20,
                  width: 20,
                  marginTop: -5,
                  backgroundColor: "white",
                }}
                railStyle={{ backgroundColor: "gray", height: 10 }}
              />
              <p className="flex w-full my-2 text-white">
                Valor de Temperatura: {sliderTemperature}
              </p>
            </div>
          </div>

          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Presión:
              </label>
              <Slider
                min={0.1}
                max={1000}
                className="w-full"
                value={sliderValue2}
                onChange={(value) => setSliderValue2(value as number)}
                trackStyle={{ backgroundColor: "blue", height: 10 }}
                handleStyle={{
                  borderColor: "blue",
                  height: 20,
                  width: 20,
                  marginTop: -5,
                  backgroundColor: "white",
                }}
                railStyle={{ backgroundColor: "gray", height: 10 }}
              />
              <p className="flex w-full my-2 text-white">
                Valor de presión: {sliderValue2}
              </p>
            </div>
          </div>

          <div className="flex flex-col my-2 mn:flex-row w-full">
            <div className="range1 flex flex-col w-full">
              <label className="w-full flex flex-row text-start text-white">
                Metales:
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
                Fuente de Energia:
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
                Radiación:
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
                Tipo de Suelo:
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
                Composición del ambiente:
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
                Composición de la atmosphera:
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
              <label className="w-full flex flex-row text-start text-white">Ph:</label>
              <Slider
                min={0.1}
                max={10.0}
                step={0.1}
                className="w-full"
                value={sliderValue3}
                onChange={(value) => setSliderValue3(value as number)}
                trackStyle={{ backgroundColor: "blue", height: 10 }}
                handleStyle={{
                  borderColor: "blue",
                  height: 20,
                  width: 20,
                  marginTop: -5,
                  backgroundColor: "white",
                }}
                railStyle={{ backgroundColor: "gray", height: 10 }}
              />
              <p className="flex w-full my-2 text-white">Valor de Ph: {sliderValue3}</p>
            </div>
          </div>

          <button className="bg-[#45E7E7] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#45E7E7]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpComponent;
