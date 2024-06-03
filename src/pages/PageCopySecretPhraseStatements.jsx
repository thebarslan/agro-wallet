import React, { useEffect, useState } from "react";
import SmallLogo from "../assets/images/logos/logo-small.png";
import { IoMdCopy } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PageCopySecretPhraseStatements = () => {
   const navigate = useNavigate();
   const phraseText =
      "sight,veteran,spatial,nerve,practice,furnace,happy,jewel,east,big,word,pitch";
   const [phraseArray, setPhraseArray] = useState([]);

   useEffect(() => {
      setPhraseArray(phraseText.split(","));
   }, []);

   // Split the phraseArray into two columns
   const leftColumn = phraseArray.slice(0, Math.ceil(phraseArray.length / 2));
   const rightColumn = phraseArray.slice(Math.ceil(phraseArray.length / 2));

   const [copied, setCopied] = useState(false);
   const handleCopy = () => {
      navigator.clipboard.writeText(phraseText);
      setCopied(true);
   };
   return (
      <div className="page-copy-secret-phrase-statements w-full h-full flex-1 flex flex-col px-5 pt-4">
         <div className="header-container w-full flex justify-between h-8">
            <div className="logo-container flex items-center w-8">
               <img src={SmallLogo} alt="agro-logo" />
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-semibold text-[15px]">Agro Wallet</h5>
            </div>
            <div className="empty-container flex w-8"></div>
         </div>
         <div className="title-container w-full flex flex-col items-center mt-3 gap-2">
            <div className="title-inside-container w-full flex flex-col">
               <h5 className="font-semibold text-[26px] text-center">
                  Write down your secret
               </h5>
               <h5 className="font-semibold text-[26px] text-center -mt-2">
                  phrase statements.
               </h5>
            </div>
            <div className="title-inside-container px-6">
               <p className="font-normal text-[13px] text-center">
                  This is your phrase rescue statement. Write it down and keep
                  it in a safe place.
               </p>
            </div>
         </div>
         <div className="phrases-bigger-container w-full flex flex-col gap-4 px-6 pt-3 pb-3 border-2 border-white rounded-lg mt-3">
            <div className="phrases-container   rounded-lg grid grid-cols-2 gap-x-8">
               <div className="left-column flex flex-col gap-2">
                  {leftColumn.map((phrase, index) => (
                     <div
                        className="phrase-container w-full flex items-center gap-1"
                        key={index}
                     >
                        <h5 className="text-[12px] w-[20px]">{index + 1}</h5>
                        <div className="phrase-inside-container w-full py-[2px] border border-main-green rounded-full flex items-center justify-center">
                           <h5 className="phrase text-[11px]">{phrase}</h5>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="right-column flex flex-col gap-2">
                  {rightColumn.map((phrase, index) => (
                     <div
                        className="phrase-container w-full flex items-center gap-1"
                        key={index + 1 + leftColumn.length}
                     >
                        <h5 className="text-[12px] w-[20px]">
                           {index + 1 + leftColumn.length}
                        </h5>
                        <div className="phrase-inside-container w-full py-[2px] border border-main-green rounded-full flex items-center justify-center">
                           <h5 className="phrase text-[11px]">{phrase}</h5>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="copy-button-container w-full flex items-center justify-center mt-3">
            {copied ? (
               <div className="copied w-[120px] h-[40px] rounded-xl bg-main-green text-black border-2 border-main-green flex gap-2 items-center justify-center">
                  <FaCheck className="h-[24px] w-auto text-white" />
                  <h5 className="text-white text-sm font-medium">Copied</h5>
               </div>
            ) : (
               <button
                  className="w-[120px] h-[40px] rounded-xl bg-black border-2 border-main-green flex items-center justify-center gap-2"
                  onClick={handleCopy}
               >
                  <IoMdCopy className="h-[24px] w-auto text-white" />
                  <h5 className="text-white text-sm">Copy</h5>
               </button>
            )}
         </div>
         <div className="steps-container w-full flex flex-col mt-3 gap-1">
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
         <div className="button-container w-full flex mt-3">
            <div className="button-container w-full flex">
               <button
                  className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={() => {
                     navigate("/confirmphrases");
                  }}
               >
                  Next
               </button>
            </div>
         </div>
      </div>
   );
};

export default PageCopySecretPhraseStatements;
