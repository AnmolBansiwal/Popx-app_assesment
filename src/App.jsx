import { useState } from "react";

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

function WelcomePage({ setCurrentScreen }) {
  return (
    <div className="h-full flex flex-col justify-end px-5 pb-16">
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

function LoginPage({ setCurrentScreen }) {
  return (
    <div className="px-5 pt-10">
      <div className="max-w-[260px]">
        <h1 className="text-[32px] leading-tight font-bold text-[#1d2226]">
          Signin to your PopX account
        </h1>
        <p className="mt-3 text-[18px] leading-7 text-black/45">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] text-[#6c25ff] font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full h-12 rounded-md border border-[#cbcbcb] bg-transparent px-4 text-[14px] outline-none"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] text-[#6c25ff] font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full h-12 rounded-md border border-[#cbcbcb] bg-transparent px-4 text-[14px] outline-none"
          />
        </div>

        <button
          onClick={() => setCurrentScreen(3)}
          className="w-full h-12 rounded-md bg-[#cbcbcb] text-white font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}

function SignupPage({ setCurrentScreen }) {
  return (
    <div className="h-full px-5 pt-8 pb-6 flex flex-col">
      <div>
        <h1 className="text-[34px] leading-[1.1] font-bold text-[#1d2226] max-w-[220px]">
          Create your PopX account
        </h1>
      </div>

      <div className="mt-8 flex-1 space-y-6">
        {[
          "Full Name",
          "Phone number",
          "Email address",
          "Password",
          "Company name",
        ].map((field, index) => (
          <div key={index} className="relative">
            <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] text-[#6c25ff] font-medium">
              {field}
              {index !== 4 && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field === "Password" ? "password" : "text"}
              placeholder="Marry Doe"
              className="w-full h-12 rounded-md border border-[#cbcbcb] bg-transparent px-4 text-[14px] outline-none"
            />
          </div>
        ))}

        <div>
          <p className="text-[14px] text-[#1d2226] mb-3">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-[14px]">
              <input type="radio" name="agency" defaultChecked />
              Yes
            </label>

            <label className="flex items-center gap-2 text-[14px]">
              <input type="radio" name="agency" />
              No
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrentScreen(3)}
        className="w-full h-12 rounded-md bg-[#6c25ff] text-white font-semibold"
      >
        Create Account
      </button>
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
  <LoginPage setCurrentScreen={setCurrentScreen} />,
  <SignupPage />,
  <ProfilePage />,
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