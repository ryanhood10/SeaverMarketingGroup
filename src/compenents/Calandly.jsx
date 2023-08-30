import React, { useEffect } from 'react';

const Calendly = () => {
  useEffect(() => {
    // This will load the Calendly script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/ryanhood/30min" 
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
  );
}

export default Calendly;
