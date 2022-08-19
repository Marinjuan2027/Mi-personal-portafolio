import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Sobre Mi
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hola. Soy Juan Camilo Marin, encantado de conocerte. Por favor
              mira a tu alrededor.
            </p>
          </div>
          <div>
            Me apasiona el mundo de la tecnologia y actualmente soy estudiante
            de Academlo, curso la ruta Full Stack Web Developer, donde e
            adquirido conocimientos en tecnologias como React, Redux, React
            Router, JavaScript, HTML, CSS, Bootstrap, Git y GitHub ostentando
            asi el titulo de Front End Developer; Actualmente me encuentro en el
            aprendizaje de mas herramientas como Node Js, Python, SQL y
            Algoritmos. Al incursionar en la industria de la programacion
            pretendo seguir adquiriendo mas conocimientos y perfeccionar los ya
            obtenidos.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
