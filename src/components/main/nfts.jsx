import React, { useEffect, useState } from "react";
import NftImg from "../../assets/images/background-images/Main/nfts/nftimg.png";
import { useNavigate } from "react-router-dom";

const Nfts = () => {
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
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      // Set loading to false after 2 seconds
      const timeout = setTimeout(() => {
         setIsLoading(false);
      }, 1500);

      // Clear timeout on component unmount (cleanup)
      return () => clearTimeout(timeout);
   }, []);
   return (
      <div className="w-full h-[220px]">
         {isLoading ? (
            <div className="loader-container w-full h-full flex items-center justify-center">
               <div className="loader"></div>
            </div>
         ) : (
            <div className="tokens-list overflow-y-auto w-full h-[220px] grid grid-cols-2 gap-4 pl-2 pr-5">
               {nfts.map((nft) => (
                  <div
                     className="nft-item w-full aspect-square cursor-pointer"
                     onClick={() => {
                        navigate(`/nftdetails/${nft.nftId}`);
                     }}
                  >
                     <img
                        src={nft.nftImage}
                        alt=""
                        className="w-full aspect-square object-cover rounded-xl"
                     />
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default Nfts;
