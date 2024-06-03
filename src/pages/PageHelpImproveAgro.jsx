import React from "react";
import SmallLogo from "../assets/images/logos/logo-small.png";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PageHelpImproveAgro = () => {
   const navigate = useNavigate();
   return (
      <div className="page-help-improve-agro w-full h-full flex-1 flex flex-col px-5 pt-4">
         <div className="header-container w-full flex justify-between h-8">
            <div className="logo-container flex items-center w-8">
               <img src={SmallLogo} alt="agro-logo" />
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-semibold text-[15px]">Agro Wallet</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="help-text-container w-full h-auto flex flex-col gap-3 mt-6">
            <div className="title-container">
               <h5 className="font-semibold text-[24px] whitespace-nowrap">
                  Help us improve Agro.
               </h5>
            </div>
            <div className="text-container w-full text-[12px]">
               <p>
                  Lorem ipsum dolor text. Lorem de post me. Ipsum dolor set ket
                  ler. Lorem ipsum dolor text. Lorem de post me. Ipsum dolor set
                  ket ler.
               </p>
            </div>
         </div>
         <div className="items-container w-full flex flex-col mt-4 gap-2">
            <div className="title-container w-full flex items-center">
               <h5 className="text-[12px] font-semibold">Agro Wallet</h5>
            </div>
            <div className="items-inner-container w-full flex flex-col gap-3 relative z-50">
               <div className="item w-full flex gap-2 h-auto items-center">
                  <div className="icon-container w-6">
                     <FaCheck className="text-main-green w-auto h-5" />
                  </div>
                  <div className="item-text-container flex items-center *:text-[12px]">
                     <p>Lorem dolor ipsum text.</p>
                  </div>
               </div>
               <div className="item w-full flex gap-2 h-auto items-center">
                  <div className="icon-container w-6">
                     <FaCheck className="text-main-green w-auto h-5" />
                  </div>
                  <div className="item-text-container flex items-center *:text-[12px]">
                     <p>
                        Dolor ipsum text figur. Dolor set de post. Ipsum dolor
                        ket.
                     </p>
                  </div>
               </div>
               <div className="item w-full flex gap-2 h-auto items-center">
                  <div className="icon-container w-6">
                     <FaCheck className="text-main-green w-auto h-5" />
                  </div>
                  <div className="item-text-container flex items-center *:text-[12px]">
                     <p>
                        Dolor ipsum text figur. Dolor set de post. Ipsum dolor
                        ket.
                     </p>
                  </div>
               </div>
               <div className="item w-full flex gap-2 h-auto items-center">
                  <div className="icon-container w-6">
                     <FaX className="text-red-500 w-auto h-[18px]" />
                  </div>

                  <div className="item-text-container flex items-center *:text-[12px]">
                     <p>
                        Dolor ipsum text figur. Dolor set de post. Ipsum dolor
                        ket.
                     </p>
                  </div>
               </div>
               <div className="item w-full flex gap-2 h-auto items-center">
                  <div className="icon-container w-6">
                     <FaX className="text-red-500 w-auto h-[18px]" />
                  </div>

                  <div className="item-text-container flex items-center *:text-[12px]">
                     <p>
                        Dolor ipsum text figur. Dolor set de post. Ipsum dolor
                        ket.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="text-container w-full mt-6">
            <p className="text-[12px]">
               Lorem ipsum dolor text. Lorem de post me. Ipsum dolor set ket
               ler. Lorem ipsum dolor text. Lorem de post me. Ipsum dolor set
               ket ler.
            </p>
         </div>
         <div className="buttons-container mt-6 h-full flex items-end mb-5">
            <div className="buttons-inner-container w-full flex flex-row gap-3">
               <div className="button-container w-full flex">
                  <button
                     className="w-full bg-black border-2 border-btn-green h-[40px] rounded-[10px] font-medium text-[12px] hover:bg-white hover:border-white hover:text-black transition-colors duration-300"
                     onClick={() => {
                        navigate("/createpassword");
                     }}
                  >
                     No I don't want
                  </button>
               </div>
               <div className="button-container w-full flex">
                  <button
                     className="w-full bg-btn-green h-[40px] rounded-[10px] font-medium text-[12px] hover:bg-white hover:text-black transition-colors duration-300"
                     onClick={() => {
                        navigate("/createpassword");
                     }}
                  >
                     Accept
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PageHelpImproveAgro;
