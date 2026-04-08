export function LoginPage({ setCurrentScreen }) {
  return (
    <div className="px-5 pt-10">
      <div className="max-w-[260px]">
        <h1 className="text-[32px] font-bold leading-tight text-[#1d2226]">
          Signin to your PopX account
        </h1>

        <p className="mt-3 text-[18px] leading-7 text-black/45">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] font-medium text-[#6c25ff]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full h-12 rounded-md border border-[#cbcbcb] bg-transparent px-4 text-[14px] text-[#1d2226] outline-none focus:border-[#6c25ff]"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] font-medium text-[#6c25ff]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full h-12 rounded-md border border-[#cbcbcb] bg-transparent px-4 text-[14px] text-[#1d2226] outline-none focus:border-[#6c25ff]"
          />
        </div>

        <button
          onClick={() => setCurrentScreen(3)}
          className="w-full h-12 rounded-md bg-[#cbcbcb] text-[16px] font-semibold text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}