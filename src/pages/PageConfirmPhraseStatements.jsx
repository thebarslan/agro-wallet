import React, { useEffect, useState } from "react";
import SmallLogo from "../assets/images/logos/logo-small.png";
import { useNavigate } from "react-router-dom";

const PageConfirmPhraseStatements = () => {
   const navigate = useNavigate();

   const [isError, setIsError] = useState(false);
   const [errorText, setErrorText] = useState("");

   const phraseText =
      "sight,veteran,spatial,nerve,practice,furnace,happy,jewel,east,big,word,pitch";

   const [allPhrases, setAllPhrases] = useState([]);
   const [selectedPhrases, setSelectedPhrases] = useState([]);
   const [shuffledAllPhrases, setShuffledAllPhrases] = useState([]);

   const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
   };

   useEffect(() => {
      const tempPhraseArray = phraseText.split(",");
      setAllPhrases(tempPhraseArray); // Set the ordered phrases
      setShuffledAllPhrases(shuffleArray([...tempPhraseArray])); // Shuffle a copy
   }, []);

   const handlePhraseClick = (phrase) => {
      setSelectedPhrases((prevSelectedPhrases) => {
         if (prevSelectedPhrases.includes(phrase)) return prevSelectedPhrases;
         const newSelectedPhrases = [...prevSelectedPhrases, phrase];
         console.log("Updated Selected Phrases:", newSelectedPhrases);
         return newSelectedPhrases;
      });
   };

   const handlePhraseRemove = (index) => {
      setSelectedPhrases((prevSelectedPhrases) => {
         const newSelectedPhrases = prevSelectedPhrases.filter(
            (_, i) => i !== index
         );
         console.log(
            "Updated Selected Phrases After Removal:",
            newSelectedPhrases
         );
         return newSelectedPhrases;
      });
   };

   const handlePhraseConfirmation = () => {
      console.log("Selected Phrases:", selectedPhrases);
      console.log("Original Phrases:", allPhrases);

      if (selectedPhrases.length !== allPhrases.length) {
         setIsError(true);
         setErrorText("Your words are not matching");
         return;
      }

      for (let i = 0; i < selectedPhrases.length; i++) {
         if (selectedPhrases[i] !== allPhrases[i]) {
            setIsError(true);
            setErrorText("Your words are not matching");
            return;
         }
      }

      navigate("/congratulations");
   };

   return (
      <div className="page-confirm-phrase-statements w-full h-full flex-1 flex flex-col px-5 pt-4">
         <div className="header-container w-full flex justify-between h-8">
            <div className="logo-container flex items-center w-8">
               <img src={SmallLogo} alt="agro-logo" />
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-semibold text-[15px]">Agro Wallet</h5>
            </div>
            <div className="empty-container flex w-8"></div>
         </div>
         <div className="title-container w-full flex flex-col items-center mt-3 gap-1">
            <div className="title-inside-container w-full flex flex-col">
               <h5 className="font-semibold text-[26px] text-center">
                  Confirm the phrase
               </h5>
               <h5 className="font-semibold text-[26px] text-center -mt-2">
                  recovery statements.
               </h5>
            </div>
            <div className="title-inside-container px-6">
               <p className="font-normal text-[11px] text-center">
                  Select each word in the order presented to you.
               </p>
            </div>
         </div>
         <div className="phrases-bigger-container w-full flex flex-col gap-4 px-6 pt-2 pb-2 border-2 border-white rounded-lg mt-1">
            <div className="phrases-container  rounded-lg grid grid-cols-2 gap-x-8">
               <div className="left-column flex flex-col gap-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                     <div
                        className="phrase-container w-full flex items-center gap-1"
                        key={index}
                     >
                        <h5 className="text-[12px] w-[20px]">{index + 1}</h5>
                        <div
                           className={`phrase-inside-container w-full h-[20px] border border-main-green rounded-full flex items-center justify-center ${
                              selectedPhrases.length < index + 1
                                 ? `border-dotted`
                                 : `cursor-pointer`
                           }`}
                           onClick={() => handlePhraseRemove(index)}
                        >
                           <h5 className="phrase text-[10px]">
                              {selectedPhrases[index]}
                           </h5>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="right-column flex flex-col gap-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                     <div
                        className="phrase-container w-full flex items-center gap-1"
                        key={index}
                     >
                        <h5 className="text-[12px] w-[20px]">{index + 7}</h5>
                        <div
                           className={`phrase-inside-container w-full h-[20px] border border-main-green rounded-full flex items-center justify-center ${
                              selectedPhrases.length < index + 7
                                 ? `border-dotted`
                                 : `cursor-pointer`
                           }`}
                           onClick={() => handlePhraseRemove(index + 6)}
                        >
                           <h5 className="phrase text-[10px]">
                              {selectedPhrases[index + 6]}
                           </h5>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="available-phrases-container grid grid-cols-3 gap-1 mt-3 w-5/6 mx-auto">
            {shuffledAllPhrases.map((phrase, index) => (
               <button
                  key={index}
                  className={`phrase-button border border-main-green rounded-full h-[20px] ${
                     selectedPhrases.includes(phrase) ? "opacity-50" : ""
                  }`}
                  onClick={() => handlePhraseClick(phrase)}
                  disabled={selectedPhrases.includes(phrase)}
               >
                  <h5 className="text-[11px]">{phrase}</h5>
               </button>
            ))}
         </div>
         <div className="steps-container w-full flex flex-col mt-3 gap-1">
            <div className="steps-visual-container px-10 flex items-center">
               <div className="ball h-[16px] w-[16px] rounded-full bg-main-green flex-shrink-0"></div>
               <div className="line w-full h-[2px] bg-main-green"></div>
               <div className="ball h-[16px] w-[16px] rounded-full bg-main-green flex-shrink-0"></div>
               <div className="line w-full h-[2px] bg-white"></div>
               <div className="ball h-[16px] w-[16px] rounded-full bg-white flex-shrink-0"></div>
            </div>
            <div className="steps-text-container w-full flex text-[10px] text-gray-300">
               <div className="step-text-container flex-1 w-full text-center">
                  <p>Create Password</p>
               </div>
               <div className="step-text-container flex-1 w-full text-center">
                  <p>Secure your account</p>
               </div>
               <div className="step-text-container flex-1 w-full text-center">
                  <p>Confirm the secret recovery phrase.</p>
               </div>
            </div>
         </div>
         <div className="error-message-container h-[20px] w-full flex items-center justify-center mt-1">
            {isError && <h5 className="text-red-400 text-sm">{errorText}</h5>}
         </div>
         <div className="button-container w-full flex mt-3">
            <div className="button-container w-full flex">
               <button
                  className="w-full bg-btn-green h-[50px] rounded-[14px] font-medium text-[14px] hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={handlePhraseConfirmation}
               >
                  Next
               </button>
            </div>
         </div>
      </div>
   );
};

export default PageConfirmPhraseStatements;
