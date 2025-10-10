import React from "react";
import downIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png"

const InstalledAppCard = ({ app, onUninstall }) => {
  return (
    <div className="w-full bg-white shadow-md flex items-center justify-between p-4 gap-4 hover:shadow-lg transition-all duration-200">


      <div className="flex-shrink-0">
        <img
          src={app.image}
          alt={app.title}
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
        />
      </div>


      <div className="flex-1 flex flex-col justify-center ml-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{app.title}</h2>

        <div className="flex items-center gap-1 mt-1 text-gray-600 text-sm sm:text-base">
          <img src={downIcon} alt="downloads" className="w-4 h-4" />
          <div className="flex items-center gap-4">
            <span>{app.downloads}M</span> <span className="flex gap-1 items-center">{app.ratingAvg} <img className="w-4 h-4" src={ratingIcon} alt="" />
              </span> <span>{app.size}MB</span>
          </div>

        </div>
      </div>


      {onUninstall && (
        <div className="flex-shrink-0">
          <button
            onClick={() => onUninstall(app.id)}
            className="px-6 py-2 bg-[#00D390] text-white font-medium rounded-lg hover:bg-red-600 transition"
          >
            Uninstall
          </button>
        </div>
      )}
    </div>
  );
};

export default InstalledAppCard;
