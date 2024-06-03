import React from "react";
import LogoSmall from "../assets/images/logos/logo-small.png";
import BubbleImage from "../assets/images/background-images/GetStarted/bubble.png";
import { useNavigate } from "react-router-dom";

const PageGetStarted = () => {
   const navigate = useNavigate();
   return (
      <div className="page-get-started w-full h-full flex flex-col pt-4">
         <div className="header-container w-full px-5 flex h-8 items-center gap-2 relative z-50">
            <div className="img-container h-full w-auto flex items-center">
               <img src={LogoSmall} alt="agro-logo" />
            </div>
            <div className="title-container">
               <h5 className="font-semibold text-[15px]">Agro Wallet</h5>
            </div>
         </div>
         <div className="main-container w-full h-full mt-3 relative flex flex-col">
            <div className="bg-img-container w-full h-full absolute -top-12 left-0 z-10">
               <img src={BubbleImage} alt="bubble" className="w-full" />
            </div>
            <div className="top-empty-container h-full flex-[2] w-full"></div>
            <div className="bottom-container h-full flex-[3] pt-6 w-full flex flex-col justify-between relative z-50">
               <div className="title-container w-full flex flex-col px-12 *:font-semibold text-[32px] *:-mt-1">
                  <h5>Earn Money</h5>
                  <h5>Trade Crypto</h5>
                  <h5>Spend Cash</h5>
                  <h5 className="text-main-green">Anywhere</h5>
               </div>
               <div className="button-container w-full flex px-5">
                  <button
                     className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
                     onClick={() => {
                        navigate("/start");
                     }}
                  >
                     Get Started
                  </button>
               </div>
            </div>
         </div>
         <div className="bottom-text-container w-full h-[20px] flex items-center justify-center relative z-50 mb-3 mt-3">
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

export default PageGetStarted;
