import React, { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import SkeletonLoader from "../Components/SkeletonLoader";
import useAppList from "../Hooks/useAppList";
import appError from "../assets/App-Error.png";

const Products = () => {
  const { products, loading, error } = useAppList();
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);


  useEffect(() => {
    setIsSearching(true);

    const term = search.trim().toLowerCase();
    const filtered = term
      ? products.filter((product) =>
          product.title.toLowerCase().includes(term)
        )
      : products;

    setFilteredProducts(filtered);

 
    const timer = setTimeout(() => setIsSearching(false), 300);
    return () => clearTimeout(timer);
  }, [search, products]);

  if (error)
    
    return (
      <p className="text-red-500 text-center py-8">{error.message}</p>
    );

  return (
   <div className="max-w-[1340px] mx-auto space-y-6 px-8 md:px-4 lg:px-0">
      
      <div className="text-center pt-6 space-y-2">
        <h1 className="text-3xl font-semibold pt-6">Our Applications</h1>
        <p className="text-gray-600">Explore all apps developed by us.</p>
      </div>

    
      <div className="flex justify-between items-center py-5">
        <span className="text-xl font-bold text-black">
          ({filteredProducts.length}) Apps Found
        </span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="🔍 Search Apps..."
          className="border rounded px-3 py-2 w-64"
        />
      </div>

  
      {loading || isSearching ? (
        <SkeletonLoader count={16} />
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center py-10 text-gray-700">
          <img src={appError} alt="App Error" className="w-60" />
          <h2 className="text-2xl font-bold mt-4">No Apps Found</h2>
        </div>
      )}
    </div>
  );
};

export default Products;
