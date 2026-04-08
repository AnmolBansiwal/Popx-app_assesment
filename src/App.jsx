import { useState } from "react";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { ProfilePage } from "./pages/ProfilePage";
import { WelcomePage } from "./pages/WelcomePage";
function SliderDots({ currentScreen, setCurrentScreen }) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {[0, 1, 2, 3].map((index) => (
        <button
          key={index}
          onClick={() => setCurrentScreen(index)}
          className={`h-2.5 rounded-full transition-all ${
            currentScreen === index
              ? "w-6 bg-[#6c25ff]"
              : "w-2.5 bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}






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