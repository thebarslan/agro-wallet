import React, { useEffect, useState } from "react";
import BtcImage from "../../assets/images/background-images/Main/Tokens/btc.png";
import LogoMedium from "../../assets/images/logos/logo-medium.png";
import {
   MdOutlineKeyboardArrowDown,
   MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Tokens = () => {
   const [isLoading, setIsLoading] = useState(true);
   const navigate = useNavigate();
   const tokens = [
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55,569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69,589.33",
         tokenImage: BtcImage,
         tokenId: 0,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55,569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69,589.33",
         tokenImage: BtcImage,
         tokenId: 1,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55,569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69,589.33",
         tokenImage: BtcImage,
         tokenId: 2,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55,569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69,589.33",
         tokenImage: BtcImage,
         tokenId: 3,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55,569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69,589.33",
         tokenImage: BtcImage,
         tokenId: 4,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55,569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69,589.33",
         tokenImage: BtcImage,
         tokenId: 5,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55,569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69,589.33",
         tokenImage: BtcImage,
         tokenId: 6,
      },
   ];

   useEffect(() => {
      // Set loading to false after 2 seconds
      const timeout = setTimeout(() => {
         setIsLoading(false);
      }, 1500);

      // Clear timeout on component unmount (cleanup)
      return () => clearTimeout(timeout);
   }, []);
   return (
      <div className="tokens h-[220px] w-full">
         {isLoading ? (
            <div className="loader-container w-full h-full flex items-center justify-center">
               <div className="loader"></div>
            </div>
         ) : (
            <div className="tokens-list overflow-y-auto h-full w-full flex flex-col gap-4 pt-2 pr-4">
               {tokens.map((token) => (
                  <div
                     className="token-container w-full h-[50px] flex justify-between pl-2 cursor-pointer"
                     onClick={() => {
                        navigate(`/tokendetails/${token.tokenId}`);
                     }}
                     key={token.tokenId}
                  >
                     <div className="left w-full h-full flex items-center gap-2">
                        <div className="img-container h-full w-auto relative">
                           <img src={token.tokenImage} alt="token" />
                           <div className="absolute w-[21px] h-[21px] bg-black border border-main-green -top-[6px] -left-[7px] rounded-full flex p-[4px]">
                              <img
                                 src={LogoMedium}
                                 alt="logo"
                                 className="w-full h-auto"
                              />
                           </div>
                        </div>
                        <div className="text-container flex flex-col h-full">
                           <h5 className="font-medium">
                              {token.tokenShortName}
                           </h5>
                           <div className="bottom-container flex gap-1">
                              <div className="left-container flex gap-[1px]">
                                 <h5 className="text-[#B9B9B9] text-[11px]">
                                    ${token.tokenCurrentValue}
                                 </h5>
                                 <div className="raise-container flex items-center">
                                    <MdOutlineKeyboardArrowUp className="text-main-green" />
                                    <h5 className="text-[11px] text-main-green -ml-[2px]">
                                       {token.tokenCurrentRaiseRate / 100}%
                                    </h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="right w-auto flex flex-col items-end h-full">
                        <h5 className="text-[16px]">
                           {token.tokenCurrentAmount}
                        </h5>
                        <h5 className="text-[12px] text-[#B9B9B9] -mt-1">
                           {token.tokenCurrentBalance}
                        </h5>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default Tokens;
