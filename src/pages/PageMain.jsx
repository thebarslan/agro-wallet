import React, { useState } from "react";
import BNBImage from "../assets/images/background-images/Main/Chains/bnb.png";
import SendImage from "../assets/images/background-images/Main/send-img.png";
import DepositImage from "../assets/images/background-images/Main/deposit-img.png";
import ArrowsImage from "../assets/images/background-images/Main/arrows-img.png";
import LogoMedium from "../assets/images/logos/logo-medium.png";
import { FaAngleDown, FaRegCopy } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiDownArrow } from "react-icons/bi";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Tokens from "../components/main/tokens";
import { useNavigate } from "react-router-dom";
import Nfts from "../components/main/nfts";
import { GoHomeFill } from "react-icons/go";
import { HiLightningBolt } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

const PageMain = () => {
   const navigate = useNavigate();
   const [isTokens, setIsTokens] = useState(true);
   const [totalBalanceIsVisible, setTotalBalanceIsVisible] = useState(true);
   const totalBalance = "20,000.05";
   const walletAddress = "0X16A67***55";
   return (
      <div className="page-main w-full h-full flex-1 flex flex-col">
         <div className="header-container w-full flex justify-between gap-4 mt-4 px-3">
            <div className="left w-[220px] flex flex-col">
               <div className="image-container h-6 w-6 rounded-full bg-main-green flex items-center justify-center">
                  <h5 className="text-[16px] font-bold">A</h5>
               </div>
               <div className="account-container w-full mt-1 flex gap-1">
                  <h5 className="text-[12px] whitespace-nowrap">Account - 1</h5>
                  {/* <FaAngleDown className="text-main-green" /> */}
               </div>
               <div className="wallet-address-container w-full mt-0">
                  <h5 className="text-[12px] text-[#9F9F9F]">
                     {walletAddress}
                  </h5>
               </div>
            </div>
            <div className="middle w-full flex rounded-[30px] h-[26px] bg-main-green px-2 items-center justify-center">
               <div className="left w-[40px] h-full">
                  <img src={BNBImage} alt="bnb" className="h-full w-auto" />
               </div>
               <div className="middle w-full h-full flex items-center justify-start pl-1">
                  <h5 className="text-[12px] font-medium text-black">
                     BNB CHAIN
                  </h5>
               </div>
            </div>
            <div className="right w-[220px] flex justify-end gap-2 mr-2">
               <button
                  className="h-7 w-7 rounded-full border border-[#A3A3A3] flex items-center justify-center"
                  onClick={() => {
                     navigator.clipboard.writeText(walletAddress);
                  }}
               >
                  <FaRegCopy className="w-auto h-4 text-main-green" />
               </button>
            </div>
         </div>
         <div className="total-balance-container w-full flex flex-col mt-8 px-3">
            <button
               className="flex gap-2 items-center"
               onClick={() => {
                  setTotalBalanceIsVisible(!totalBalanceIsVisible);
               }}
            >
               <h5>Total Balance</h5>
               {totalBalanceIsVisible ? (
                  <IoEyeOutline className="h-[16px] w-auto" />
               ) : (
                  <IoEyeOffOutline className="h-[16px] w-auto" />
               )}
            </button>
            <h5 className="text-3xl font-semibold items-center flex">{`$ ${
               totalBalanceIsVisible ? totalBalance : `•••••`
            }`}</h5>
         </div>
         <div className="send-deposit-buttons-container w-full flex gap-2 px-3 mt-4 relative">
            <button
               className="send-button flex-1 w-full flex h-[44px] rounded-full border-2 border-main-green py-2 justify-center gap-3 items-center"
               onClick={() => {
                  navigate("/sendtoken");
               }}
            >
               <img src={SendImage} alt="send" className="h-[20px] w-auto" />
               <h5>Send</h5>
            </button>
            <div className="absolute w-[52px] h-[52px] bg-black border-2 border-white rounded-full left-1/2 -translate-x-1/2 -top-[4px] flex items-center justify-center">
               <img src={LogoMedium} alt="arrows" className="w-[28px] h-auto" />
            </div>
            <button
               className="send-button flex-1 w-full flex h-[44px] bg-main-green rounded-full border-2 border-main-green py-2 justify-center gap-3 items-center"
               onClick={() => {
                  navigate("/deposit");
               }}
            >
               <h5>Deposit</h5>
               <img src={DepositImage} alt="send" className="h-[20px] w-auto" />
            </button>
         </div>
         <div className="tokens-and-nfts-button-container w-full flex flex-col mt-4 px-4">
            <div className="nav-buttons-container w-full  flex bg-[#252525] rounded-md overflow-hidden h-[26px]">
               <button
                  className={`nav-button-container w-full text-[13px] h-full font-medium ${
                     isTokens
                        ? `flex-[9] rounded-r-full bg-main-green rounded-l-xl text-black`
                        : `flex-[8] bg-[#252525] rounded-l-xl`
                  }`}
                  onClick={() => setIsTokens(true)}
               >
                  TOKENS
               </button>
               <button
                  className={`nav-button-container w-full text-[13px] h-full font-medium ${
                     isTokens
                        ? `flex-[8] bg-[#252525]`
                        : `flex-[9] rounded-l-full bg-main-green text-black`
                  }`}
                  onClick={() => setIsTokens(false)}
               >
                  NFTS
               </button>
            </div>
         </div>
         <div className="tokens-and-nfts w-full h-[220px] mt-6 px-3">
            {isTokens ? <Tokens /> : <Nfts />}
         </div>
         <div className="bottom-navbar w-full h-full items-end flex">
            <div className="navbar flex w-full h-[56px] bg-[#121212] px-3">
               <div className="navbar-items w-full flex justify-between h-full items-center px-8">
                  <div
                     className="item flex flex-col h-full w-auto items-center justify-center cursor-pointer"
                     onClick={() => {
                        navigate("/main");
                     }}
                  >
                     <GoHomeFill className="h-[28px] w-auto text-main-green" />
                     <h5 className="text-[12px] -mt-[0px] text-main-green">
                        Home
                     </h5>
                  </div>
                  <div
                     className="item flex flex-col h-full w-auto items-center justify-center cursor-pointer"
                     onClick={() => {
                        navigate("/activity");
                     }}
                  >
                     <HiLightningBolt className="h-[28px] w-auto" />
                     <h5 className="text-[12px] -mt-[0px]">Activity</h5>
                  </div>
                  <div
                     className="item flex flex-col h-full w-auto items-center justify-center cursor-pointer"
                     onClick={() => {
                        navigate("/settings");
                     }}
                  >
                     <IoMdSettings className="h-[28px] w-auto" />
                     <h5 className="text-[12px] -mt-[0px]">Settings</h5>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PageMain;
