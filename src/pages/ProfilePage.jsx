export function ProfilePage({ setCurrentScreen }) {
  return (
    <div className="h-full bg-[#f7f8f9]">
      <div className="flex h-16 items-center justify-between bg-white px-5 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
        <h1 className="text-[18px] font-medium text-[#1d2226]">
          Account Settings
        </h1>

        <button
          onClick={() => setCurrentScreen(0)}
          className="text-[13px] font-medium text-[#6c25ff]"
        >
          Back
        </button>
      </div>

      <div className="border-b border-dashed border-[#cbcbcb] px-5 py-7">
        <div className="flex items-start gap-5">
          <div className="relative shrink-0">
            <img
              src="https://wallpaperaccess.com/full/5336105.jpg"
              alt="profile"
              className="h-[76px] w-[76px] rounded-full object-cover"
            />

            <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#6c25ff] text-[12px] text-white">
              📷
            </div>
          </div>

          <div>
            <h2 className="text-[15px] font-semibold text-[#1d2226]">
              Anmol Bansiwal
            </h2>
            <p className="text-[14px] text-[#1d2226]">anmol@gmail.com</p>
          </div>
        </div>

        <p className="mt-6 text-[14px] leading-6 text-[#1d2226]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}