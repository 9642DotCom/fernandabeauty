import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full h-[28rem] rounded-2xl overflow-hidden group shadow-lg 
                 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-75 
                 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-pink-500/20
                 border border-pink-300/50"
    >
      {/* Blurred Background Image */}
      <img
        src={service.image}
        alt="" // Decorative background
        className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110 transition-transform duration-500 group-hover:scale-125"
      />
      
      {/* Glassmorphism/Darkening Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col justify-start text-center items-center">
        {/* Sharp, circular image */}
        <img
          src={service.image}
          alt={service.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-pink-500 shadow-lg mb-4 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="flex-grow flex flex-col justify-center">
            <h3 
              className="text-2xl font-serif text-white mb-2" 
              style={{textShadow: '0 2px 5px rgba(0,0,0,0.7)'}}
            >
              {service.name}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed mb-4">{service.description}</p>
        </div>
        
        <div className="text-left text-base space-y-1 text-white w-full bg-black/30 p-3 rounded-lg border border-white/20 mt-auto">
            <p>
                <span className="font-semibold text-pink-300">Aplicação:</span> R$ {service.applicationPrice.toFixed(2)}
            </p>
            {service.maintenancePrice && (
                <p>
                    <span className="font-semibold text-pink-300">Manutenção:</span> R$ {service.maintenancePrice.toFixed(2)}
                </p>
            )}
        </div>
      </div>
    </button>
  );
};

export default ServiceCard;