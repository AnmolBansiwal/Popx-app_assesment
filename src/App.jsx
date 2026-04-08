import { useState } from "react";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { ProfilePage } from "./pages/ProfilePage";
import { WelcomePage } from "./pages/WelcomePage";
import { SliderDots } from "./components/SliderDots";






export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
  <WelcomePage setCurrentScreen={setCurrentScreen} />,
  <LoginPage setCurrentScreen={setCurrentScreen} />,
  <SignupPage setCurrentScreen={setCurrentScreen} />,
  <ProfilePage setCurrentScreen={setCurrentScreen} />,
];

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center p-6">
      <div className="w-[375px] h-[812px] bg-[#f7f8f9] border border-gray-200 shadow-sm relative overflow-hidden">
        {screens[currentScreen]}
        <SliderDots
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      </div>
    </div>
  );
}