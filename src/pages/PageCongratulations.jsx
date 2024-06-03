import React from "react";
import SmallLogo from "../assets/images/logos/logo-small.png";
import BackgroundImage from "../assets/images/background-images/Congratulation/background.png";
import { useNavigate } from "react-router-dom";
const PageCongratulations = () => {
   const navigate = useNavigate();
   return (
      <div className="page-congratulations w-full h-full flex-1 flex flex-col px-5 pt-4">
         <div className="header-container w-full flex justify-between h-8">
            <div className="logo-container flex items-center w-8">
               <img src={SmallLogo} alt="agro-logo" />
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-semibold text-[15px]">Agro Wallet</h5>
            </div>
            <div className="empty-container flex w-8"></div>
         </div>
         <div className="title-container w-full flex flex-col items-center mt-8">
            <div className="title-inside-container w-full flex flex-col relative z-50">
               <h5 className="font-semibold text-[26px] text-center">
                  Congratulations
               </h5>
            </div>
            <div className="title-inside-container w-full flex items-center justify-center -mt-8 relative z-[10]">
               <img src={BackgroundImage} alt="background" />
            </div>
         </div>
         <div className="text-container w-full flex items-center">
            <p className="text-[12px]">
               Lorem ipsum dolor text. Lorem de post me. Ipsum dolor set ket
               ler. Lorem ipsum dolor text. Lorem de post me. Ipsum dolor set
               ket ler. Lorem ipsum dolor text. Lorem de post me. Ipsum dolor
               set ket ler. Lorem ipsum dolor text. Lorem de post me. Ipsum
               dolor set ket ler. Lorem ipsum dolor text. Lorem de post me.
               Ipsum dolor set ket ler.{" "}
            </p>
         </div>
         <div className="steps-container w-full flex flex-col mt-8 gap-1">
            <div className="steps-visual-container px-10 flex items-center">
               <div className="ball h-[16px] w-[16px] rounded-full bg-main-green flex-shrink-0"></div>
               <div className="line w-full h-[2px] bg-main-green"></div>
               <div className="ball h-[16px] w-[16px] rounded-full bg-main-green flex-shrink-0"></div>
               <div className="line w-full h-[2px] bg-main-green"></div>
               <div className="ball h-[16px] w-[16px] rounded-full bg-main-green flex-shrink-0"></div>
            </div>
            <div className="steps-text-container w-full flex text-[10px] text-gray-300">
               <div className="step-text-container flex-1 w-full text-center">
                  <p>Create Password</p>
               </div>
               <div className="step-text-container flex-1 w-full text-center">
                  <p>Secure your account</p>
               </div>
               <div className="step-text-container flex-1 w-full text-center">
                  <p>Confirm the secret recovery phrase.</p>
               </div>
            </div>
         </div>
         <div className="button-container w-full flex mt-3 h-full items-end justify-end flex-1 mb-6">
            <div className="button-container w-full flex h-full items-end flex-1">
               <button
                  className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={() => {
                     navigate("/login");
                  }}
               >
                  Next
               </button>
            </div>
         </div>
      </div>
   );
};

export default PageCongratulations;
