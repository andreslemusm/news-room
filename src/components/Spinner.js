import React from 'react';

export default function Spinner() {
  return (
    <div className="vh-75 flex items-center">
      <div className="lds-grid center">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
