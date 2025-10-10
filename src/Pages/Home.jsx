import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import SkeletonLoader from "../Components/SkeletonLoader";
import useAppList from "../Hooks/useAppList";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";
import heroPng from "../assets/hero.png";

const Home = () => {
  const { loading, error, products } = useAppList();
  const featuredProducts = products.slice(0, 8);

  if (error) return <p className="text-red-500 text-center py-8">{error.message}</p>;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center pt-12 rounded-lg">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          We Build
          <div>
            <span className="text-[#632ee3]">Productive</span>{" "}
            <span className="text-gray-700">Apps</span>
          </div>
        </h1>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://play.google.com/store"
            target="_blank"
            className="px-4 py-2 border border-gray-400 text-black font-semibold rounded-md flex items-center gap-3"
          >
            <img src={googlePlay} alt="Google Play" className="w-6 h-6" /> Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="px-4 py-2 border border-gray-400 text-black font-semibold rounded-md flex items-center gap-3"
          >
            <img src={appStore} alt="App Store" className="w-6 h-6" /> App Store
          </a>
        </div>

        <img
          src={heroPng}
          alt="Hero Banner"
          className="w-full max-w-5xl mx-auto h-auto px-4 object-contain"
        />
      </div>

      {/* Stats Section */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-700 to-purple-400 py-14">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center pb-8">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6">
          <div className="space-y-2">
            <p className="text-white text-lg">Total Downloads</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">2.5M+</h3>
            <p className="text-white font-medium">↑ 21% more than last month</p>
          </div>
          <div className="space-y-2">
            <p className="text-white text-lg">Total Reviews</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">185K+</h3>
            <p className="text-white font-medium">↑ 46% more than last month</p>
          </div>
          <div className="space-y-2">
            <p className="text-white text-lg">Active Apps</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">38</h3>
            <p className="text-white font-medium">+31 more will launch soon</p>
          </div>
        </div>
      </div>

      {/* Trending Apps */}
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-3xl font-bold text-center">Trending Apps</h2>
        <p className="text-gray-600 text-center">
          Explore all trending apps on the market developed by us
        </p>

        {loading ? (
          <SkeletonLoader count={8} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <Link
          className="px-4 py-2 border rounded bg-gradient-to-r from-purple-700 to-purple-400 text-white hover:bg-gray-100 transition"
          to="/apps"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
