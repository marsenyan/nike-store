import React from "react";

interface CardProps {
  img: string;
  rating: string;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ img, rating, title, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full hoverBtn">
      <img src={img} alt="" className="w-[280px] h-[280px] max-w-full" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src="/star.svg" alt="ratings" width="24" height="24" />
        <p className="text-xl leading-normal text-[#6D6D6D]">({rating})</p>
      </div>
      <h1 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {title}
      </h1>
      <p className="mt-2 font-semibold text-[#FF6452] text-2xl leading-normal">
        ${price}
      </p>
    </div>
  );
};

export const Products: React.FC = () => {
  return (
    <>
      <div className="lg:py-24 py-12 lg:px-16 px-8" id="products">
        <main className="container mx-auto max-sm:mt-12">
          <div className="flex flex-col justify-start gap-5">
            <h2 className="text-5xl font-palanquin font-bold">
              <span className="text-[#FF6452]">Popular</span> Products
            </h2>
            <p className="lg:max-w-lg text-[#6D6D6D] leading-7">
              Experience top-notch quality and style with our sought-after
              selections. Discover a world of comfort, design and value
            </p>
          </div>
          <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            <Card
              img="/shoe4.svg"
              price="200.20"
              rating="4.5"
              title="Nike Air Jordan-01"
            />

            <Card
              img="/shoe5.svg"
              title="Nike Air Jordan-10"
              price="210.20"
              rating="4.2"
            />
            <Card
              img="/shoe6.svg"
              title="Nike Air Jordan-100"
              price="220.20"
              rating="4.6"
            />
            <Card
              img="/shoe7.svg"
              title="Nike Air Jordan-001"
              price="230.20"
              rating="4.7"
            />
          </div>
        </main>
      </div>
    </>
  );
};

