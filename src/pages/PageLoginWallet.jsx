import React, { useState } from "react";
import LogoMedium from "../assets/images/logos/logo-medium.png";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Lock from "../assets/images/icons/lock.png";
import { useNavigate } from "react-router-dom";

const PageLoginWallet = () => {
   const navigate = useNavigate();

   const passwordFromBackend = "123";
   const [password, setPassword] = useState("");
   const [passwordCanSee, setPasswordCanSee] = useState(false);

   const [isError, setIsError] = useState(false);
   const [errorText, setErrorText] = useState("");

   const handleLogin = () => {
      if (passwordFromBackend !== password) {
         setIsError(true);
         setErrorText("Your password is not correct");
         return;
      }
      navigate("/main");
   };
   return (
      <div className="page-login-wallet w-full h-full flex-1 flex flex-col relative">
         <div className="header-container w-full flex flex-col h-auto items-center mt-32 gap-1 relative z-50">
            <div className="logo-container">
               <img
                  src={LogoMedium}
                  alt="agro-logo"
                  className="w-[52px] h-[52px]"
               />
            </div>
            <div className="title-container">
               <h5 className="font-semibold text-[20px]">Agro Wallet</h5>
            </div>
         </div>
         <div className="inputs-container w-full flex flex-col gap-4 mt-5 px-5">
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
                     <button onClick={() => setPasswordCanSee(!passwordCanSee)}>
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
         <div className="error-container w-full h-[20px] my-2 flex justify-center items-center">
            {isError && (
               <h5 className="text-[12px] text-red-400">{errorText}</h5>
            )}
         </div>
         <div className="button-container w-full flex mt-4 px-5">
            <div className="button-container w-full flex">
               <button
                  className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={handleLogin}
               >
                  Create Password
               </button>
            </div>
         </div>
         <div className="text-container w-full px-7 flex items-center justify-center text-center mt-6">
            <p className="text-[15px]">
               Your wallet won't open? You can delete your wallet and set up a
               new one.
            </p>
         </div>
         <div className="text-container w-full px-7 flex items-center justify-center text-center mt-6">
            <button
               onClick={() => {
                  navigate("/createpassword");
               }}
            >
               <p className="text-[15px] text-main-green">Reset Wallet</p>
            </button>
         </div>
      </div>
   );
};

export default PageLoginWallet;
