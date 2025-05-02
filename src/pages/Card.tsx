// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "./CardContext"; // Import useCart

// const Cart: React.FC = () => {
//   const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
//     useCart();

//   // Calculate total
//   const totalAmount = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p>Your cart is currently empty.</p>
//           <Link
//             to="/products"
//             className="bg-gray-900 dark:bg-pink-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 mt-4 inline-block"
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between border-b py-4"
//             >
//               <div className="flex items-center">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-16 h-16 object-cover rounded-md mr-4"
//                 />
//                 <div>
//                   <h3 className="font-bold text-white">{item.title}</h3>
//                   <p className="text-white">${item.price.toFixed(2)}</p>
//                   <div className="flex items-center mt-2 space-x-2">
//                     <button
//                       onClick={() => decreaseQuantity(item.id)}
//                       className="bg-gray-700 text-white px-2 rounded hover:bg-gray-600 disabled:opacity-50"
//                       disabled={item.quantity <= 1}
//                     >
//                       -
//                     </button>
//                     <span className="text-white">{item.quantity}</span>
//                     <button
//                       onClick={() => increaseQuantity(item.id)}
//                       className="bg-gray-700 text-white px-2 rounded hover:bg-gray-600"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-500 hover:text-red-700 font-semibold"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* Total and Payment Section */}
//           <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
//             <div className="flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
//               <span>Total:</span>
//               <span>${totalAmount.toFixed(2)}</span>
//             </div>

//             <div>
//               <h2 className="font-bold mb-2 text-gray-800 dark:text-gray-200">
//                 Choose Payment Method:
//               </h2>
//               <div className="flex space-x-4">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold w-full">
//                   Pay with ABA Bank
//                 </button>
//                 <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold w-full">
//                   Pay with ACLEDA Bank
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
