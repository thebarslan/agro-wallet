import React, { act } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BtcImage from "../assets/images/background-images/Main/Tokens/btc.png";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

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
const activity = [
   {
      isSent: true,
      tokenId: 0,
      walletAddress: "0x6839***1F2A",
      date: Date.now,
      amount: "2,55.68",
      activityId: 0,
   },
   {
      isSent: false,
      tokenId: 0,
      walletAddress: "0x6839***1F2A",
      date: Date.now,
      amount: "2,55.68",
      activityId: 1,
   },
   {
      isSent: true,
      tokenId: 0,
      walletAddress: "0x6839***1F2A",
      date: Date.now,
      amount: "2,55.68",
      activityId: 2,
   },
   {
      isSent: false,
      tokenId: 0,
      walletAddress: "0x6839***1F2A",
      date: Date.now,
      amount: "2,55.68",
      activityId: 3,
   },
];

const PageTokenDetails = () => {
   const navigate = useNavigate();
   const { tokenId } = useParams();
   const token = tokens.find((t) => t.tokenId === parseInt(tokenId));

   if (!token) {
      return <div>Token not found</div>;
   }
   return (
      <div className="page-token-details w-full h-full flex-1 flex flex-col px-4 pt-2">
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
               <h5 className="font-normal text-[14px]">Token Details</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="main-info-container w-full px-2 h-auto flex justify-between mt-4">
            <div className="left-side flex flex-col gap-2">
               <div className="coin-name-and-image flex gap-[6px]">
                  <div className="coin-img-container">
                     <img src={token.tokenImage} alt="token-img" />
                  </div>
                  <div className="coin-name-container flex flex-col">
                     <h5 className="text-[13px] text-[#B9B9B9]">
                        {token.tokenShortName}
                     </h5>
                     <h5 className="-mt-1 uppercase font-medium">
                        {token.tokenName}
                     </h5>
                  </div>
               </div>
               <div className="coin-price-container">
                  <h5 className="font-semibold text-[20px]">
                     ${token.tokenCurrentValue}
                  </h5>
               </div>
            </div>
            <div className="right-side-container h-full w-auto flex items-end pb-1">
               <div className="raise-container flex items-center h-auto">
                  <MdOutlineKeyboardArrowUp className="text-main-green text-[20px] mb-[1px]" />
                  <h5 className="text-[13px] text-main-green -ml-[1px]">
                     {token.tokenCurrentRaiseRate / 100}%
                  </h5>
               </div>
            </div>
         </div>
         <div className="line w-full h-[1px] bg-main-green my-2"></div>
         <div className="balance-container px-2 w-full flex flex-col">
            <h5 className="text-[13px] text-[#B9B9B9]">Balance</h5>
            <h5>{token.tokenCurrentAmount}</h5>
            <h5 className="text-main-green text-[18px] -mt-1">
               ${token.tokenCurrentBalance}
            </h5>
         </div>
         <div className="line w-full h-[1px] bg-main-green my-2"></div>
         <div className="stats-container w-full flex flex-col px-2 gap-[4px]">
            <h5 className="text-[#B9B9B9] text-[15px]">Stats</h5>
            <div className="stats-inner-container w-full flex flex-col justify-between text-[12px] gap-[3px]">
               <div className="day-volume w-full flex justify-between">
                  <h5>24h volume</h5>
                  <h5>566.666.669</h5>
               </div>
               <div className="day-volume w-full flex justify-between">
                  <h5>Market cap</h5>
                  <h5>999.558.569</h5>
               </div>
               <div className="day-volume w-full flex justify-between">
                  <h5>Chain</h5>
                  <h5>Ethereum</h5>
               </div>
            </div>
         </div>
         <div className="line w-full h-[1px] bg-main-green my-2"></div>
         <div className="activity-container w-full flex flex-col px-2 gap-[6px] ">
            <h5 className="text-[#B9B9B9] text-[15px]">Activity</h5>
            <div className="tokens-list activity-inner-container pr-3 w-full flex flex-col gap-4 h-[140px] overflow-y-auto">
               {activity.map((item) => (
                  <div
                     className="activity-item-container w-full flex justify-between"
                     key={item.activityId}
                  >
                     <div className="left flex flex-col gap-[2px]">
                        <div className="sent-or-received">
                           {item.isSent ? (
                              <div className="inside flex gap-1 items-center">
                                 <GoArrowUp className="text-red-400 text-[12px]" />
                                 <h5 className="text-[12px]">Sent</h5>
                              </div>
                           ) : (
                              <div className="inside flex gap-1 items-center">
                                 <GoArrowDown className="text-main-green text-[12px]" />
                                 <h5 className="text-[12px]">Received</h5>
                              </div>
                           )}
                        </div>
                        <div className="token-info-container flex gap-1">
                           <div className="token-img-container h-full flex items-center">
                              <img
                                 src={
                                    tokens.find(
                                       (t) => t.tokenId === item.tokenId
                                    ).tokenImage
                                 }
                                 className="w-[24px] h-[24px]"
                              />
                           </div>
                           <div className="token-name-and-wallet-address-container flex flex-col">
                              <h5 className="text-[12px]">
                                 {
                                    tokens.find(
                                       (t) => t.tokenId === item.tokenId
                                    ).tokenShortName
                                 }
                              </h5>
                              <h5 className="text-[#B9B9B9] text-[11px]">
                                 {item.walletAddress}
                              </h5>
                           </div>
                        </div>
                     </div>
                     <div className="right flex flex-col items-end justify-center">
                        <h5 className="text-[11px] text-[#B9B9B9] ">
                           Feb 08, 15:42
                        </h5>
                        <div className="amount-container">
                           <h5
                              className={`${
                                 item.isSent
                                    ? `text-red-400`
                                    : `text-main-green`
                              }`}
                           >
                              {item.amount}
                           </h5>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="buttons-container mt-6 h-full flex items-end mb-5">
            <div className="buttons-inner-container w-full flex flex-row-reverse gap-3">
               <div className="button-container w-full flex">
                  <button
                     className="w-full bg-black border-2 border-btn-green h-[40px] rounded-[10px] font-medium text-[12px] hover:bg-white hover:border-white hover:text-black transition-colors duration-300"
                     onClick={() => {
                        navigate("/deposit");
                     }}
                  >
                     Deposit
                  </button>
               </div>
               <div className="button-container w-full flex">
                  <button
                     className="w-full bg-btn-green h-[40px] rounded-[10px] font-medium text-[12px] hover:bg-white hover:text-black transition-colors duration-300"
                     onClick={() => {
                        navigate(`/sendtoken/${token.tokenId}`);
                     }}
                  >
                     Send
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PageTokenDetails;
