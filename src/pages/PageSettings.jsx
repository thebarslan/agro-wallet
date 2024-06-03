import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ActiveNetworkIcon from "../assets/images/icons/Microchip.png";
import PreferencesIcon from "../assets/images/icons/preferences.png";
import SecurityIcon from "../assets/images/icons/security.png";
import TermsofuseIcon from "../assets/images/icons/termsofuse.png";
import PrivacyPolicyIcon from "../assets/images/icons/privacypolicy.png";
import SupportCenterIcon from "../assets/images/icons/supportcenter.png";
import LogoIcon from "../assets/images/icons/logoyellow.png";
import BNBIcon from "../assets/images/icons/bnbicon.png";
import { HiLightningBolt } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";

const PageSettings = () => {
   const navigate = useNavigate();
   return (
      <div className="w-full h-full flex-1 flex flex-col  pt-3">
         <div className="header-container w-full flex justify-between h-8 px-4">
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
               <h5 className="font-normal text-[14px]">Settings</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="setting-items w-full flex flex-col mt-6 px-4">
            <div
               className="active-network h-[44px] w-full rounded-[10px] bg-[#252525] flex justify-between px-3 cursor-pointer"
               onClick={() => {
                  navigate("/settings/activenetwork");
               }}
            >
               <div className="left flex items-center gap-2">
                  <div className="img-container w-[30px] flex">
                     <img src={ActiveNetworkIcon} alt="" />
                  </div>
                  <div className="title-container">
                     <h5 className="text-[14px]">Active Network</h5>
                  </div>
               </div>
               <div className="right flex gap-4 items-center">
                  <div className="active-network-img-container w-[28px] h-[28px] rounded-full bg-main-green flex items-center justify-center">
                     <img src={BNBIcon} alt="" />
                  </div>
                  <div className="arrow-icon">
                     <FaArrowRight className="text-main-green w-[14px] h-auto" />
                  </div>
               </div>
            </div>
            <div className="setting-group w-full flex flex-col h-auto rounded-[10px] bg-[#252525] mt-4">
               <div
                  className="w-full flex justify-between h-[44px] px-4 cursor-pointer"
                  onClick={() => {
                     navigate("/settings/preferences");
                  }}
               >
                  <div className="left flex items-center gap-2">
                     <div className="img-container w-[30px] flex">
                        <img src={PreferencesIcon} alt="" />
                     </div>
                     <div className="title-container">
                        <h5 className="text-[14px]">Preferences</h5>
                     </div>
                  </div>
                  <div className="right flex gap-4 items-center">
                     <div className="arrow-icon">
                        <FaArrowRight className="text-main-green w-[14px] h-auto" />
                     </div>
                  </div>
               </div>
               <div className="line w-full h-[1px] bg-[#666666]"></div>
               <div
                  className="w-full flex justify-between h-[44px] px-4 cursor-pointer"
                  onClick={() => {
                     navigate("/settings/securityprivacy");
                  }}
               >
                  <div className="left flex items-center gap-2">
                     <div className="img-container w-[30px] flex">
                        <img src={SecurityIcon} alt="" />
                     </div>
                     <div className="title-container">
                        <h5 className="text-[14px]">Security & Privacy</h5>
                     </div>
                  </div>
                  <div className="right flex gap-4 items-center">
                     <div className="arrow-icon">
                        <FaArrowRight className="text-main-green w-[14px] h-auto" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="setting-group w-full flex flex-col h-auto rounded-[10px] bg-[#252525] mt-4">
               <div className="w-full flex justify-between h-[44px] cursor-pointer">
                  <a
                     href="https://www.google.com/"
                     target="_blank"
                     className="w-full flex justify-between h-[44px] px-4 cursor-pointer"
                  >
                     <div className="left flex items-center gap-2">
                        <div className="img-container w-[30px] flex">
                           <img src={TermsofuseIcon} alt="" />
                        </div>
                        <div className="title-container">
                           <h5 className="text-[14px]">Terms of Use</h5>
                        </div>
                     </div>
                     <div className="right flex gap-4 items-center">
                        <div className="arrow-icon">
                           <FaArrowRight className="text-main-green w-[14px] h-auto" />
                        </div>
                     </div>
                  </a>
               </div>
               <div className="line w-full h-[1px] bg-[#666666]"></div>
               <div className="w-full flex justify-between h-[44px] cursor-pointer">
                  <a
                     href="https://www.google.com/"
                     target="_blank"
                     className="w-full flex justify-between h-[44px] px-4 cursor-pointer"
                  >
                     <div className="left flex items-center gap-2">
                        <div className="img-container w-[30px] flex">
                           <img src={PrivacyPolicyIcon} alt="" />
                        </div>
                        <div className="title-container">
                           <h5 className="text-[14px]">Privacy Policy</h5>
                        </div>
                     </div>
                     <div className="right flex gap-4 items-center">
                        <div className="arrow-icon">
                           <FaArrowRight className="text-main-green w-[14px] h-auto" />
                        </div>
                     </div>
                  </a>
               </div>
               <div className="line w-full h-[1px] bg-[#666666]"></div>
               <div className="w-full flex justify-between h-[44px] cursor-pointer">
                  <a
                     href="https://www.google.com/"
                     target="_blank"
                     className="w-full flex justify-between h-[44px] px-4 cursor-pointer"
                  >
                     <div className="left flex items-center gap-2">
                        <div className="img-container w-[30px] flex">
                           <img src={SupportCenterIcon} alt="" />
                        </div>
                        <div className="title-container">
                           <h5 className="text-[14px]">Support Center</h5>
                        </div>
                     </div>
                     <div className="right flex gap-4 items-center">
                        <div className="arrow-icon">
                           <FaArrowRight className="text-main-green w-[14px] h-auto" />
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div className="active-network h-[44px] w-full rounded-[10px] bg-[#252525] flex justify-between px-[19px] mt-4">
               <div className="left flex items-center gap-2">
                  <div className="img-container w-[30px] flex">
                     <img src={LogoIcon} alt="" />
                  </div>
                  <div className="title-container">
                     <h5 className="text-[14px]">Version</h5>
                  </div>
               </div>
               <div className="right flex gap-4 items-center">
                  <div className="arrow-icon">
                     <h5 className="text-[14px] font-medium">1.0.2</h5>
                  </div>
               </div>
            </div>
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
                     <GoHomeFill className="h-[28px] w-auto text-white" />
                     <h5 className="text-[12px] -mt-[0px] text-white">Home</h5>
                  </div>
                  <div
                     className="item flex flex-col h-full w-auto items-center justify-center cursor-pointer"
                     onClick={() => {
                        navigate("/activity");
                     }}
                  >
                     <HiLightningBolt className="h-[28px] w-auto text-white" />
                     <h5 className="text-[12px] -mt-[0px] text-white">
                        Activity
                     </h5>
                  </div>
                  <div
                     className="item flex flex-col h-full w-auto items-center justify-center cursor-pointer"
                     onClick={() => {
                        navigate("/settings");
                     }}
                  >
                     <IoMdSettings className="h-[28px] w-auto text-main-green" />
                     <h5 className="text-[12px] -mt-[0px] text-main-green">
                        Settings
                     </h5>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PageSettings;
