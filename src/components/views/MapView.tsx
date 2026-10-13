import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Compass, Search, Filter, Phone, Clock, ExternalLink, 
  Navigation, List, Map as MapIcon, Layers, Building2, ShieldCheck, 
  Hospital, School, ShoppingBag, Landmark, Wrench, RefreshCw 
} from 'lucide-react';
import L from 'leaflet';
import { PUBLIC_FACILITIES_DATABASE } from '../../data/facilities';
import { PublicFacility } from '../../types';
import { useApp } from '../../context/AppContext';

export const MapView: React.FC = () => {
  const { language, setSelectedFacilityForDetail, t } = useApp();
  const isEn = language === 'en';

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLayer, setSelectedLayer] = useState<string>('all');
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [locationStatus, setLocationStatus] = useState<'idle' | 'locating' | 'granted' | 'denied'>('idle');

  const layerOptions = [
    { key: 'all', labelEn: 'All Bengaluru Facilities', labelKn: 'ಎಲ್ಲಾ ಬೆಂಗಳೂರು ಕೇಂದ್ರಗಳು', count: PUBLIC_FACILITIES_DATABASE.length, color: '#3678F6' },
    { key: 'janaushadhi_kendra', labelEn: 'PM Janaushadhi (Govt Medical Stores)', labelKn: 'ಪಿಎಂ ಜನೌಷಧಿ (ಔಷಧಿ ಮಳಿಗೆ)', count: PUBLIC_FACILITIES_DATABASE.filter(f => f.category === 'janaushadhi_kendra').length, color: '#14B8A6' },
    { key: 'hospital', labelEn: 'Govt Major Hospitals', labelKn: 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳು', count: PUBLIC_FACILITIES_DATABASE.filter(f => f.category === 'hospital').length, color: '#EF4444' },
    { key: 'canteen', labelEn: 'Indira Canteens (₹5/₹10 Meals)', labelKn: 'ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ (ಊಟ & ತಿಂಡಿ)', count: PUBLIC_FACILITIES_DATABASE.filter(f => f.category === 'canteen').length, color: '#F59E0B' },
    { key: 'phc', labelEn: 'Namma Clinics & PHCs', labelKn: 'ನಮ್ಮ ಕ್ಲಿನಿಕ್ & ಯುಪಿಎಚ್‌ಸಿ', count: PUBLIC_FACILITIES_DATABASE.filter(f => f.category === 'phc').length, color: '#10B981' },
    { key: 'fair_price_shop', labelEn: 'Fair Price Ration Shops', labelKn: 'ನ್ಯಾಯಬೆಲೆ ರೇಷನ್ ಅಂಗಡಿಗಳು', count: PUBLIC_FACILITIES_DATABASE.filter(f => f.category === 'fair_price_shop').length, color: '#F97316' },
    { key: 'service_centre', labelEn: 'Bangalore One Centres', labelKn: 'ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರಗಳು', count: PUBLIC_FACILITIES_DATABASE.filter(f => f.category === 'service_centre').length, color: '#3B82F6' },
    { key: 'iti', labelEn: 'Government ITIs', labelKn: 'ಸರ್ಕಾರಿ ಐಟಿಐಗಳು', count: PUBLIC_FACILITIES_DATABASE.filter(f => f.category === 'iti').length, color: '#EC4899' },
    { key: 'college', labelEn: 'Govt Colleges', labelKn: 'ಸರ್ಕಾರಿ ಕಾಲೇಜುಗಳು', count: PUBLIC_FACILITIES_DATABASE.filter(f => f.category === 'college').length, color: '#8B5CF6' },
    { key: 'school', labelEn: 'Govt Schools', labelKn: 'ಸರ್ಕಾರಿ ಶಾಲೆಗಳು', count: PUBLIC_FACILITIES_DATABASE.filter(f => f.category === 'school').length, color: '#6366F1' }
  ];

  const filteredFacilities = PUBLIC_FACILITIES_DATABASE.filter((fac) => {
    if (selectedLayer !== 'all' && fac.category !== selectedLayer) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = fac.name.en.toLowerCase().includes(q) || fac.name.kn.toLowerCase().includes(q);
      const matchLoc = fac.locality.toLowerCase().includes(q) || fac.district.toLowerCase().includes(q);
      return matchName || matchLoc;
    }
    return true;
  });

  // Geolocation trigger
  const requestUserLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('denied');
      return;
    }
    setLocationStatus('locating');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        setUserLocation(coords);
        setLocationStatus('granted');
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setView(coords, 14);
          L.circleMarker(coords, {
            radius: 8,
            fillColor: '#3678F6',
            color: '#FFFFFF',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.9
          }).addTo(mapInstanceRef.current).bindPopup('<b>Your Current Location</b>').openPopup();
        }
      },
      () => {
        setLocationStatus('denied');
      },
      { timeout: 10000 }
    );
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (viewMode !== 'map' || !mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Default centre: Bengaluru (City Centre)
      const initialMap = L.map(mapContainerRef.current, {
        center: [12.9716, 77.5946],
        zoom: 12,
        scrollWheelZoom: true
      });

      // Permitted OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(initialMap);

      const markersGroup = L.layerGroup().addTo(initialMap);
      markersLayerRef.current = markersGroup;
      mapInstanceRef.current = initialMap;
    }

    return () => {
      // Clean up map when component unmounts if needed
    };
  }, [viewMode]);

  // Update map markers when filtered facilities change
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current || viewMode !== 'map') return;

    markersLayerRef.current.clearLayers();

    filteredFacilities.forEach((fac) => {
      const getMarkerColor = (cat: string) => {
        switch (cat) {
          case 'janaushadhi_kendra': return '#14B8A6';
          case 'hospital': return '#EF4444';
          case 'canteen': return '#F59E0B';
          case 'phc': return '#10B981';
          case 'chc': return '#06B6D4';
          case 'fair_price_shop': return '#F97316';
          case 'service_centre': return '#3B82F6';
          case 'iti': return '#EC4899';
          case 'college': return '#8B5CF6';
          case 'school': return '#6366F1';
          default: return '#3B82F6';
        }
      };

      const color = getMarkerColor(fac.category);

      const customIcon = L.divIcon({
        className: 'custom-facility-pin',
        html: `
          <div style="background-color: ${color}; width: 28px; height: 28px; border-radius: 50%; border: 2.5px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
            <div style="width: 8px; height: 8px; border-radius: 50%; background: white;"></div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker([fac.latitude, fac.longitude], { icon: customIcon });

      const popupHtml = `
        <div style="font-family: inherit; font-size: 12px; min-width: 200px; padding: 2px;">
          <div style="font-size: 10px; color: #42DCC5; text-transform: uppercase; font-weight: 700;">
            ${fac.category.replace('_', ' ')}
          </div>
          <div style="font-size: 13px; font-weight: 700; color: white; margin: 2px 0;">
            ${isEn ? fac.name.en : fac.name.kn}
          </div>
          <div style="color: #cbd5e1; font-size: 11px; margin-bottom: 6px;">
            ${fac.locality} · ${fac.district}
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 8px;">
            ${fac.timings ? `<b>Hours:</b> ${fac.timings}` : ''}
          </div>
          <a href="${fac.directionsUrl}" target="_blank" rel="noreferrer" 
             style="display: inline-block; background: #3678F6; color: white; padding: 4px 10px; border-radius: 6px; text-decoration: none; font-size: 11px; font-weight: 600;">
             Get Directions →
          </a>
        </div>
      `;

      marker.bindPopup(popupHtml);
      markersLayerRef.current?.addLayer(marker);
    });

    if (filteredFacilities.length > 0) {
      const group = L.featureGroup(markersLayerRef.current.getLayers() as L.Layer[]);
      mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
    }
  }, [filteredFacilities, isEn, viewMode]);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#42DCC5] font-semibold">
            {isEn ? 'OpenStreetMap Civic Directory' : 'ನಾಗರಿಕ ಸೇವಾ ನಕ್ಷೆ'}
          </span>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            {isEn ? 'Bengaluru Public Services, Healthcare & Food Map' : 'ಬೆಂಗಳೂರು ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳು, ಆರೋಗ್ಯ ಮತ್ತು ಆಹಾರ ನಕ್ಷೆ'}
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
            {isEn
              ? 'Explore verified government facilities across Bengaluru Urban: PM Janaushadhi Kendras (generic medicine stores with 50–90% discount), Indira Canteens (₹5/₹10 meals), major public hospitals, Namma Clinics, Fair Price Shops, and Bangalore One centres.'
              : 'ಬೆಂಗಳೂರಿನ ಸಾರ್ವಜನಿಕ ಸೌಲಭ್ಯಗಳು: ಪ್ರಧಾನಮಂತ್ರಿ ಜನೌಷಧಿ ಕೇಂದ್ರಗಳು (ಶೇ. ೫೦-೯೦ ರಿಯಾಯಿತಿ ಔಷಧಗಳು), ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್‌ಗಳು, ಪ್ರಮುಖ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳು, ನಮ್ಮ ಕ್ಲಿನಿಕ್, ರೇಷನ್ ಅಂಗಡಿಗಳು ಮತ್ತು ಬೆಂಗಳೂರು ಒನ್.'}
          </p>
        </div>

        {/* View Switcher: Map vs Accessible List */}
        <div className="flex items-center gap-2">
          <button
            onClick={requestUserLocation}
            className={`px-3 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-colors cursor-pointer ${
              locationStatus === 'granted'
                ? 'bg-emerald-950/30 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
            }`}
            title="Use My Location"
          >
            <Compass className="w-4 h-4 text-[#42DCC5]" />
            <span>
              {locationStatus === 'locating'
                ? (isEn ? 'Locating...' : 'ಹುಡುಕಲಾಗುತ್ತಿದೆ...')
                : locationStatus === 'granted'
                ? (isEn ? 'Location Active' : 'ಸ್ಥಳ ಸಕ್ರಿಯ')
                : (isEn ? 'Find Nearby' : 'ಹತ್ತಿರದ ಸ್ಥಳ')}
            </span>
          </button>

          <div className="flex items-center p-1 bg-[#0F1E36] rounded-xl border border-slate-700 text-xs">
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'map' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>{isEn ? 'Map' : 'ನಕ್ಷೆ'}</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>{isEn ? 'Accessible List' : 'ಪಟ್ಟಿ'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search and 8-Layer Filters */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder={isEn ? 'Search facilities by name, locality (e.g. Malleshwaram, Jayanagar, Victoria)...' : 'ಸೌಲಭ್ಯದ ಹೆಸರು ಅಥವಾ ಬಡಾವಣೆ ಮೂಲಕ ಹುಡುಕಿ...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0F1E36] border border-slate-700 text-xs md:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Layer Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {layerOptions.map((layer) => {
            const isActive = selectedLayer === layer.key;
            return (
              <button
                key={layer.key}
                onClick={() => setSelectedLayer(layer.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#3678F6] text-white shadow-sm'
                    : 'bg-[#0B1526] border border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: layer.color }} />
                <span>{isEn ? layer.labelEn : layer.labelKn}</span>
                <span className="text-[10px] opacity-75 font-mono">({layer.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Map or Accessible List View */}
      {viewMode === 'map' ? (
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#070D18] h-[550px] shadow-2xl">
          <div ref={mapContainerRef} className="w-full h-full" />
          
          {/* Overlay Map Badge */}
          <div className="absolute top-3 right-3 z-[1000] p-2.5 rounded-xl bg-[#0B1220]/90 backdrop-blur-md border border-slate-700 text-xs text-slate-300 shadow-lg hidden sm:block max-w-xs">
            <p className="font-semibold text-white flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-[#42DCC5]" />
              <span>{isEn ? 'Showing Verified Facilities' : 'ದೃಢೀಕೃತ ಸೌಲಭ್ಯಗಳು'}</span>
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {isEn ? `Found ${filteredFacilities.length} public locations in Bengaluru & Karnataka.` : `${filteredFacilities.length} ಸಾರ್ವಜನಿಕ ಕೇಂದ್ರಗಳು ಲಭ್ಯ.`}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="rounded-2xl bg-[#0F1E36] border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="capitalize font-semibold text-[#42DCC5]">
                    {facility.category.replace('_', ' ')}
                  </span>
                  <span>{facility.district}</span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#42DCC5] transition-colors">
                    {isEn ? facility.name.en : facility.name.kn}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{facility.locality} — {isEn ? facility.address.en : facility.address.kn}</span>
                  </p>
                </div>

                {facility.timings && (
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{facility.timings}</span>
                  </p>
                )}

                {facility.contactNumber && (
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <a href={`tel:${facility.contactNumber}`} className="text-blue-400 hover:underline font-mono">
                      {facility.contactNumber}
                    </a>
                  </p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedFacilityForDetail(facility)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  {isEn ? 'View All Details' : 'ವಿವರಗಳು'}
                </button>

                <a
                  href={facility.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#3678F6] text-white text-xs font-medium flex items-center gap-1 transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>{isEn ? 'Directions' : 'ಮಾರ್ಗ'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Attribution & Ground Truth Safeguard */}
      <div className="p-4 rounded-xl bg-[#09111E] border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            {isEn
              ? 'Real facility coordinates sourced from Karnataka Health, DSEL & Ahara Public Gazette. Zero invented coordinates.'
              : 'ಕರ್ನಾಟಕ ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ ಮತ್ತು ಆಹಾರ ಇಲಾಖೆಯ ಅಧಿಕೃತ ವಿಳಾಸ ಮತ್ತು ನೈಜ ನಿರ್ದೇಶಾಂಕಗಳು.'}
          </span>
        </div>
        <span className="text-[11px] text-slate-500 font-mono">
          Leaflet &copy; OpenStreetMap
        </span>
      </div>
    </div>
  );
};
