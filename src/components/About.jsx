/** @format */
import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Vanja Vasiljevic, I am 27 years old and I live in Banja
          Luka.I’ve started programming about 2 years ago and so far I’ve
          finished two online courses for web development in which I’ve received
          additional knowledge in this field. I’ve been working in groups and
          built several web pages. So far my experience has grown from basic web
          technologies like HTML, CSS to more advanced things like Bootstrap,
          SAAS as well as some knowledge in JQuery and JavaScript. Right now, I
          am looking for a job as a intern or junior developer to be able to
          further improve my skills as a developer. I am very eager to learn new
          technologies and I am a team player. Hope to hear from you! I speak 2
          languages: English and Serbian.
        </p>
        <br />
        {/* <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          accusantium magnam maiores porro tempora, sint expedita consectetur
          iusto cupiditate esse ipsam consequuntur ab quia tempore fugiat,
          eveniet nostrum sit obcaecati.
        </p> */}
      </div>
    </div>
  );
};

export default About;
