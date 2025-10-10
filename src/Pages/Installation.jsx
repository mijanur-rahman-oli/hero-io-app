import React, { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import SkeletonLoader from "../Components/SkeletonLoader";
import { toast } from "react-toastify";
import InstalledAppCard from "./InstalledAppCard";

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");
    const [displayApps, setDisplayApps] = useState([]);
    const [isSorting, setIsSorting] = useState(false);


    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(stored);
    }, []);


    useEffect(() => {
        setIsSorting(true);

        let apps = [...installedApps];
        if (sortOrder === "high-low") {
            apps.sort((a, b) => b.downloads - a.downloads);
        } else if (sortOrder === "low-high") {
            apps.sort((a, b) => a.downloads - b.downloads);
        }

        setDisplayApps(apps);


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
        <div className="max-w-[1340px] mx-auto  space-y-6 px-8 md:px-4 lg:px-0">

            <div className="text-center pt-6 space-y-2 ">
                <h1 className="text-3xl font-semibold pt-6">Your Installed Apps</h1>
                <p className="text-gray-600">Explore all installed apps on your device.</p>
            </div>


            <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-black mt-2 block">
                    ({installedApps.length}) Apps Installed
                </span>

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
                    </div>)}
            </div>



            {isSorting ? (
                <SkeletonLoader count={installedApps.length || 6} />
            ) : installedApps.length > 0 ? (
                <div className="flx flex-col gap-4 space-y-3 pb-8">
                    {displayApps.map((app) => (
                        <InstalledAppCard
                            key={app.id}
                            app={app}
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
