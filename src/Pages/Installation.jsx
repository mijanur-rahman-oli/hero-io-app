import React, { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import SkeletonLoader from "../Components/SkeletonLoader";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [displayApps, setDisplayApps] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  // Load installed apps from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

  // Handle sorting
  useEffect(() => {
    setIsSorting(true);

    let apps = [...installedApps];
    if (sortOrder === "high-low") {
      apps.sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "low-high") {
      apps.sort((a, b) => a.downloads - b.downloads);
    }

    setDisplayApps(apps);

    // small delay for loading animation effect
    const timer = setTimeout(() => setIsSorting(false), 200);
    return () => clearTimeout(timer);

  }, [installedApps, sortOrder]);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setInstalledApps(updated);
    toast.success("App uninstalled successfully!");
  };

  return (
    <div className="py-6 max-w-[1340px] mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">Your Installed Apps</h1>
        <p className="text-gray-600">Explore all installed apps on your device.</p>
        <span className="text-lg font-bold text-black mt-2 block">
          ({installedApps.length}) Apps Installed
        </span>
      </div>

      {/* Sort Dropdown */}
      {installedApps.length > 0 && (
        <div className="flex justify-end mb-4">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded px-3 py-2 w-48"
          >
            <option value="default">Sort by Downloads</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
      )}

      {/* Installed Apps Grid */}
      {isSorting ? (
        <SkeletonLoader count={installedApps.length || 6} />
      ) : installedApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayApps.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onUninstall={handleUninstall}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No apps installed yet.</p>
      )}
    </div>
  );
};

export default Installation;
