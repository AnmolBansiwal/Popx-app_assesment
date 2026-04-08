export function SliderDots({ currentScreen, setCurrentScreen }) {
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