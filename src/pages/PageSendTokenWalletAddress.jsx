import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BtcImage from "../assets/images/background-images/Main/Tokens/btc.png";
import { FaArrowLeft } from "react-icons/fa";

const PageSendTokenWalletAddress = () => {
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
   const recentSentTransactions = [
      {
         mail: "albert.2@***.com",
         walletAddress: "0x6839***1F2A",
      },
      {
         mail: "albert.2@***.com",
         walletAddress: "0x6839***1F2A",
      },
      {
         mail: "albert.2@***.com",
         walletAddress: "0x6839***1F2A",
      },
   ];
   const { tokenId } = useParams();
   const token = tokens.find((t) => t.tokenId === parseInt(tokenId));

   if (!token) {
      return <div>Token not found</div>;
   }
   return (
      <div className="w-full h-full flex flex-1 flex-col px-4 pt-2">
         <div className="header-container w-full flex justify-between h-8">
            <div className="back-container flex items-center w-8">
               <button
                  onClick={() => {
                     navigate("/sendtoken");
                  }}
               >
                  <FaArrowLeft className="text-main-green" />
               </button>
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-normal text-[14px]">Enter Wallet Address</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="token-info-container w-full flex gap-2 mt-6 px-2">
            <div className="left-img-container">
               <img
                  src={token.tokenImage}
                  alt="token"
                  className="h-[36px] w-auto"
               />
            </div>
            <div className="name-container flex flex-col">
               <div className="top-container">
                  <h5 className="text-[#B9B9B9] text-[12px]">Send</h5>
               </div>
               <div className="bottom-container -mt-[2px]">
                  <h5 className="font-medium text-[15px]">{`${token.tokenName}(${token.tokenShortName})`}</h5>
               </div>
            </div>
         </div>
         <div className="input-container w-full flex px-1 mt-4">
            <input
               type="text"
               className="w-full bg-black border border-main-green rounded-full h-[36px] text-[12px] px-4"
               placeholder="Wallet Address"
            />
         </div>
         <div className="recents-container w-full flex flex-col mt-8 px-1">
            <div className="title-container w-full flex gap-2 items-center">
               <h5 className="text-[11px]">Recents</h5>
               <div className="line w-full h-[1px] bg-main-green"></div>
            </div>
            <div className="tokens-list recents-list-container pr-4 w-full flex flex-col mt-4 gap-6 py-1 h-[300px]">
               {recentSentTransactions.map((item) => (
                  <div className="recent-transaction-item w-full flex gap-2">
                     <div className="img-container">
                        <div className="img w-[36px] h-[36px] rounded-full bg-main-green flex items-center justify-center">
                           <h5 className="font-medium text-[20px]">A</h5>
                        </div>
                     </div>
                     <div className="info-container flex flex-col">
                        <h5 className="text-[13px]">{item.mail}</h5>
                        <h5 className="text-[11px] text-[#B9B9B9] -mt-[2px]">
                           {item.walletAddress}
                        </h5>
                     </div>
                  </div>
               ))}
            </div>
            <div className="button-container w-full flex mt-3">
               <button
                  className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={() => {
                     navigate(`/sendtoken/amount/${token.tokenId}`);
                  }}
               >
                  Next
               </button>
            </div>
         </div>
      </div>
   );
};

export default PageSendTokenWalletAddress;
