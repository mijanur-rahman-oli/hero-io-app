import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppList from "../Hooks/useAppList";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import appError from "../assets/App-Error.png";
import downIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useAppList();
  const [installed, setInstalled] = useState(false);

  const product = products.find((p) => Number(p.id) === Number(id));

  useEffect(() => {
    if (product) {
      const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
      const exists = stored.some((app) => app.id === product.id);
      setInstalled(exists);
    }
  }, [product]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center py-10">{error.message}</p>;

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center text-gray-700 py-10 space-y-6">
        <img src={appError} alt="App Not Found" className="w-64" />
        <h2 className="text-2xl font-bold">🔍 App Not Found</h2>
      </div>
    );
  }

  const handleInstall = () => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (stored.some((app) => app.id === product.id)) {
      toast.info("App already installed!");
      setInstalled(true);
      return;
    }
    const updated = [...stored, product];
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setInstalled(true);
    toast.success(`${product.title} Installed Successfully!`);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-10 space-y-8">
    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-gray-300 pb-8">
        <div className="lg:col-span-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold ">{product.title}</h2>
          <div className="border-b border-gray-300 pb-2">
            Developed by <span className="text-purple-700 font-medium">{product.companyName}</span>
          </div>

    
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
              <img src={downIcon} alt="downloads" className="w-6 h-6" />
              <div>
                <div className="text-gray-600 text-sm">Downloads</div>
                <div className="font-bold text-lg">{product.downloads}M</div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
              <img src={ratingIcon} alt="ratings" className="w-6 h-6" />
              <div>
                <div className="text-gray-600 text-sm">Average Rating</div>
                <div className="font-bold text-lg">{product.ratingAvg}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
              <img src={reviewIcon} alt="reviews" className="w-6 h-6" />
              <div>
                <div className="text-gray-600 text-sm">Total Reviews</div>
                <div className="font-bold text-lg">{product.reviews}</div>
              </div>
            </div>
          </div>

      
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-4 py-2 w-48 rounded text-white transition-all duration-200 ${
              installed ? "bg-[#00d390] cursor-not-allowed" : "bg-[#00d390] hover:bg-[#00b67a]"
            }`}
          >
            {installed ? "Installed" : `Install Now (${product.size} MB)`}
          </button>
        </div>
      </div>

   
      {product.ratings && product.ratings.length > 0 && (
        <div className="w-full border-b border-gray-300 pb-6">
          <h3 className="text-2xl font-bold mb-2">Reviews Chart</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={product.ratings}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#4f46e5" barSize={25} radius={[4, 4, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

     
      <div className="pt-6">
        <h3 className="text-2xl font-bold mb-2">Description</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
