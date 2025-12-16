import React, { useState } from 'react';
import ItineraryView from './components/ItineraryView';
import PlacesView from './components/PlacesView';
import { Calendar, Map, Snowflake } from 'lucide-react';
import { TRIP_DATES } from './constants';

enum Tab {
  ITINERARY = 'itinerary',
  PLACES = 'places'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ITINERARY);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.ITINERARY: return <ItineraryView />;
      case Tab.PLACES: return <PlacesView />;
      default: return <ItineraryView />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-md mx-auto md:max-w-4xl md:border-x md:border-slate-200 shadow-2xl bg-white overflow-hidden">
      
      {/* Mobile Header (Hidden on md) */}
      <div className="md:hidden bg-blue-600 text-white p-4 pt-6 shadow-md flex justify-between items-center z-20 shrink-0">
        <div>
            <h1 className="font-bold text-xl flex items-center gap-2">
                <Snowflake className="w-5 h-5" /> 北海道 2024
            </h1>
            <p className="text-xs text-blue-100 opacity-90">{TRIP_DATES}</p>
        </div>
      </div>

      {/* Desktop Header (Formerly Sidebar) */}
      <div className="hidden md:flex w-full bg-slate-900 text-white p-4 border-b border-slate-800 items-center justify-between shrink-0">
        <div className="flex items-center gap-6">
            <h1 className="font-bold text-xl flex items-center gap-2">
                <Snowflake className="text-blue-400 w-6 h-6" /> 北海道
            </h1>
            <p className="text-slate-400 text-sm border-l border-slate-700 pl-4 py-1">{TRIP_DATES}</p>
        </div>
        
        <nav className="flex items-center gap-2">
            <button 
                onClick={() => setActiveTab(Tab.ITINERARY)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${activeTab === Tab.ITINERARY ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
                <Calendar className="w-4 h-4" /> 行程
            </button>
            <button 
                onClick={() => setActiveTab(Tab.PLACES)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${activeTab === Tab.PLACES ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
                <Map className="w-4 h-4" /> 地點
            </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative h-full overflow-hidden">
        {renderContent()}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-2 flex justify-between items-center z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe">
        <button 
            onClick={() => setActiveTab(Tab.ITINERARY)}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${activeTab === Tab.ITINERARY ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
            <Calendar className="w-6 h-6" />
            <span className="text-[10px] font-medium">行程</span>
        </button>
        <button 
            onClick={() => setActiveTab(Tab.PLACES)}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${activeTab === Tab.PLACES ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
            <Map className="w-6 h-6" />
            <span className="text-[10px] font-medium">地圖</span>
        </button>
      </div>
    </div>
  );
};

export default App;