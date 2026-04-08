export function WelcomePage({ setCurrentScreen }) {
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