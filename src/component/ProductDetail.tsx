import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                );
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                Loading...
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen">
                Product not found
            </div>
        );
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 flex items-center justify-center">
                            <img
                                className="w-full h-full object-contain p-4"
                                src={product.image}
                                alt={product.title}
                            />
                        </div>
                    </div>

                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {product.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {product.description}
                        </p>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">
                                ID:
                            </span>
                            <span className="text-gray-600 dark:text-gray-300 ml-2">
                                {product.id}
                            </span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">
                                Category:
                            </span>
                            <span className="text-gray-600 dark:text-gray-300 ml-2">
                                {product.category}
                            </span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">
                                Price:
                            </span>
                            <span className="text-gray-600 dark:text-gray-300 ml-2">
                                ${product.price.toFixed(2)}
                            </span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">
                                Rating:
                            </span>
                            <span className="text-gray-600 dark:text-gray-300 ml-2">
                                {product.rating.rate} / 5
                            </span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">
                                Reviews Count:
                            </span>
                            <span className="text-gray-600 dark:text-gray-300 ml-2">
                                {product.rating.count}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
