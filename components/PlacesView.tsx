import React from 'react';
import { SAVED_PLACES, MAP_LIST_URL } from '../constants';
import { LocationType } from '../types';
import { Map, ExternalLink, BedDouble, Utensils, Camera, Dumbbell } from 'lucide-react';

const getTypeColor = (type: LocationType) => {
  switch (type) {
    case LocationType.HOTEL: return 'bg-indigo-100 text-indigo-700';
    case LocationType.FOOD: return 'bg-orange-100 text-orange-700';
    case LocationType.SIGHTSEEING: return 'bg-purple-100 text-purple-700';
    case LocationType.ACTIVITY: return 'bg-green-100 text-green-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const getTypeIcon = (type: LocationType) => {
  switch (type) {
    case LocationType.HOTEL: return <BedDouble className="w-4 h-4" />;
    case LocationType.FOOD: return <Utensils className="w-4 h-4" />;
    case LocationType.SIGHTSEEING: return <Camera className="w-4 h-4" />;
    case LocationType.ACTIVITY: return <Dumbbell className="w-4 h-4" />;
    default: return <Map className="w-4 h-4" />;
  }
};

const PlacesView: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-50 p-4 pb-24 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">已儲存地點</h1>
        <p className="text-slate-500 text-sm mb-4">快速存取旅程中的重要地點。</p>
        
        <a 
          href={MAP_LIST_URL} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-transform active:scale-95"
        >
          <Map className="w-5 h-5 mr-2" />
          開啟完整 Google 地圖列表
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SAVED_PLACES.map((place) => (
          <div key={place.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${getTypeColor(place.type)}`}>
                  {getTypeIcon(place.type)}
                  {place.type}
                </span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1">{place.name}</h3>
              {place.jpName && <p className="text-sm text-slate-500 font-medium mb-1">{place.jpName}</p>}
              <p className="text-xs text-slate-400 mb-3">{place.address}</p>
            </div>
            
            <a 
              href={place.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + " " + (place.jpName || "") + " " + place.address)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-full flex items-center justify-center py-2 px-3 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              開啟地圖 <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesView;