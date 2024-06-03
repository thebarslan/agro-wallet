import React from "react";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BtcImage from "../assets/images/background-images/Main/Tokens/btc.png";
import { BsArrowDown } from "react-icons/bs";

const PageSendPreview = () => {
   const navigate = useNavigate();
   return (
      <div className="page-send-preview w-full h-full flex flex-col flex-1 px-4 pt-3">
         <div className="header-container w-full flex justify-between h-8">
            <div className="back-container flex items-center w-8">
               <button
                  onClick={() => {
                     navigate(`/sendtoken`);
                  }}
               >
                  <FaArrowLeft className="text-main-green" />
               </button>
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-normal text-[14px]">Preview Transaction</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="preview-info-container w-full flex flex-col items-center mt-6">
            <div className="img-container">
               <img src={BtcImage} alt="coin-img" />
            </div>
            <div className="sending mt-2">
               <p className="text-[15px] font-normal">Sending</p>
            </div>
            <div className="coin">
               <h5 className="text-[20px] font-medium">95786.96588 BTC</h5>
            </div>
         </div>
         <div className="from-to-who w-full flex flex-col mt-5">
            <div className="from w-full flex justify-between mb-2">
               <div className="left flex gap-2 items-center">
                  <div className="img-container">
                     <div className="img w-[32px] h-[32px] rounded-full bg-main-green text-white flex items-center justify-center">
                        <h5 className="font-medium">A</h5>
                     </div>
                  </div>
                  <div className="text-container">
                     <h5>From</h5>
                  </div>
               </div>
               <div className="right flex items-center">
                  <p className="text-[#B9B9B9] text-[13px]">0x6839***1F22A</p>
               </div>
            </div>
            <div className="arrow w-full flex items-center px-[10px]">
               <FaArrowDown className="text-main-green w-3 h-auto" />
            </div>
            <div className="from w-full flex justify-between mt-2">
               <div className="left flex gap-2 items-center">
                  <div className="img-container">
                     <div className="img w-[32px] h-[32px] rounded-full bg-main-green text-white flex items-center justify-center">
                        <h5 className="font-medium">A</h5>
                     </div>
                  </div>
                  <div className="text-container">
                     <h5>Contract</h5>
                  </div>
               </div>
               <div className="right flex items-center">
                  <p className="text-[#B9B9B9] text-[13px]">0x34839***1GC5</p>
               </div>
            </div>
         </div>
         <div className="line w-full h-[1px] bg-main-green my-6"></div>
         <div className="info w-full flex flex-col gap-1">
            <div className="w-full flex justify-between items-center text-[14px]">
               <p className="text-[#B9B9B9]">Network</p>
               <h5>BNB Chain</h5>
            </div>
            <div className="w-full flex justify-between items-center text-[14px]">
               <p className="text-[#B9B9B9]">Fee</p>
               <h5 className="text-main-green">Free Gas</h5>
            </div>
            <div className="w-full flex justify-between items-center text-[14px]">
               <p className="text-[#B9B9B9]">Speed</p>
               <h5>Normal (25 secs)</h5>
            </div>
         </div>
         <div className="button-container w-full h-full flex items-end mb-6">
            <button
               className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
               onClick={() => {
                  navigate(`/main`);
               }}
            >
               Confirm
            </button>
         </div>
      </div>
   );
};

export default PageSendPreview;
