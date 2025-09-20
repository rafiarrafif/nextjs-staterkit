import React from "react";
import Greeting from "./components/Greeting";

const page = () => {
  return (
    <div className="text-center mt-10 text-xl">
      <h1>Hello World Page</h1>
      <Greeting />
    </div>
  );
};

export default page;
