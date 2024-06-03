import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";

const PageSettingsPreferences = () => {
   const [activeCurrency, setActiveCurrency] = useState(0);
   const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
   const currencies = [
      {
         currencyName: "USD",
         currencyId: 0,
      },
      {
         currencyName: "EUR",
         currencyId: 1,
      },
      {
         currencyName: "TRY",
         currencyId: 2,
      },
      {
         currencyName: "CNY",
         currencyId: 3,
      },
      {
         currencyName: "GBP",
         currencyId: 4,
      },
      {
         currencyName: "KRW",
         currencyId: 5,
      },
   ];
   const navigate = useNavigate();
   return (
      <div className="page-settings-preferences w-full h-full flex-1 flex flex-col px-4 pt-3">
         <div className="header-container w-full flex justify-between h-8">
            <div className="back-container flex items-center w-8">
               <button
                  onClick={() => {
                     navigate(`/settings`);
                  }}
               >
                  <FaArrowLeft className="text-main-green" />
               </button>
            </div>
            <div className="title-container w-full flex-1 flex items-center justify-center">
               <h5 className="font-normal text-[14px]">Preferences</h5>
            </div>
            <div className="empty-container flex  w-8"></div>
         </div>
         <div
            className={`currency-selector overflow-y-hidden w-full flex flex-col mt-6 bg-[#252525] px-5 rounded-[10px] py-3 ${
               isCurrencyOpen ? `open` : ``
            }`}
         >
            <div
               className="top w-full flex justify-between h-auto items-center cursor-pointer px-1"
               onClick={() => {
                  setIsCurrencyOpen(!isCurrencyOpen);
               }}
            >
               <div className="title">
                  <h5 className="text-[15px]">Currency</h5>
               </div>
               <div className="currency flex items-center gap-2">
                  <h5 className="text-[14px]">
                     {currencies[activeCurrency].currencyName}
                  </h5>
                  <GoChevronDown className="text-main-green w-6 h-auto" />
               </div>
            </div>
            <div className="line w-full h-[1px] bg-[#666666] mt-3"></div>
            <div className="currencies w-full flex flex-col gap-2 mt-4 px-1">
               {currencies.map((currency) => (
                  <div
                     className="currency w-full cursor-pointer"
                     onClick={() => setActiveCurrency(currency.currencyId)}
                     key={currency.currencyId}
                  >
                     <h5>{currency.currencyName}</h5>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default PageSettingsPreferences;
