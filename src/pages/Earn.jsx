import React from 'react';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { RiSurveyLine } from 'react-icons/ri';

const Earn = () => {
  // Sample offers data
  const offers = [
    {
      id: 1,
      name: 'Watch Videos and Earn',
      description: 'Watch 10 short videos and earn 100 points.',
      points: 100,
      image: 'https://via.placeholder.com/150', // Example image
    },
    {
      id: 2,
      name: 'Complete a Survey',
      description: 'Complete a quick survey and get 200 points.',
      points: 200,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Sign Up for Free Trial',
      description: 'Sign up for a free trial and earn 300 points.',
      points: 300,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Watch Videos and Earn',
      description: 'Watch 10 short videos and earn 100 points.',
      points: 100,
      image: 'https://via.placeholder.com/150', // Example image
    },
    {
      id: 5,
      name: 'Complete a Survey',
      description: 'Complete a quick survey and get 200 points.',
      points: 200,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Sign Up for Free Trial',
      description: 'Sign up for a free trial and earn 300 points.',
      points: 300,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Watch Videos and Earn',
      description: 'Watch 10 short videos and earn 100 points.',
      points: 100,
      image: 'https://via.placeholder.com/150', // Example image
    },
    {
      id: 8,
      name: 'Complete a Survey',
      description: 'Complete a quick survey and get 200 points.',
      points: 200,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      name: 'Sign Up for Free Trial',
      description: 'Sign up for a free trial and earn 300 points.',
      points: 300,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2"><MdOutlineLocalOffer size={25} />
        My Offers</h1>
        <div className="grid gap-5 grid-cols-6">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2"><MdOutlineLocalOffer size={25} />
        Offer Partners</h1>
        <div className="grid gap-5 grid-cols-6">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2"><RiSurveyLine size={25} />
        Survey Partners</h1>
        <div className="grid gap-5 grid-cols-6">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Offer Card Component
const OfferCard = ({ offer }) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        src={offer.image}
        alt={offer.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold mb-2">{offer.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{offer.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-green-600 font-bold">{offer.points} Points</span>
        </div>
      </div>
    </div>
  );
};

export default Earn;
