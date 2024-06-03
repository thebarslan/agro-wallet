import React from "react";
import { FaArrowDown, FaArrowLeft, FaRegCopy } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import BtcImage from "../assets/images/background-images/Main/Tokens/btc.png";

const PageActivityDetails = () => {
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
   const activities = [
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
         tokenId: 2,
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
      {
         isSent: false,
         tokenId: 0,
         walletAddress: "0x6839***1F2A",
         date: Date.now,
         amount: "2,55.68",
         activityId: 4,
      },
      {
         isSent: false,
         tokenId: 0,
         walletAddress: "0x6839***1F2A",
         date: Date.now,
         amount: "2,55.68",
         activityId: 5,
      },
      {
         isSent: false,
         tokenId: 0,
         walletAddress: "0x6839***1F2A",
         date: Date.now,
         amount: "2,55.68",
         activityId: 6,
      },
   ];
   const navigate = useNavigate();
   const { activityId } = useParams();
   const activity = activities.find(
      (t) => t.activityId === parseInt(activityId)
   );
   const token = tokens.find((token) => token.tokenId === activity.tokenId);

   if (!activity) {
      return <div>Activity not found</div>;
   }
   return (
      <div className="w-full h-full flex-1 flex flex-col px-4 pt-3">
         <div className="header-container w-full flex justify-between h-8">
            <div className="back-container flex items-center w-8">
               <button
                  onClick={() => {
                     navigate(`/activity`);
                  }}
               >
                  <FaArrowLeft className="text-main-green" />
               </button>
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-normal text-[14px]">Activity Detail</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="activity-info w-full flex items-center mt-8 flex-col">
            <div className="coin-img">
               <img src={token.tokenImage} alt="" />
            </div>
            <div className="activity-status mt-2">
               <h5>{activity.isSent ? `Sent` : `Received`}</h5>
            </div>
            <div className="amount *:font-medium text-[26px] my-1">
               {activity.isSent ? (
                  <h5 className="text-red-400">
                     -{activity.amount} {token.tokenShortName}
                  </h5>
               ) : (
                  <h5 className="text-main-green">
                     +{activity.amount} {token.tokenShortName}
                  </h5>
               )}
            </div>
            <div className="date">
               <p className="text-[10px]">25 May 2024 at 16:57</p>
            </div>
         </div>
         <div className="line mt-6 mb-4 w-full h-[1px] bg-main-green"></div>
         <div className="from-to-who w-full flex flex-col">
            <div className="from w-full flex justify-between mb-2">
               <div className="left flex gap-2 items-center">
                  <div className="img-container">
                     <div className="img w-[32px] h-[32px] rounded-full bg-main-green text-white flex items-center justify-center">
                        <h5 className="font-medium">A</h5>
                     </div>
                  </div>
                  <div className="text-container">
                     <h5>From</h5>
                  </div>
               </div>
               <div className="right flex items-center">
                  <p className="text-[#B9B9B9] text-[13px]">0x6839***1F22A</p>
               </div>
            </div>
            <div className="arrow w-full flex items-center px-[10px]">
               <FaArrowDown className="text-main-green w-3 h-auto" />
            </div>
            <div className="from w-full flex justify-between mt-2">
               <div className="left flex gap-2 items-center">
                  <div className="img-container">
                     <div className="img w-[32px] h-[32px] rounded-full bg-main-green text-white flex items-center justify-center">
                        <h5 className="font-medium">A</h5>
                     </div>
                  </div>
                  <div className="text-container">
                     <h5>Contract</h5>
                  </div>
               </div>
               <div className="right flex items-center">
                  <p className="text-[#B9B9B9] text-[13px]">0x34839***1GC5</p>
               </div>
            </div>
         </div>
         <div className="line mt-6 mb-4 w-full h-[1px] bg-main-green"></div>
         <div className="infos w-full flex flex-col gap-1 text-[13px]">
            <div className="info w-full flex justify-between">
               <p className="text-[#B9B9B9]">Transaction Hash</p>
               <h5 className="flex items-center gap-2 flex-row-reverse">
                  <FaRegCopy
                     className="h-3 w-auto text-main-green cursor-pointer"
                     onClick={() => {
                        navigator.clipboard.writeText("0x****");
                     }}
                  />
                  0x****
               </h5>
            </div>
            <div className="info w-full flex justify-between">
               <p className="text-[#B9B9B9]">Network</p>
               <h5>BNB Chain</h5>
            </div>
            <div className="info w-full flex justify-between">
               <p className="text-[#B9B9B9]">Fee</p>
               <h5 className="text-main-green font-medium">0.0 BNB</h5>
            </div>
         </div>
      </div>
   );
};

export default PageActivityDetails;
