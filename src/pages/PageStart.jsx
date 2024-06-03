import React from "react";
import LogoMedium from "../assets/images/logos/logo-medium.png";
import StartBackgroundImg from "../assets/images/background-images/Start/background.png";
import { useNavigate } from "react-router-dom";

const PageStart = () => {
   const navigate = useNavigate();
   return (
      <div className="page-start w-full h-full flex-1 flex flex-col relative">
         <div className="header-container w-full flex flex-col h-auto items-center mt-4 gap-1 relative z-50">
            <div className="logo-container">
               <img
                  src={LogoMedium}
                  alt="agro-logo"
                  className="w-[52px] h-[52px]"
               />
            </div>
            <div className="title-container">
               <h5 className="font-semibold text-[20px]">Agro Wallet</h5>
            </div>
         </div>
         <div className="middle-container h-full flex flex-col justify-end gap-4 relative z-50">
            <div className="button-container w-full flex px-5">
               <button
                  className="w-full bg-btn-green h-[50px] border-2 border-btn-green rounded-[14px] font-medium text-[14px] hover:bg-white hover:border-white hover:text-black transition-colors duration-300"
                  onClick={() => {
                     navigate("/login");
                  }}
               >
                  Login
               </button>
            </div>
            <div className="button-container w-full flex px-5">
               <button
                  className="w-full bg-black border-2 border-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:border-white hover:text-black transition-colors duration-300"
                  onClick={() => {
                     navigate("/improveagro");
                  }}
               >
                  Create Account
               </button>
            </div>
         </div>
         <div className="background-img-container absolute w-full h-full -mt-24 z-10">
            <img
               src={StartBackgroundImg}
               alt="start-bg"
               className="h-auto w-full"
            />
         </div>
         <div className="bottom-text-container w-full h-[20px] flex items-center justify-center mb-3 mt-3 relative z-50">
            <p className="text-[11px] font-normal">
               Do you need help? Contact{" "}
               <span className="text-main-green font-bold">
                  <a href="/">Agro</a>
               </span>{" "}
               now!
            </p>
         </div>
      </div>
   );
};

export default PageStart;
