import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageGetStarted from "./pages/PageGetStarted";
import PageStart from "./pages/PageStart";
import PageHelpImproveAgro from "./pages/PageHelpImproveAgro";
import PageCreatePassword from "./pages/PageCreatePassword";
import PageProtectYourWallet from "./pages/PageProtectYourWallet";
import PageCopySecretPhraseStatements from "./pages/PageCopySecretPhraseStatements";
import PageConfirmPhraseStatements from "./pages/PageConfirmPhraseStatements";
import PageCongratulations from "./pages/PageCongratulations";
import PageLoginWallet from "./pages/PageLoginWallet";
import PageMain from "./pages/PageMain";
import PageTokenDetails from "./pages/PageTokenDetails";
import PageSendToken from "./pages/PageSendToken";
import PageSendTokenWalletAddress from "./pages/PageSendTokenWalletAddress";
import PageSendTokenAmount from "./pages/PageSendTokenAmount";
import PageSendPreview from "./pages/PageSendPreview";
import PageDeposit from "./pages/PageDeposit";
import PageNftDetails from "./pages/PageNftDetails";
import PageActivity from "./pages/PageActivity";
import PageActivityDetails from "./pages/PageActivityDetails";
import PageSettings from "./pages/PageSettings";
import PageSettingsPreferences from "./pages/PageSettingsPreferences";
import PageSettingsSecurityPrivacy from "./pages/PageSettingsSecurityPrivacy";
import PageSettingsActiveNetwork from "./pages/PageSettingsActiveNetwork";

function App() {
   return (
      <div className="App bg-main-black flex-1 h-screen w-screen">
         <Routes>
            <Route path="/" element={<PageGetStarted />} />
            <Route path="/start" element={<PageStart />} />
            <Route path="/improveagro" element={<PageHelpImproveAgro />} />
            <Route path="/createpassword" element={<PageCreatePassword />} />
            <Route
               path="/protectyourwallet"
               element={<PageProtectYourWallet />}
            />
            <Route
               path="/copyphrases"
               element={<PageCopySecretPhraseStatements />}
            />
            <Route
               path="/confirmphrases"
               element={<PageConfirmPhraseStatements />}
            />
            <Route path="/congratulations" element={<PageCongratulations />} />
            <Route path="/login" element={<PageLoginWallet />} />
            <Route path="/main" element={<PageMain />} />
            <Route
               path="/tokendetails/:tokenId"
               element={<PageTokenDetails />}
            />
            <Route
               path="/sendtoken/:tokenId"
               element={<PageSendTokenWalletAddress />}
            />
            <Route
               path="/sendtoken/amount/:tokenId"
               element={<PageSendTokenAmount />}
            />
            <Route path="/sendtoken" element={<PageSendToken />} />
            <Route path="/previewsendtoken" element={<PageSendPreview />} />
            <Route path="/deposit" element={<PageDeposit />} />
            <Route path="/nftdetails/:nftId" element={<PageNftDetails />} />
            <Route path="/activity" element={<PageActivity />} />
            <Route
               path="/activitydetails/:activityId"
               element={<PageActivityDetails />}
            />
            <Route path="/settings" element={<PageSettings />} />
            <Route
               path="/settings/preferences"
               element={<PageSettingsPreferences />}
            />
            <Route
               path="/settings/securityprivacy"
               element={<PageSettingsSecurityPrivacy />}
            />
            <Route
               path="/settings/activenetwork"
               element={<PageSettingsActiveNetwork />}
            />
         </Routes>
      </div>
   );
}

export default App;
