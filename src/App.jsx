import { useState } from "react";

function WelcomePage({ setCurrentScreen }) {
  return (
    <div className="h-full flex flex-col justify-end px-5 pb-10">
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-[#1d2226] leading-tight">
          Welcome to PopX
        </h1>
        <p className="mt-2 text-[18px] text-black/50 leading-7 max-w-[250px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => setCurrentScreen(2)}
          className="w-full h-12 rounded-md bg-[#6c25ff] text-white font-semibold"
        >
          Create Account
        </button>

        <button
          onClick={() => setCurrentScreen(1)}
          className="w-full h-12 rounded-md bg-[#cebafb] text-[#1d2226] font-semibold"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Login Page</h1>
    </div>
  );
}

function SignupPage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Signup Page</h1>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Profile Page</h1>
    </div>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <WelcomePage setCurrentScreen={setCurrentScreen} />,
    <LoginPage />,
    <SignupPage />,
    <ProfilePage />,
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center p-6">
      <div className="w-[375px] h-[812px] bg-[#f7f8f9] border border-gray-200 shadow-sm relative overflow-hidden">
        {screens[currentScreen]}
      </div>
    </div>
  );
}