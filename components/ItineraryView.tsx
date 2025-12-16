import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA } from '../constants';
import { LocationType, ItineraryEvent } from '../types';
import { getWeatherForDate, getWeatherIconLabel } from '../utils/weather';
import { MapPin, Bus, Utensils, BedDouble, Camera, ShoppingBag, Dumbbell, ChevronDown, ChevronUp, Info, Lightbulb, X, CloudSnow, Thermometer } from 'lucide-react';

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

const TaxiModal: React.FC<{ address: string; name?: string; onClose: () => void }> = ({ address, name, onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-center items-center p-6 text-center animate-in fade-in duration-200" onClick={onClose}>
    <button onClick={onClose} className="absolute top-6 right-6 text-white/80 hover:text-white">
      <X className="w-8 h-8" />
    </button>
    <p className="text-slate-400 mb-4 text-sm font-medium uppercase tracking-widest">Show to Driver</p>
    <div className="bg-white text-slate-900 p-8 rounded-2xl w-full max-w-sm shadow-2xl" onClick={e => e.stopPropagation()}>
      {name && <h3 className="text-2xl font-bold mb-4 border-b pb-4">{name}</h3>}
      <p className="text-3xl font-black leading-relaxed select-all">{address}</p>
    </div>
    <p className="mt-8 text-white/60 text-sm">Tap anywhere to close</p>
  </div>
);

const WeatherModal: React.FC<{ date: string; locationCoords?: { lat: number; lng: number }; onClose: () => void }> = ({ date, locationCoords, onClose }) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!locationCoords) return;

      try {
        const result = await getWeatherForDate(locationCoords.lat, locationCoords.lng, date);
        setWeather(result);
      } catch (error) {
        console.error('Weather fetch failed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [date, locationCoords]);

  const weatherInfo = weather ? getWeatherIconLabel(weather.code) : null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-center items-center p-6 text-center animate-in fade-in duration-200" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-white/80 hover:text-white">
        <X className="w-8 h-8" />
      </button>

      <p className="text-slate-400 mb-6 text-sm font-medium uppercase tracking-widest">天氣預報</p>

      <div className="bg-white text-slate-900 p-8 rounded-2xl w-full max-w-sm shadow-2xl" onClick={e => e.stopPropagation()}>
        <h3 className="text-2xl font-bold mb-6">{date}</h3>

        {loading ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            <p className="text-slate-500">載入天氣中...</p>
          </div>
        ) : weather && weatherInfo ? (
          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">{weatherInfo.icon}</div>
            <div className="text-2xl font-bold text-slate-800">{weatherInfo.label}</div>
            <div className="flex justify-center items-center space-x-4 text-xl">
              <div className="flex items-center">
                <Thermometer className="w-5 h-5 mr-1 text-red-500" />
                <span className="font-semibold">{Math.round(weather.maxTemp)}°</span>
              </div>
              <span className="text-slate-400">/</span>
              <div className="flex items-center">
                <Thermometer className="w-5 h-5 mr-1 text-blue-500" />
                <span className="font-semibold">{Math.round(weather.minTemp)}°</span>
              </div>
            </div>
            <div className="text-sm text-slate-500 mt-4">
              您所在位置的即時天氣預報
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-slate-500">無法載入天氣資料</p>
            <p className="text-xs text-slate-400 mt-2">請檢查網路連線</p>
          </div>
        )}
      </div>

      <p className="mt-8 text-white/60 text-sm">點擊任意處關閉</p>
    </div>
  );
};

