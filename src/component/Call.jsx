import React from 'react';
import { Phone } from 'lucide-react';

const CallIcon = () => (
  <div className="fixed bottom-6 left-6 z-50">
    <div className="relative group">
      <a href="tel:+919971466271"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative z-10 cursor-pointer transition-all duration-300 hover:scale-110"
        style={{background:'#bb8744'}}
        aria-label="Call Pandit Ji">
        <Phone className="w-6 h-6" style={{color:'#5c1d26'}} />
      </a>
      <div className="absolute inset-0 w-14 h-14 rounded-full animate-ping opacity-20 pointer-events-none"
        style={{background:'#bb8744'}}></div>
      <div className="absolute bottom-16 left-0 text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl"
        style={{background:'#5c1d26', color:'#bb8744'}}>
        Call Us
        <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
          style={{borderTopColor:'#bb8744'}}></div>
      </div>
    </div>
  </div>
);

export default CallIcon;