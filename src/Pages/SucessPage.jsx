import React from "react";
import image from "../Images/big-green-check.png";
import { useNavigate } from "react-router-dom";

const SucessPage = () => {
    const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex-col flex items-center   ">
        <div className="">
          <img className=" " src={image} alt="" />
        </div>
        <div className="font-bold text-4xl">Authenticated</div>
        <div className="text-gray-400 font-medium py-2 ">You have been authenticated successfully</div>
        <div className="text-gray-400 font-extralight">
         We will redirect to the page soon just wait !!!
        </div>
        <button className="pt-5" onClick={()=>navigate('/')}>Go Back</button>
      </div>
    </div>
  );
};

export default SucessPage;