const EventCard: React.FC<{ event: ItineraryEvent }> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTaxi, setShowTaxi] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-white p-4 rounded-xl shadow-sm border border-slate-100 w-full transition-all duration-200 cursor-pointer ${isExpanded ? 'ring-2 ring-blue-100 shadow-md' : 'hover:shadow-md'}`}
      >
        <div className="flex justify-between items-start mb-1">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
            {event.time}
          </span>
          <div className="flex items-center text-slate-400">
             {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-slate-800 mb-1">{event.title}</h3>
        
        {event.description && (
          <p className="text-slate-600 text-sm leading-relaxed mb-2">{event.description}</p>
        )}

        {/* Essential Info (Always visible or primary line) */}
        {event.location && !isExpanded && (
           <p className="text-xs text-slate-400 flex items-center mt-1">
             <MapPin className="w-3 h-3 mr-1" /> {event.location}
           </p>
        )}

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
            
            {/* Rich Actions */}
            <div className="flex gap-2 flex-wrap">
              {event.location && (
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((event.japaneseAddress || event.location))}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center transition-colors"
                >
                  <MapPin className="w-3 h-3 mr-1" /> Google Map
                </a>
              )}
              {event.japaneseAddress && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTaxi(true);
                  }}
                  className="flex-1 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center transition-colors"
                >
                  🚕 Taxi Card
                </button>
              )}
            </div>

            {/* Transport Details */}
            {event.transportDetail && (
              <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-700 border border-slate-100">
                <h4 className="font-bold text-slate-900 text-xs mb-1 flex items-center uppercase tracking-wide">
                  <Bus className="w-3 h-3 mr-1" /> Transport Guide
                </h4>
                <p className="whitespace-pre-line">{event.transportDetail}</p>
              </div>
            )}

            {/* Tips Section */}
            {event.tips && event.tips.length > 0 && (
              <div className="bg-amber-50 p-3 rounded-lg text-sm text-amber-900 border border-amber-100">
                <h4 className="font-bold text-amber-800 text-xs mb-2 flex items-center uppercase tracking-wide">
                  <Lightbulb className="w-3 h-3 mr-1" /> Pro Tips
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-1">
                  {event.tips.map((tip, idx) => (
                    <li key={idx} className="text-amber-800/90">{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Basic Metadata */}
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
              {event.cost && (
                <div className="flex items-center">
                  <span className="font-medium mr-2 text-slate-400">Cost:</span> {event.cost}
                </div>
              )}
               {event.transportInfo && (
                  <div className="flex items-center">
                     <span className="font-medium mr-2 text-slate-400">Info:</span> {event.transportInfo}
                  </div>
                )}
               {event.notes && (
                  <div className="flex items-start">
                     <Info className="w-3 h-3 mr-2 mt-0.5 shrink-0" /> 
                     <span>{event.notes}</span>
                  </div>
                )}
            </div>

          </div>
        )}
      </div>

      {showTaxi && event.japaneseAddress && (
        <TaxiModal 
          address={event.japaneseAddress} 
          name={event.japaneseName || event.title} 
          onClose={() => setShowTaxi(false)} 
        />
      )}
    </>
  );
};

const ItineraryView: React.FC = () => {
  const [selectedDayId, setSelectedDayId] = useState<string>('d1');
  const [showWeatherModal, setShowWeatherModal] = useState(false);

  // Auto-select today if within date range
  useEffect(() => {
    // Logic could go here
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
            <div className="flex justify-between items-end px-1">
              <h2 className="text-2xl font-bold text-slate-900">{currentSchedule.title}</h2>
              {currentSchedule.weatherForecast && (
                <div
                  className="text-right cursor-pointer hover:bg-blue-50 p-2 rounded-lg transition-colors"
                  onClick={() => setShowWeatherModal(true)}
                >
                  <div className="flex items-center justify-end text-blue-600 text-sm font-medium">
                     <CloudSnow className="w-4 h-4 mr-1" />
                     預報
                  </div>
                  <p className="text-xs text-slate-500">{currentSchedule.weatherForecast}</p>
                </div>
              )}
            </div>
            
            <div className="relative pl-4 space-y-8 before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
              {currentSchedule.events.map((event, idx) => (
                <div key={idx} className="relative flex items-start group">
                  {/* Icon Marker */}
                  <div className={`absolute -left-4 mt-1 w-8 h-8 rounded-full border-4 border-slate-50 bg-white flex items-center justify-center shadow-sm z-10`}>
                    {getIcon(event.type)}
                  </div>
                  
                  {/* Event Component */}
                  <div className="ml-8 w-full">
                    <EventCard event={event} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showWeatherModal && currentSchedule && (
        <WeatherModal
          date={currentSchedule.date}
          locationCoords={currentSchedule.locationCoords}
          onClose={() => setShowWeatherModal(false)}
        />
      )}
    </div>
  );
};

export default ItineraryView;
