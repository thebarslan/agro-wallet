import React from "react";
import { FaArrowLeft, FaRegCopy } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import NftImg from "../assets/images/background-images/Main/nfts/nftimg.png";
import ContractIcon from "../assets/images/icons/contract.png";
import MoneyBag from "../assets/images/icons/moneybag.png";

const PageNftDetails = () => {
   const nfts = [
      {
         ntfName: "Monkey #2873890A",
         nftContractAddress: "0x****65822",
         nftTokenId: "859654752",
         nftTokenStandart: "ERC-11155",
         nftId: 0,
         nftImage: NftImg,
      },
      {
         ntfName: "Monkey #2873890A",
         nftContractAddress: "0x****65822",
         nftTokenId: "859654752",
         nftTokenStandart: "ERC-11155",
         nftId: 1,
         nftImage: NftImg,
      },
      {
         ntfName: "Monkey #2873890A",
         nftContractAddress: "0x****65822",
         nftTokenId: "859654752",
         nftTokenStandart: "ERC-11155",
         nftId: 2,
         nftImage: NftImg,
      },
      {
         ntfName: "Monkey #2873890A",
         nftContractAddress: "0x****65822",
         nftTokenId: "859654752",
         nftTokenStandart: "ERC-11155",
         nftId: 3,
         nftImage: NftImg,
      },
      {
         ntfName: "Monkey #2873890A",
         nftContractAddress: "0x****65822",
         nftTokenId: "859654752",
         nftTokenStandart: "ERC-11155",
         nftId: 4,
         nftImage: NftImg,
      },
      {
         ntfName: "Monkey #2873890A",
         nftContractAddress: "0x****65822",
         nftTokenId: "859654752",
         nftTokenStandart: "ERC-11155",
         nftId: 5,
         nftImage: NftImg,
      },
      {
         ntfName: "Monkey #2873890A",
         nftContractAddress: "0x****65822",
         nftTokenId: "859654752",
         nftTokenStandart: "ERC-11155",
         nftId: 6,
         nftImage: NftImg,
      },
   ];
   const navigate = useNavigate();
   const { nftId } = useParams();
   const nft = nfts.find((t) => t.nftId === parseInt(nftId));

   if (!nft) {
      return <div>Token not found</div>;
   }
   return (
      <div className="w-full h-full flex flex-col flex-1 px-4 pt-3">
         <div className="header-container w-full flex justify-between h-8">
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
               <h5 className="font-normal text-[14px]">NFT Details</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div className="nft-tags w-full px-2 flex gap-2 mt-6">
            <div className="tag">
               <h5 className="px-4 py-[2px] bg-[#252525] rounded-lg text-[14px]">
                  Monkey
               </h5>
            </div>
            <div className="tag">
               <h5 className="px-4 py-[2px] bg-[#252525] rounded-lg text-[14px]">
                  Ethereum
               </h5>
            </div>
         </div>
         <div className="nft-img-container w-full h-auto mt-3">
            <img
               src={nft.nftImage}
               className="object-cover w-full h-auto max-h-[220px] rounded-xl"
            />
         </div>
         <div className="nft-name w-full mt-4">
            <h5 className="font-medium">{nft.ntfName}</h5>
         </div>
         <div className="line w-full h-[1px] bg-main-green mt-2 mb-4"></div>
         <div className="details-container w-full flex flex-col gap-2">
            <div className="title w-full">
               <p className="text-[14px] text-[#B9B9B9]">Details</p>
            </div>
            <div className="details w-full flex flex-col gap-2">
               <div className="w-full flex items-center justify-between">
                  <div className="title flex gap-2 items-center">
                     <img src={ContractIcon} />
                     <p className="text-[12px] text-[#B9B9B9]">
                        Contract Address
                     </p>
                  </div>
                  <div className="info-text gap-2 flex flex-row-reverse items-center">
                     <FaRegCopy
                        className="h-4 w-auto text-main-green cursor-pointer"
                        onClick={() => {
                           navigator.clipboard.writeText(
                              nft.nftContractAddress
                           );
                        }}
                     />
                     <h5 className="text-[12px]">{nft.nftContractAddress}</h5>
                  </div>
               </div>
               <div className="w-full flex items-center justify-between">
                  <div className="title flex gap-2 items-center">
                     <img src={MoneyBag} />
                     <p className="text-[12px] text-[#B9B9B9]">Token ID</p>
                  </div>
                  <div className="info-text gap-2 flex flex-row-reverse items-center">
                     <h5 className="text-[12px]">{nft.nftTokenId}</h5>
                  </div>
               </div>
               <div className="w-full flex items-center justify-between">
                  <div className="title flex gap-2 items-center">
                     <img src={MoneyBag} />
                     <p className="text-[12px] text-[#B9B9B9]">
                        Token Standart
                     </p>
                  </div>
                  <div className="info-text gap-2 flex flex-row-reverse items-center">
                     <h5 className="text-[12px]">{nft.nftTokenStandart}</h5>
                  </div>
               </div>
            </div>
         </div>
         <div className="button-container w-full flex h-full items-end mb-4">
            <button
               className="w-full bg-btn-green h-[40px] rounded-[10px] font-medium text-[12px] hover:bg-white hover:text-black transition-colors duration-300"
               onClick={() => {
                  navigate("/main");
               }}
            >
               Send
            </button>
         </div>
      </div>
   );
};

export default PageNftDetails;
