import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BtcImage from "../assets/images/background-images/Main/Tokens/btc.png";

const PageSendToken = () => {
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
         tokenName: "Litecoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55,569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69,589.33",
         tokenImage: BtcImage,
         tokenId: 1,
      },
      {
         tokenName: "DenemeCoin",
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
   const [searchQuery, setSearchQuery] = useState("");
   const filteredTokens = tokens.filter((token) =>
      token.tokenName.toLowerCase().includes(searchQuery.toLowerCase())
   );
   return (
      <div className="page-send-token w-full h-full flex flex-1 flex-col px-4 pt-2">
         <div className="header-container w-full flex justify-between h-8">
            <div className="back-container flex items-center w-8">
               <button
                  onClick={() => {
                     navigate("/main");
                  }}
               >
                  <FaArrowLeft className="text-main-green" />
               </button>
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-normal text-[14px]">Select Token</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="title-container w-full flex flex-col items-center mt-6">
            <h5 className="text-[14px]">Which token do you want to send?</h5>
            <p className="text-[12px] text-[#B9B9B9]">
               You will enter the recipient and amount next
            </p>
         </div>
         <div className="search-input-container w-full flex mt-5 h-[36px] relative">
            <div className="search-icon-container absolute left-4 top-[10px]">
               <BiSearch className="text-[#B9B9B9] h-[18px] w-auto" />
            </div>
            <input
               type="text"
               className="w-full bg-black border border-main-green rounded-full h-full pl-10 text-sm py-1 outline-none"
               placeholder="Search"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
            />
         </div>
         <div className="tokens-list coins-list-container w-full flex flex-col gap-5 overflow-y-auto h-[380px]  pb-1 pt-1 mt-6 pr-4 pl-3">
            {filteredTokens.map((token) => (
               <div
                  className="token-container w-full flex justify-between cursor-pointer"
                  onClick={() => {
                     navigate(`/sendtoken/${token.tokenId}`);
                  }}
               >
                  <div className="left w-full flex gap-2">
                     <div className="img-container">
                        <img
                           src={token.tokenImage}
                           alt="img"
                           className="h-[36px] w-auto"
                        />
                     </div>
                     <div className="name-container flex flex-col">
                        <p className="text-[#B9B9B9] text-[12px]">
                           {token.tokenShortName}
                        </p>
                        <h5 className="uppercase text-[14px] -mt-[2px] font-medium">
                           {token.tokenName}
                        </h5>
                     </div>
                  </div>
                  <div className="right h-full flex items-center">
                     <h5 className="font-medium">{token.tokenCurrentAmount}</h5>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default PageSendToken;
