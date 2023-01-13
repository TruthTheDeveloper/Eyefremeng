import React from "react";
const Mission = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center lg:mx-24 text-[#002365]">
      <div className="basis-1/2 text-center">
        <h1 className="font-semibold text-5xl pt-40">Our Mission</h1>
        <p className="py-8 mx-12 text-xl font-semibold">
          Our mission is to provide quality stylish eyewear and affordable to
          those consumers who desire to augment their appearance with glasses
        </p>
      </div>
      {/* <div className="hidden lg:block">
        <img
          src="https://eyeframeng.com/wp-content/uploads/2021/01/1o-scaled.jpg"
          className="w-full h-[30rem]"
        />
      </div> */}
    </section>
  );
};

export default Mission;
