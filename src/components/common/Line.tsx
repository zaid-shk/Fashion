"use client";

const Line = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="capitalize text-lg tracking-widest">
        "Turning Fashion into necessity"
      </div>
      <div className="uppercase h-20 w-full flex items-center justify-center text-3xl tracking-widest font-semibold py-5 bg-teal">
        <h1>
          Flat
          <span className="capitalize text-orange text-4xl"> 20% discount</span>{" "}
          for forst customers
        </h1>
      </div>
    </div>
  );
};

export default Line;
