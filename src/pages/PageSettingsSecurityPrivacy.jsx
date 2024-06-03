import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import CloudImage from "../assets/images/background-images/Settings/cloud.png";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Lock from "../assets/images/icons/lock.png";

const PageSettingsSecurityPrivacy = () => {
   const navigate = useNavigate();
   const [password, setPassword] = useState("");
   const [passwordCanSee, setPasswordCanSee] = useState(false);
   const [isApplockActive, setIsApplockActive] = useState(false);
   const [isPasswordAuthentication, setIsPasswordAuthentication] =
      useState(false);
   const handleApplockActivation = () => {
      setIsApplockActive(true);
      setIsPasswordAuthentication(false);
   };
   const handleOpenPasswordActivation = () => {
      if (isApplockActive) {
         setIsApplockActive(false);
         return;
      }
      setIsPasswordAuthentication(true);
   };
   return (
      <div className="page-settings-security-privacy w-full h-full flex-1 flex flex-col px-4 pt-3 relative">
         <div className="header-container w-full flex justify-between h-8">
            <div className="back-container flex items-center w-8">
               <button
                  onClick={() => {
                     navigate(`/settings`);
                  }}
               >
                  <FaArrowLeft className="text-main-green" />
               </button>
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-normal text-[14px]">Security & Privacy</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="app-lock w-full mt-6 flex justify-between px-4 h-[40px] bg-[#252525] items-center rounded-[10px]">
            <h5 className="text-[14px]">App Lock</h5>
            <div className="applock-button h-full flex items-center">
               <button
                  className={`w-[36px] h-[20px] rounded-full border-2 border-main-green relative ${
                     isApplockActive ? `bg-main-green` : `bg-transparent`
                  }`}
                  onClick={handleOpenPasswordActivation}
               >
                  <div
                     className={`ball h-[14px] w-[14px] rounded-full  absolute top-[1px] transition-transform duration-500 ${
                        isApplockActive
                           ? `bg-[#252525] right-[1px]`
                           : `bg-main-green left-[1px]`
                     }`}
                  ></div>
               </button>
            </div>
         </div>
         <div className="delete-wallet w-full h-[40px] flex items-center px-4 rounded-[10px] bg-[#252525] mt-4 cursor-pointer">
            <h5 className="text-[14px] text-red-400 font-medium">
               Delete Wallet
            </h5>
         </div>
         {isPasswordAuthentication && (
            <div className="absolute password-authentication z-50 w-full h-full left-0 top-0 bg-black px-4 pt-5 flex flex-col">
               <div className="header-container w-full flex items-center">
                  <button
                     onClick={() => {
                        setIsPasswordAuthentication(false);
                     }}
                  >
                     <FaX className="text-main-green" />
                  </button>
               </div>
               <div className="title-container w-full flex flex-col items-center mt-6">
                  <div className="title flex flex-col items-center">
                     <h5 className="text-[32px] font-semibold text-center">
                        Enable password
                     </h5>
                     <h5 className="text-[32px] font-semibold text-center -mt-4">
                        authentication
                     </h5>
                  </div>
                  <div className="text text-center text-[13px] px-2">
                     <p>
                        Password authentication verifies your identity and
                        prevents unauthorized access of your account.
                     </p>
                  </div>
               </div>
               <div className="image-container w-full flex items-center justify-center">
                  <img src={CloudImage} alt="" className="h-[200px] w-auto" />
               </div>
               <div className="inputs-container w-full flex flex-col gap-4">
                  <div className="input-container w-full flex flex-col">
                     <div className="title-container px-1">
                        <p className="text-[12px]">Password</p>
                     </div>
                     <div className="input-inside-container w-full mt-1 relative">
                        <div className="lock-img-container absolute left-4 top-[12px]">
                           <img src={Lock} className="h-[22px] w-auto" />
                        </div>
                        <input
                           type={`${passwordCanSee ? `text` : `password`}`}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="w-full h-[46px] rounded-[10px] bg-black border-2 border-main-green px-12 outline-none text-sm"
                        />
                        <div className="lock-img-container absolute right-4 top-[12px]">
                           <button
                              onClick={() => setPasswordCanSee(!passwordCanSee)}
                           >
                              {passwordCanSee ? (
                                 <IoEyeOutline className="h-[24px] w-auto" />
                              ) : (
                                 <IoEyeOffOutline className="h-[24px] w-auto" />
                              )}
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="button-container w-full flex h-full items-end mb-5">
                  <div className="button-container w-full flex">
                     <button
                        className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
                        onClick={handleApplockActivation}
                     >
                        Confirm
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default PageSettingsSecurityPrivacy;
