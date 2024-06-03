import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BtcImage from "../assets/images/background-images/Main/Tokens/btc.png";
import { FaArrowLeft } from "react-icons/fa";

const PageSendTokenAmount = () => {
   const [amountValue, setAmountValue] = useState(0);
   const navigate = useNavigate();
   const tokens = [
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69589.33",
         tokenImage: BtcImage,
         tokenId: 0,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69589.33",
         tokenImage: BtcImage,
         tokenId: 1,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69589.33",
         tokenImage: BtcImage,
         tokenId: 2,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69589.33",
         tokenImage: BtcImage,
         tokenId: 3,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69589.33",
         tokenImage: BtcImage,
         tokenId: 4,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69589.33",
         tokenImage: BtcImage,
         tokenId: 5,
      },
      {
         tokenName: "Bitcoin",
         tokenShortName: "BTC",
         tokenCurrentValue: "55569.21",
         tokenCurrentRaiseRate: 3,
         tokenCurrentAmount: 1.256,
         tokenCurrentBalance: "69589.33",
         tokenImage: BtcImage,
         tokenId: 6,
      },
   ];

   const handleAmountInput = (e) => {
      if (e.target.value > token.tokenCurrentAmount) {
         setAmountValue(token.tokenCurrentAmount);
         return;
      }
      setAmountValue(e.target.value);
   };
   const { tokenId } = useParams();
   const token = tokens.find((t) => t.tokenId === parseInt(tokenId));

   if (!token) {
      return <div>Token not found</div>;
   }
   return (
      <div className="page-send-token-amount w-full flex flex-1 flex-col h-full px-4 pt-3">
         <div className="header-container w-full flex justify-between h-8">
            <div className="back-container flex items-center w-8">
               <button
                  onClick={() => {
                     navigate(`/sendtoken/${token.tokenId}`);
                  }}
               >
                  <FaArrowLeft className="text-main-green" />
               </button>
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-normal text-[14px]">Enter Amount</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="user-info-container w-full flex gap-2 mt-8">
            <div className="user-img-container">
               <div className="user-img w-[32px] h-[32px] rounded-full bg-main-green"></div>
            </div>
            <div className="user-info-container flex flex-col">
               <h5 className="text-[14px]">0x69S5569S***AAA</h5>
               <p className="text-[#B9B9B9] text-[11px] -mt-[2px]">Send to</p>
            </div>
         </div>
         <div className="line w-full h-[1px] bg-main-green my-4"></div>
         <div className="input-bigger-container w-full flex justify-betweenitems-center">
            <div className="max-button-container flex-[2] h-full flex items-center">
               <button
                  className="bg-[#252525] rounded-full py-[2px] px-[8px] text-[12px]"
                  onClick={() => {
                     setAmountValue(parseFloat(token.tokenCurrentAmount));
                  }}
               >
                  MAX
               </button>
            </div>
            <div className="input-container w-full flex flex-col flex-[5]">
               <div className="input-inner-container flex items-center w-full  justify-center">
                  <input
                     type="number"
                     className="bg-transparent flex justify-center items-center text-center outline-none text-lg font-normal w-auto"
                     value={amountValue}
                     onChange={(e) => handleAmountInput(e)}
                  />
               </div>
               <div className="value-container text-[14px] text-[#B9B9B9] w-full flex text-center items-center justify-center">
                  <h5>{amountValue * parseFloat(token.tokenCurrentValue)}</h5>
               </div>
            </div>
            <div className="empty-container w-full flex-[2] flex-shrink-0 items-center justify-center flex">
               <h5 className="text-[14px]">{token.tokenShortName}</h5>
            </div>
         </div>
         <div className="line w-full h-[1px] bg-main-green my-4"></div>
         <div className="balance-info w-full flex flex-col text-[14px] gap-2">
            <div className="your-balance w-full flex justify-between">
               <h5 className="text-[#B9B9B9]">Your Balance</h5>
               <h5>= ${token.tokenCurrentBalance}</h5>
            </div>
            <div className="your-balance w-full flex justify-between">
               <h5 className="text-[#B9B9B9]">Network Fee</h5>
               <h5>Free</h5>
            </div>
         </div>
         <div className="line w-full h-[1px] bg-main-green my-4"></div>
         <div className="button-container w-full flex mt-3 h-full items-end mb-[20px] px-1">
            <button
               className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
               onClick={() => {
                  navigate(`/previewsendtoken`);
               }}
            >
               Next
            </button>
         </div>
      </div>
   );
};

export default PageSendTokenAmount;
