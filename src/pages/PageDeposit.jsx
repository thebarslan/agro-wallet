import React from "react";
import { FaArrowLeft, FaRegCopy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

const PageDeposit = () => {
   const navigate = useNavigate();
   const walletAddress = "0x556a999s8855d8862475223";
   return (
      <div className="page-deposit w-full h-full flex flex-1 flex-col px-4 pt-3">
         <div className="header-container w-full flex justify-between h-8">
            <div className="back-container flex items-center w-8">
               <button
                  onClick={() => {
                     navigate(`/main`);
                  }}
               >
                  <FaArrowLeft className="text-main-green" />
               </button>
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-normal text-[14px]">Deposit</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="wallet-address w-full flex flex-col mt-4 gap-[6px]">
            <div className="title w-full flex items-center">
               <p className="text-[#B9B9B9] text-[14px]">Wallet Address</p>
            </div>
            <div
               className="address w-full flex h-10 rounded-lg bg-[#252525] items-center justify-center gap-6 cursor-pointer"
               onClick={() => {
                  navigator.clipboard.writeText(walletAddress);
               }}
            >
               <div className="copy-icon">
                  <FaRegCopy className="w-auto h-5 text-main-green -mt-[3px]" />
               </div>
               <div className="address-text">
                  <h5 className="text-[15px]">{walletAddress}</h5>
               </div>
            </div>
         </div>
         <div className="qr-code w-full flex items-center justify-center mt-8">
            <QRCodeSVG
               value="https://reactjs.org/"
               bgColor="black"
               fgColor="#B9B9B9"
               size={160}
            />
         </div>
         <div className="line w-full flex h-[1px] bg-main-green mt-8 mb-5"></div>
         <div className="desc w-full flex flex-col gap-1">
            <p className="text-[#B9B9B9] text-[15px]">Description</p>
            <p className="text-[12px]">
               Ethereum is a decentralized blockchain platform that establishes
               a peer-to-peer network that securely executes and verifies
               application code, called smart contracts. Smart contracts allow
               participants to transact with each other without a trusted
               central authority.
            </p>
         </div>
      </div>
   );
};

export default PageDeposit;
