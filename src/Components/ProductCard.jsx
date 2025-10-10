import React from "react";
import { Link } from "react-router-dom";
import downIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";

const ProductCard = ({ product, onUninstall }) => {
  const { title, image, companyName, id, downloads, ratingAvg } = product;

  return (
    <div className="card bg-white shadow-sm hover:scale-105 transition transform ease-in-out flex flex-col max-w-sm w-full h-full">
      <Link to={`/product/${id}`} className="flex flex-col h-full">
        <figure className="h-48 w-full overflow-hidden p-4">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body p-4 flex flex-col justify-between flex-1">
          <div>
            <h2 className="card-title text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">{companyName}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-sm bg-[#F1F5E8] px-2 py-1 text-green-400 flex items-center gap-1 rounded-xl">
              <img src={downIcon} alt="downloads" className="w-4 h-4" />
              {downloads}M
            </div>
            <div className="text-sm bg-[#FFF0E1] px-2 py-1 text-yellow-500 font-medium flex items-center gap-1 rounded-xl">
              <img src={ratingIcon} alt="rating" className="w-4 h-4" />
              {ratingAvg.toFixed(1)}
            </div>
          </div>

          {onUninstall && (
            <button
              onClick={() => onUninstall(product.id)}
              className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Uninstall
            </button>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
