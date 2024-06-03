import React, { useState } from "react";
import SmallLogo from "../assets/images/logos/logo-small.png";
import Lock from "../assets/images/icons/lock.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PageCreatePassword = () => {
   const navigate = useNavigate();

   const [password, setPassword] = useState("");
   const [passwordAgain, setPasswordAgain] = useState("");

   const [passwordCanSee, setPasswordCanSee] = useState(false);
   const [passwordAgainCanSee, setPasswordAgainCanSee] = useState(false);

   const [passwordSecurityLevel, setPasswordSecurityLevel] = useState(0);

   const handlePasswordInputChange = (e) => {
      const password = e.target.value;
      setPassword(password);

      let level = 0;

      if (password.length >= 8) {
         const hasCapitalLetter = /[A-Z]/.test(password);
         const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

         if (hasCapitalLetter) {
            level = 1;
            if (hasSpecialChar) {
               level = 2;
            }
         }
      }

      setPasswordSecurityLevel(level);
   };

   const [errorText, setErrorText] = useState("");
   const [isError, setIsError] = useState("");

   const checkIfErrorExists = () => {
      let isErrorExists = false;
      if (password.length === 0) {
         isErrorExists = true;
         handleErrorSetting("You have to enter a password.");
         return true;
      }
      if (!customCheckboxChecked) {
         isErrorExists = true;
         handleErrorSetting("You have to check the checkbox");
         return true;
      }
      if (passwordSecurityLevel === 0) {
         isErrorExists = true;
         handleErrorSetting("Your password is not strong enough");
         return true;
      }
      if (password !== passwordAgain) {
         isErrorExists = true;
         handleErrorSetting("Your passwords are not same.");
         return true;
      }
      return isErrorExists;
   };
   const handleErrorSetting = (text) => {
      setIsError(true);
      setErrorText(text);
   };
   const handleCreatePassword = () => {
      let isError = checkIfErrorExists();
      if (!isError) {
         navigate("/protectyourwallet");
      }
   };
   const [customCheckboxChecked, setCustomCheckboxChecked] = useState(false);
   return (
      <div className="page-create-password w-full h-full flex-1 flex flex-col px-5 pt-4">
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
               <h5 className="font-semibold text-[26px]">Create Password</h5>
            </div>
            <div className="title-inside-container px-6">
               <p className="font-normal text-[13px] text-center">
                  Your password unlocks your Agro wallet only on this device.
               </p>
            </div>
         </div>
         <div className="inputs-container w-full flex flex-col gap-4 mt-5">
            <div className="input-container w-full flex flex-col">
               <div className="title-container px-1">
                  <p className="text-[12px]">New Password</p>
               </div>
               <div className="input-inside-container w-full mt-1 relative">
                  <div className="lock-img-container absolute left-4 top-[12px]">
                     <img src={Lock} className="h-[22px] w-auto" />
                  </div>
                  <input
                     type={`${passwordCanSee ? `text` : `password`}`}
                     value={password}
                     onChange={(e) => handlePasswordInputChange(e)}
                     className="w-full h-[46px] rounded-[10px] bg-black border-2 border-main-green px-12 outline-none text-sm"
                  />
                  <div className="lock-img-container absolute right-4 top-[12px]">
                     <button onClick={() => setPasswordCanSee(!passwordCanSee)}>
                        {passwordCanSee ? (
                           <IoEyeOutline className="h-[24px] w-auto" />
                        ) : (
                           <IoEyeOffOutline className="h-[24px] w-auto" />
                        )}
                     </button>
                  </div>
               </div>

               <div className="password-security-level-container px-1 mt-1 h-[12px]">
                  {password !== "" && (
                     <h5 className="text-[11px]  transition-all duration-500">
                        Password security level:{" "}
                        {passwordSecurityLevel === 0 && (
                           <span className="text-red-500 font-medium text-[12px]">
                              Poor
                           </span>
                        )}
                        {passwordSecurityLevel === 1 && (
                           <span className="text-yellow-500 font-medium text-[12px]">
                              Okay
                           </span>
                        )}
                        {passwordSecurityLevel === 2 && (
                           <span className="text-main-green font-medium text-[12px]">
                              Good
                           </span>
                        )}
                     </h5>
                  )}
               </div>
            </div>
            <div className="input-container w-full flex flex-col">
               <div className="title-container px-1">
                  <p className="text-[12px]">Confirm Password</p>
               </div>
               <div className="input-inside-container w-full mt-1 relative">
                  <div className="lock-img-container absolute left-4 top-[12px]">
                     <img src={Lock} className="h-[22px] w-auto" />
                  </div>
                  <input
                     type={`${passwordAgainCanSee ? `text` : `password`}`}
                     value={passwordAgain}
                     onChange={(e) => setPasswordAgain(e.target.value)}
                     className="w-full h-[46px] rounded-[10px] bg-black border-2 border-main-green px-12 outline-none text-sm"
                  />
                  <div className="lock-img-container absolute right-4 top-[12px]">
                     <button
                        onClick={() =>
                           setPasswordAgainCanSee(!passwordAgainCanSee)
                        }
                     >
                        {passwordAgainCanSee ? (
                           <IoEyeOutline className="h-[24px] w-auto" />
                        ) : (
                           <IoEyeOffOutline className="h-[24px] w-auto" />
                        )}
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="password-info-container w-full px-1 items-center mt-2">
            <p className="text-[11px]">
               Password must have at least 8 characters and a capital letter!
            </p>
         </div>
         <div className="steps-container w-full flex flex-col mt-6 gap-1">
            <div className="steps-visual-container px-10 flex items-center">
               <div className="ball h-[16px] w-[16px] rounded-full bg-main-green flex-shrink-0"></div>
               <div className="line w-full h-[2px] bg-white"></div>
               <div className="ball h-[16px] w-[16px] rounded-full bg-white flex-shrink-0"></div>
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
         <div className="confirmation-container w-full flex gap-2 mt-6 items-center">
            <div className="checkbox-container w-auto">
               <button
                  className="border-btn-green border-2 rounded-md bg-black h-[20px] w-[20px] flex items-center justify-center"
                  onClick={() =>
                     setCustomCheckboxChecked(!customCheckboxChecked)
                  }
               >
                  {customCheckboxChecked && (
                     <FaCheck className="w-2/3 h-auto text-btn-green" />
                  )}
               </button>
            </div>
            <div className="text-container w-full">
               <p className="text-[10.5px] whitespace-nowrap">
                  I understand Agro can't recover this password for me.
               </p>
            </div>
         </div>

         <div className="error-text-container my-1 w-full flex items-center justify-center h-[20px]">
            {isError && (
               <h5 className="text-red-400 text-[11px]">{errorText}</h5>
            )}
         </div>

         <div className="button-container w-full flex mt-0">
            <div className="button-container w-full flex">
               <button
                  className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={handleCreatePassword}
               >
                  Create Password
               </button>
            </div>
         </div>
      </div>
   );
};

export default PageCreatePassword;
