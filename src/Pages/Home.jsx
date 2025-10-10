import React from "react";
import { Link } from "react-router-dom";
import useAppList from "../Hooks/useAppList";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";
import heroPng from "../assets/hero.png";


const Home = () => {
  const { loading, error, products } = useAppList();
  const featuredProducts = products.slice(0, 8);

  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div>
   
      <div className="text-center pt-12 rounded-lg ">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          We Build
          <div>
            <span className="text-[#632ee3] text-3xl md:text-6xl font-bold">Productive</span>
            <span className="text-gray-700 text-3xl md:text-6xl"> Apps</span>
          </div>
        </h1>

        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting. Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            className="px-2 py-2 md:px-4 md:py-3 border border-gray-400 text-black font-semibold text-md md:text-xl rounded-md flex items-center gap-3"
          >
            <img src={googlePlay} alt="" className="w-6 h-6" />
            Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            className=" px-2 py-2 md:px-4 md:py-3 border border-gray-400 text-black font-semibold text-md md:text-xl rounded-md flex items-center gap-3"
          >
            <img src={appStore} alt="" className="w-6 h-6" />
            App Store
          </a>
        </div>

        <img
          src={heroPng}
          alt="Hero Banner"
          className="w-full max-w-5xl mx-auto h-auto px-4 pt-12 object-contain"
          loading="lazy"
        />

      </div>

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] py-14">
      <h2 className="text-3xl md:text-4xl px-2 text-white font-bold text-center pb-8">Trusted by Millions, Built for You</h2>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center space-y-8 md:space-y-1  text-gray-800 px-6 md:px-46">
        
          <div className="space-y-2">
            <p className="text-sm md:text-lg  mt-1 text-white">Total Downloads</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">2.5M+</h3>
            <p className="text-white mt-2 font-medium">↑ 21% more than last month</p>
          </div>
      
          <div className="space-y-2">
            <p className="text-sm md:text-lg  mt-1 text-white">Total Reviews</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">185K+</h3>
            <p className="text-white mt-2 font-medium">↑ 46% more than last month</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm md:text-lg mt-1 text-white">Active Apps</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">38</h3>
            <p className="text-white mt-2 font-medium">+31 more will launch soon</p>
          </div>
        </div>
      </div>
      

      <div className="flex flex-col py-8 items-center mt-10">
        <h2 className="text-3xl font-bold">Trending Apps</h2>
        <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>

      </div>
      <div className="flex flex-col items-center space-y-6">
    {/* here */}
        <Link
          className="px-4 py-2 border border-gray-400 rounded bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white hover:bg-gray-100 "
          to="/apps"
        >
          Show All
        </Link>
      </div>

    </div>
  );
};

export default Home;
