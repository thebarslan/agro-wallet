import React from "react";
import BtcImage from "../assets/images/background-images/Main/Tokens/btc.png";
import { FaArrowDown, FaArrowLeft, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { HiLightningBolt } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";

const PageActivity = () => {
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
   return (
      <div className="page-activity w-full h-full flex-1 flex flex-col  pt-3">
         <div className="header-container w-full flex justify-between h-8 px-4">
            <div className="back-container flex items-center w-8">
               <button
                  onClick={() => {
                     navigate(`/main`);
                  }}
               >
                  <FaArrowLeft className="text-main-green" />
               </button>
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-normal text-[14px]">Activities</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="activity-outer-container w-full h-full px-4 flex flex-col overflow-y-hidden">
            <div className="activity-list w-full h-full tokens-list pr-5 gap-[20px] flex flex-col mt-6 overflow-y-auto pb-4 mb-6">
               {activities.map((activity) => {
                  const token = tokens.find(
                     (token) => token.tokenId === activity.tokenId
                  );
                  return (
                     <div
                        className="activity w-full flex flex-col cursor-pointer"
                        key={activity.activityId}
                        onClick={() => {
                           navigate(`/activitydetails/${activity.activityId}`);
                        }}
                     >
                        <div className="activity-status flex gap-2 items-center">
                           {activity.isSent ? (
                              <FaArrowUp className="h-[10px] w-auto text-red-400" />
                           ) : (
                              <FaArrowDown className="h-[10px] w-auto text-main-green" />
                           )}
                           <p className="text-[11px] text-[#B9B9B9]">
                              {activity.isSent ? "Sent" : "Received"}
                           </p>
                        </div>
                        <div className="info w-full flex justify-between">
                           <div className="left flex gap-2">
                              <div className="img-container">
                                 <img
                                    src={token.tokenImage}
                                    className="w-[32px] h-[32px]"
                                 />
                              </div>
                              <div className="name-and-address flex flex-col justify-center">
                                 <h5 className="text-[13px]">
                                    {token.tokenName}
                                 </h5>
                                 {activity.isSent ? (
                                    <h5 className="text-[12px] -mt-[3px] text-[#B9B9B9]">
                                       To {activity.walletAddress}
                                    </h5>
                                 ) : (
                                    <h5 className="text-[12px] -mt-[3px] text-[#B9B9B9]">
                                       From {activity.walletAddress}
                                    </h5>
                                 )}
                              </div>
                           </div>
                           <div className="right flex flex-col items-end">
                              <p className="text-[12px] text-[#B9B9B9]">
                                 May 25, 16:57
                              </p>
                              <h5 className="text-[14px]">
                                 {activity.isSent ? `-` : `+`}
                                 {activity.amount}
                              </h5>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         <div className="bottom-navbar w-full h-auto items-end flex">
            <div className="navbar flex w-full h-[56px] bg-[#121212] px-3">
               <div className="navbar-items w-full flex justify-between h-full items-center px-8">
                  <div
                     className="item flex flex-col h-full w-auto items-center justify-center cursor-pointer"
                     onClick={() => {
                        navigate("/main");
                     }}
                  >
                     <GoHomeFill className="h-[28px] w-auto text-white" />
                     <h5 className="text-[12px] -mt-[0px] text-white">Home</h5>
                  </div>
                  <div
                     className="item flex flex-col h-full w-auto items-center justify-center cursor-pointer"
                     onClick={() => {
                        navigate("/activity");
                     }}
                  >
                     <HiLightningBolt className="h-[28px] w-auto text-main-green" />
                     <h5 className="text-[12px] -mt-[0px] text-main-green">
                        Activity
                     </h5>
                  </div>
                  <div
                     className="item flex flex-col h-full w-auto items-center justify-center cursor-pointer"
                     onClick={() => {
                        navigate("/settings");
                     }}
                  >
                     <IoMdSettings className="h-[28px] w-auto" />
                     <h5 className="text-[12px] -mt-[0px]">Settings</h5>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PageActivity;
