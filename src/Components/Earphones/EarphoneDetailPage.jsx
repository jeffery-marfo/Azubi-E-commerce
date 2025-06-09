import React, { useState } from "react";
import { Link } from "react-router";
import earPhones from "../../assets/images/Earphones.png";

export default function EarphoneDetailPage() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment) => {
    if (increment && quantity < 99) {
      setQuantity(quantity + 1);
    } else if (!increment && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Go Back Button */}
        <Link
          to="/headphones"
          className="text-gray-500 hover:text-gray-700 mb-12 text-sm font-medium transition-colors"
        >
          Go Back
        </Link>

        {/* Product Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg p-16 flex items-center justify-center">
            <div className="w-80 h-80 flex items-center justify-center">
              <img
                src={earPhones}
                alt="earPhones img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* New Product Badge */}
            <div className="text-[#D87D4A] text-sm font-medium tracking-[0.6em] uppercase">
              New Product
            </div>

            {/* Product Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              YX1 WIRELESS
              <br />
              EARPHONES
            </h1>

            {/* Product Description */}
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>

            {/* Price */}
            <div className="text-2xl font-bold text-gray-900 tracking-wide">
              $ 599
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4">
              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-100">
                <button
                  onClick={() => handleQuantityChange(false)}
                  className="px-4 py-3 text-gray-500 hover:text-[#FBAF85] font-bold transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-3 font-bold text-gray-900 min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(true)}
                  className="px-4 py-3 text-gray-500 hover:text-[#FBAF85] font-bold transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-8 py-3 font-bold tracking-widest uppercase transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        </section>

        {/* Features and In The Box Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-wide">
              FEATURES
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>
                Experience unrivalled stereo sound thanks to innovative acoustic
                technology. With improved ergonomics designed for full day
                wearing, these revolutionary earphones have been finely crafted
                to provide you with the perfect fit, delivering complete comfort
                all day long while enjoying exceptional noise isolation and
                truly immersive sound.
              </p>
              <p>
                The YX1 Wireless Earphones features customizable controls for
                volume, music, calls, and voice assistants built into both
                earbuds. The new 7-hour battery life can be extended up to 28
                hours with the charging case, giving you uninterrupted play
                time. Exquisite craftsmanship with a splash resistant design now
                available in an all new white and grey color scheme as well as
                the popular classic black.
              </p>
            </div>
          </div>

          {/* In The Box */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-wide">
              IN THE BOX
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-[#D87D4A] font-bold mr-8 min-w-[30px]">
                  2x
                </span>
                <span className="text-gray-500">Earphone Unit</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D87D4A] font-bold mr-8 min-w-[30px]">
                  2x
                </span>
                <span className="text-gray-500">Multi-size Earplugs</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D87D4A] font-bold mr-8 min-w-[30px]">
                  1x
                </span>
                <span className="text-gray-500">User Manual</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D87D4A] font-bold mr-8 min-w-[30px]">
                  1x
                </span>
                <span className="text-gray-500">USB-C Charging Cable</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D87D4A] font-bold mr-8 min-w-[30px]">
                  1x
                </span>
                <span className="text-gray-500">Travel Pouch</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
