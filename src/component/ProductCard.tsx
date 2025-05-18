import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../pages/CardContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div onClick={handleViewDetails} className="w-full max-w-xs m-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 h-full flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        {/* Product Image */}
        <div className="relative h-48 w-full bg-white flex items-center justify-center">
          <img
            className="max-h-full max-w-full object-contain p-4"
            src={product.image}
            alt={product.title}
          />
          {/* SALE Badge */}
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            SALE
          </div>
          {/* Favorite Icon */}
          <button
            onClick={toggleFavorite}
            className={`absolute top-3 left-3 text-xl ${
              isFavorite ? "text-red-500" : "text-gray-500"
            }`}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg font-medium mb-2 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {product.description}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-lg">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className="text-center">
              <button
                onClick={handleViewDetails}
                className="text-blue-500 hover:underline text-sm font-semibold"
              >
                View Product details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
