import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, hex }) => {
  const hexValue = `#${hex}`;
  const [copied, setCopied] = useState(false);

  const copyValue = () => {
    navigator.clipboard.writeText(hexValue);
    setCopied(true);
  };

  useEffect(() => {
    console.log('test');
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <article
      className="color"
      style={{ backgroundColor: `rgb(${rgb.join(',')})` }}
      onClick={copyValue}
    >
      <p className="percent-value">{weight}%</p>
      <p className="">{hexValue}</p>
      {copied ? <p className="alert">copied to clipboard</p> : null}
    </article>
  );
};

export default SingleColor;
