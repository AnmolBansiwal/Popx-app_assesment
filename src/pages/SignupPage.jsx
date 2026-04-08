export function SignupPage({ setCurrentScreen }) {
  return (
    <div className="h-full flex flex-col px-5 pt-8 pb-6">
      <div>
        <h1 className="max-w-[220px] text-[34px] font-bold leading-[1.1] text-[#1d2226]">
          Create your PopX account
        </h1>
      </div>

      <div className="mt-8 flex-1 space-y-6">
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] font-medium text-[#6c25ff]">
            Full Name<span className="text-[#dd4a3d]">*</span>
          </label>
          <input
            type="text"
            placeholder="Anmol Bansiwal"
            className="w-full h-12 rounded-md border border-[#cbcbcb] bg-transparent px-4 text-[14px] text-[#1d2226] outline-none focus:border-[#6c25ff]"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] font-medium text-[#6c25ff]">
            Phone number<span className="text-[#dd4a3d]">*</span>
          </label>
          <input
            type="text"
            placeholder="9634xxxxxx"
            className="w-full h-12 rounded-md border border-[#cbcbcb] bg-transparent px-4 text-[14px] text-[#1d2226] outline-none focus:border-[#6c25ff]"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] font-medium text-[#6c25ff]">
            Email address<span className="text-[#dd4a3d]">*</span>
          </label>
          <input
            type="email"
            placeholder="@gmail.com"
            className="w-full h-12 rounded-md border border-[#cbcbcb] bg-transparent px-4 text-[14px] text-[#1d2226] outline-none focus:border-[#6c25ff]"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] font-medium text-[#6c25ff]">
            Password<span className="text-[#dd4a3d]">*</span>
          </label>
          <input
            type="password"
            placeholder="************"
            className="w-full h-12 rounded-md border border-[#cbcbcb] bg-transparent px-4 text-[14px] text-[#1d2226] outline-none focus:border-[#6c25ff]"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] font-medium text-[#6c25ff]">
            Company name
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full h-12 rounded-md border border-[#cbcbcb] bg-transparent px-4 text-[14px] text-[#1d2226] outline-none focus:border-[#6c25ff]"
          />
        </div>

        <div>
          <p className="mb-3 text-[14px] text-[#1d2226]">
            Are you an Agency?<span className="text-[#dd4a3d]">*</span>
          </p>

          <div className="flex items-center gap-6">
            <label className="flex cursor-pointer items-center gap-2 text-[14px] text-[#1d2226]">
              <input
                type="radio"
                name="agency"
                defaultChecked
                className="accent-[#6c25ff]"
              />
              Yes
            </label>

            <label className="flex cursor-pointer items-center gap-2 text-[14px] text-[#1d2226]">
              <input
                type="radio"
                name="agency"
                className="accent-[#6c25ff]"
              />
              No
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrentScreen(3)}
        className="mt-6 h-12 w-full rounded-md bg-[#6c25ff] text-[16px] font-semibold text-white"
      >
        Create Account
      </button>
    </div>
  );
}