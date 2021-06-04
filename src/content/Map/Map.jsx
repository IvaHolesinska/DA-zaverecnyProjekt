import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import WorldMap from 'react-world-map';
import '../Map/style.css';

export const Map = () => {
  const [selected, onSelect] = useState(null);

  return (
    <>
      <div className="map-container">
        <WorldMap selected={selected} onSelect={onSelect} />
      </div>
    </>
  );
};
