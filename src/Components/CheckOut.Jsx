import React, { useState } from 'react';

const CheckOut = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 2,
    3: 1
  });

  const cartItems = [
    { 
      id: 1, 
      name: 'XX99 MK II', 
      price: 2999, 
      image: '/images/xx99-mk2.jpg', // Replace with actual image path
      alt: 'XX99 Mark Two Headphones'
    },
    { 
      id: 2, 
      name: 'XX59', 
      price: 899, 
      image: '/images/xx59.jpg', // Replace with actual image path
      alt: 'XX59 Headphones'
    },
    { 
      id: 3, 
      name: 'YX1', 
      price: 599, 
      image: '/images/yx1.jpg', // Replace with actual image path
      alt: 'YX1 Wireless Earphones'
    }
  ];

  const updateQuantity = (id, change) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, prev[id] + change)
    }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * quantities[item.id]);
    }, 0);
  };

  const removeAll = () => {
    setQuantities({ 1: 0, 2: 0, 3: 0 });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-4 bg-white rounded-lg shadow-2xl w-96 p-6 z-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-black">CART ({Object.values(quantities).reduce((a, b) => a + b, 0)})</h2>
        <button 
          onClick={removeAll}
          className="text-gray-500 hover:text-gray-700 text-sm underline"
        >
          Remove all
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-6 mb-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gray-200 items-center justify-center text-gray-400 text-xs">
                  No Image
                </div>
              </div>
              <div>
                <h3 className="font-bold text-black text-sm mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm font-medium">${item.price.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="flex items-center bg-gray-100 rounded">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-500 font-bold"
              >
                -
              </button>
              <span className="w-8 h-8 flex items-center justify-center text-black font-bold text-sm">
                {quantities[item.id]}
              </span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-500 font-bold"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-500 font-medium">TOTAL</span>
        <span className="text-black font-bold text-lg">${calculateTotal().toLocaleString()}</span>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 transition-colors duration-200 text-sm tracking-wider">
        CHECKOUT
      </button>
    </div>
  );
};

export default CheckOut;