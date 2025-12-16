import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA } from '../constants';
import { LocationType } from '../types';
import { MapPin, Bus, Utensils, BedDouble, Camera, ShoppingBag, Dumbbell } from 'lucide-react';

const getIcon = (type: LocationType) => {
  switch (type) {
    case LocationType.TRANSPORT: return <Bus className="w-5 h-5 text-blue-500" />;
    case LocationType.FOOD: return <Utensils className="w-5 h-5 text-orange-500" />;
    case LocationType.HOTEL: return <BedDouble className="w-5 h-5 text-indigo-500" />;
    case LocationType.SHOPPING: return <ShoppingBag className="w-5 h-5 text-pink-500" />;
    case LocationType.ACTIVITY: return <Dumbbell className="w-5 h-5 text-green-500" />;
    case LocationType.SIGHTSEEING: return <Camera className="w-5 h-5 text-purple-500" />;
    default: return <MapPin className="w-5 h-5 text-gray-500" />;
  }
};

const ItineraryView: React.FC = () => {
  const [selectedDayId, setSelectedDayId] = useState<string>('d1');

  // Auto-scroll to current day if trip is happening
  useEffect(() => {
    // Logic to select day based on real date could go here
  }, []);

  const currentSchedule = ITINERARY_DATA.find(d => d.id === selectedDayId);

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Date Selector */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur shadow-sm border-b border-slate-200">
        <div className="flex overflow-x-auto no-scrollbar py-3 px-2 space-x-3 snap-x">
          {ITINERARY_DATA.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDayId(day.id)}
              className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-16 rounded-xl transition-all snap-start ${
                selectedDayId === day.id
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              <span className="text-xs font-medium uppercase">{day.weekday}</span>
              <span className="text-lg font-bold">{day.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {currentSchedule && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 px-2">{currentSchedule.title}</h2>
            
            <div className="relative pl-4 space-y-8 before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {currentSchedule.events.map((event, idx) => (
                <div key={idx} className="relative flex items-start group">
                  {/* Icon Marker */}
                  <div className={`absolute -left-4 mt-1 w-8 h-8 rounded-full border-4 border-slate-50 bg-white flex items-center justify-center shadow-sm z-10`}>
                    {getIcon(event.type)}
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-8 bg-white p-4 rounded-xl shadow-sm border border-slate-100 w-full transition-shadow hover:shadow-md">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        {event.time}
                      </span>
                      {event.location && (
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-slate-400 hover:text-blue-500 flex items-center"
                        >
                          <MapPin className="w-3 h-3 mr-1" /> 地圖
                        </a>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{event.title}</h3>
                    {event.description && (
                      <p className="text-slate-600 text-sm leading-relaxed mb-2">{event.description}</p>
                    )}
                    {(event.notes || event.transportInfo) && (
                      <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                        {event.transportInfo && (
                          <div className="flex items-center">
                             <Bus className="w-3 h-3 mr-2 opacity-70" /> {event.transportInfo}
                          </div>
                        )}
                        {event.notes && (
                          <div className="flex items-start">
                             <div className="w-3 h-3 mr-2 mt-0.5 opacity-70">ℹ️</div> 
                             <span>{event.notes}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItineraryView;