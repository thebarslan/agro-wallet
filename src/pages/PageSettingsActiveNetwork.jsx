import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import BNBIcon from "../assets/images/icons/bnbicon.png";

const PageSettingsActiveNetwork = () => {
   const [activeChain, setActiveChain] = useState(0);
   const [isChain, setIsChain] = useState(false);
   const chains = [
      {
         chainName: "BNB Chain",
         chainId: 0,
         chainImg: BNBIcon,
      },
      {
         chainName: "Chain2",
         chainId: 1,
         chainImg: BNBIcon,
      },
      {
         chainName: "Chain3",
         chainId: 2,
         chainImg: BNBIcon,
      },
      {
         chainName: "Chain4",
         chainId: 3,
         chainImg: BNBIcon,
      },
      {
         chainName: "Chain5",
         chainId: 4,
         chainImg: BNBIcon,
      },
      {
         chainName: "Chain6",
         chainId: 5,
         chainImg: BNBIcon,
      },
   ];
   const navigate = useNavigate();
   return (
      <div className="page-settings-preferences w-full h-full flex-1 flex flex-col px-4 pt-3">
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
               <h5 className="font-normal text-[14px]">Active Network</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div
            className={`currency-selector overflow-y-hidden w-full flex flex-col mt-6 bg-[#252525] px-5 rounded-[10px] py-3 ${
               isChain ? `open` : ``
            }`}
         >
            <div
               className="top w-full flex justify-between h-auto items-center cursor-pointer px-1"
               onClick={() => {
                  setIsChain(!isChain);
               }}
            >
               <div className="title">
                  <h5 className="text-[13px]">Active Network</h5>
               </div>
               <div className="currency flex items-center gap-2">
                  <div className="img-container w-[24px] h-[24px] bg-main-green rounded-full flex items-center justify-center">
                     <img
                        src={chains[activeChain].chainImg}
                        className="h-[20px] w-auto"
                     />
                  </div>
                  <h5 className="text-[12px]">
                     {chains[activeChain].chainName}
                  </h5>
                  <GoChevronDown className="text-main-green w-6 h-auto" />
               </div>
            </div>
            <div className="line w-full h-[1px] bg-[#666666] mt-3"></div>
            <div className="currencies w-full flex flex-col gap-5 mt-3 px-1">
               {chains.map((chain) => (
                  <div
                     className="currency w-full cursor-pointer"
                     onClick={() => setActiveChain(chain.chainId)}
                     key={chain.chainId}
                  >
                     <div className="chain-inside-container flex gap-2">
                        <div className="img-container w-[24px] h-[24px] bg-main-green rounded-full flex items-center justify-center">
                           <img
                              src={chain.chainImg}
                              className="h-[20px] w-auto"
                           />
                        </div>
                        <h5>{chain.chainName}</h5>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default PageSettingsActiveNetwork;
