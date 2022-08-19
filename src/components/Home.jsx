import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Imagen from "../assets/img1.jpeg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <img src={Imagen} alt="" className="img" />
        <p className="text-pink-600 font-bold">Hola, mi Nombre es</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Juan Camilo Marin
        </h1>
        <h2 className="text-4xl sm:text-7xl fon-bold text-[#8892b0]">
          Soy Desarrollador Full Stack
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] font-bold">
          Capacidad, para Diseñar, programar, mantener y crear nuevos sistemas
          informaticos, que le permitan el desarrollo (planificacion y
          programacion) de sistemas informaticos
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <a href="/docu.pdf" download>
              Descargar curriculum
            </a>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 hover:" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
