import React from "react";
import SmallLogo from "../assets/images/logos/logo-small.png";
import BackgroundImage from "../assets/images/background-images/ProtectYourWallet/background.png";
import { useNavigate } from "react-router-dom";

const PageProtectYourWallet = () => {
   const navigate = useNavigate();
   return (
      <div className="page-protect-your-wallet w-full h-full flex-1 flex flex-col px-5 pt-4">
         <div className="header-container w-full flex justify-between h-8">
            <div className="logo-container flex items-center w-8">
               <img src={SmallLogo} alt="agro-logo" />
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-semibold text-[15px]">Agro Wallet</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="title-container w-full flex flex-col items-center mt-6 gap-1">
            <div className="title-inside-container">
               <h5 className="font-semibold text-[26px]">
                  Protect Your Wallet
               </h5>
            </div>
            <div className="title-inside-container px-6">
               <p className="font-normal text-[13px] text-center">
                  Your password unlocks your Agro wallet only on this device.
               </p>
            </div>
         </div>
         <div className="protect-your-wallet-image-container w-full flex items-center justify-center">
            <img
               src={BackgroundImage}
               alt="protect-your-wallet"
               className="h-[180px] w-auto"
            />
         </div>
         <div className="steps-container w-full flex flex-col mt-0 gap-1">
            <div className="steps-visual-container px-10 flex items-center">
               <div className="ball h-[16px] w-[16px] rounded-full bg-main-green flex-shrink-0"></div>
               <div className="line w-full h-[2px] bg-main-green"></div>
               <div className="ball h-[16px] w-[16px] rounded-full bg-main-green flex-shrink-0"></div>
               <div className="line w-full h-[2px] bg-white"></div>
               <div className="ball h-[16px] w-[16px] rounded-full bg-white flex-shrink-0"></div>
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
         <div className="text-container w-full flex items-center text-center mt-5">
            <p className="text-[13px]">
               Don't risk losing your money. Protect your Agro Wallet. Save the
               Secret recovery phrase somewhere you trust. This is the only way
               to recover your wallet.
            </p>
         </div>
         <div className="button-container w-full flex mt-10">
            <div className="button-container w-full flex">
               <button
                  className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={() => {
                     navigate("/copyphrases");
                  }}
               >
                  Start
               </button>
            </div>
         </div>
      </div>
   );
};

export default PageProtectYourWallet;
