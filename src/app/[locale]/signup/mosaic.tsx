import React from "react";

const Mosaic = () => {
  return (
    <div className="left">
      <svg width="645" height="736" viewBox="0 0 645 736" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_ddddd_297_2520)">
          <rect x="171.766" y="16.403" width="376.982" height="565.069" fill="url(#pattern0)" />
          <ellipse cx="191.788" cy="564.696" rx="45.6906" ry="45.511" fill="#0A518B" />
          <path d="M188.693 274.458L129.846 320.09L119.752 246.311L188.693 274.458Z" fill="#FBB606">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 154.77 283.2" to="360 154.77 283.2" dur="10s" repeatCount="indefinite" />
          </path>
          <rect x="525.229" y="441.429" width="63.3504" height="63.6372" rx="9.68393" fill="#FBB606">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 556.404 473.748" to="360 556.404 473.748" dur="10s" begin="3s" repeatCount="indefinite" />
          </rect>
        </g>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_297_2520" transform="matrix(0.00245098 0 0 0.00163515 0 -0.00035712)" />
          </pattern>
          <image id="image0_297_2520" width="408" height="612" href="/signup/mosaic.webp" />
        </defs>
      </svg>
    </div>
  );
};

export default Mosaic;
