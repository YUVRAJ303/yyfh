import { useState } from 'react';
import { ChevronLeft } from 'lucide-react'; 

import kayakImage from 'figma:asset/25e22556cd46a6ad6ac7d779147b48cf1c2a50aa.png';

const dates = [
  { day: 'Oct 23', available: true },
  { day: 'Oct 23', available: false },
  { day: 'Oct 24', available: false },
  { day: 'Oct 25', available: false },
  { day: 'Oct 26', available: false },
];

const times = [
  { time: '07:00 am', label: '1 left' },
  { time: '9:00 am', label: '2 left' },
  { time: '11:00 am', label: '3 left' },
  { time: '1:00 pm', label: 'sold out' },
];

export default function App() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const basePrice = 999;
  const subtotal = basePrice * quantity;
  const taxes = 1;
  const total = 958;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-4 py-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.58 0 0 3.58 0 8C0 13.54 8 20 8 20C8 20 16 13.54 16 8C16 3.58 12.42 0 8 0ZM8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 11 6.34 11 8C11 9.66 9.66 11 8 11Z" fill="white"/>
              </svg>
            </div>
            <span className="text-gray-900">Highway ticket</span>
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
            Search
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-8">
        {/* Back Button */}
        <button className="flex items-center gap-1 text-gray-700 mb-4 hover:text-gray-900">
          <ChevronLeft className="w-5 h-5" />
          <span>Details</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,320px] gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={kayakImage} 
                alt="Kayaking through mangrove forest" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Title and Description */}
            <div>
              <h1 className="mb-2">Kayaking</h1>
              <p className="text-gray-600 border border-blue-300 bg-blue-50 px-3 py-2 rounded text-sm">
                Curated small-group experience. Certified guide. Safety first will gear included. Helmet and Life 
                jackets along with an expert will accompany in kayaking.
              </p>
            </div>

            {/* Choose Date */}
            <div>
              <h3 className="mb-3">Choose date</h3>
              <div className="flex gap-2 flex-wrap">
                {dates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(index)}
                    disabled={!date.available}
                    className={`px-4 py-2 rounded border text-sm transition-colors ${
                      selectedDate === index && date.available
                        ? 'bg-yellow-400 border-yellow-400 text-gray-900'
                        : date.available
                        ? 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                        : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {date.day}
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Time */}
            <div>
              <h3 className="mb-3">Choose time</h3>
              <div className="flex gap-2 flex-wrap">
                {times.map((timeSlot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTime(index)}
                    disabled={timeSlot.label === 'sold out'}
                    className={`px-4 py-2 rounded border text-sm transition-colors ${
                      timeSlot.label === 'sold out'
                        ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                        : selectedTime === index
                        ? 'bg-white border-gray-900 text-gray-900'
                        : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                    }`}
                  >
                    <span>{timeSlot.time}</span>
                    {timeSlot.label !== 'sold out' && (
                      <span className="ml-2 text-red-500">{timeSlot.label}</span>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-2">
                All time slots are in UTC (GMT +5:30)
              </p>
            </div>

            {/* About */}
            <div>
              <h3 className="mb-2">About</h3>
              <p className="text-gray-600 text-sm">
                Shared routes, trained guides, and safety briefing. Minimum age 10.
              </p>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="md:sticky md:top-6 h-fit">
            <div className="border-4 border-pink-400 rounded-lg p-4 bg-white">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Starts at</span>
                  <span className="text-gray-900">₹{basePrice}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quantity</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">₹{subtotal}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Taxes</span>
                  <span className="text-gray-900">₹{taxes}</span>
                </div>

                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">₹{total}</span>
                  </div>

                  <Button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-900">
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
