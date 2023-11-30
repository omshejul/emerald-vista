import React from 'react';

const GoogleMapEmbed: React.FC = () => {
  return (
    <div style={{ border: 'none', padding: 0, margin: 0 }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15130.102094476559!2d73.7698055!3d18.5503316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf179271c501%3A0xb218f3b8e267cc85!2sEmerald%20Vista!5e0!3m2!1sen!2sin!4v1701174451517!5m2!1sen!2sin" 
        style={{ width: '100%', maxWidth: '768px', height: '450px', border: 'none' }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default GoogleMapEmbed;
