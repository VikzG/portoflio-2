"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader: React.FC = () => {
    const logoRef = useRef<SVGSVGElement>(null);
  
    useEffect(() => {
      if (logoRef.current) {
        const paths = logoRef.current.querySelectorAll('path');
  
        paths.forEach((path, index) => {
          const length = path.getTotalLength();
          path.style.strokeDasharray = `${length}`;
          path.style.strokeDashoffset = `${length}`;
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.5,
            delay: index * 0.5,
            ease: "power1.inOut",
            opacity:1,
          });
        });
      }
    }, []);

  return (
    <div className="loader flex items-center justify-center min-h-screen bg-black-100">
      <svg
        ref={logoRef}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className='w-1/2 h-auto sm:w-3/4 md:w-full lg:w-full xl:w-full '
        viewBox="0 0 963 861"
        style={{
          shapeRendering: 'geometricPrecision',
          textRendering: 'geometricPrecision',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          fill: 'white',
        }}
      >
        <g>
          <path
            style={{ opacity: 0 }}
            fill="none"
            stroke="#fefffe"
            strokeWidth="10"
            d="M 728.5,-0.5 C 739.167,-0.5 749.833,-0.5 760.5,-0.5C 799.594,-0.176959 836.594,8.98971 871.5,27C 918.188,57.0698 946.688,99.5698 957,154.5C 962.594,194.467 955.594,232.133 936,267.5C 929.792,278.755 922.958,289.588 915.5,300C 942.216,335.309 956.549,375.142 958.5,419.5C 956.843,476.974 934.177,524.141 890.5,561C 860.29,583.518 826.29,596.185 788.5,599C 691.832,599.833 595.165,599.667 498.5,598.5C 483.5,559.167 468.5,519.833 453.5,480.5C 561.165,479.667 668.832,479.167 776.5,479C 802.098,476.97 820.932,464.804 833,442.5C 843.999,403.664 830.499,377.497 792.5,364C 785.933,362.35 779.267,361.35 772.5,361C 524.167,360.667 275.833,360.333 27.5,360C 19.152,359.622 10.8186,359.122 2.5,358.5C 2.5,319.167 2.5,279.833 2.5,240.5C 260.834,240.667 519.167,240.5 777.5,240C 814.925,236.409 834.925,215.909 837.5,178.5C 834.767,147.594 818.101,129.094 787.5,123C 782.53,122.114 777.53,121.448 772.5,121C 515.5,120.5 258.5,120.333 1.5,120.5C 1.5,81.1667 1.5,41.8333 1.5,2.5C 11.1634,2.01772 20.8301,1.51772 30.5,1C 263.334,0.833213 496,0.333213 728.5,-0.5 Z"
          />
        </g>
        <g>
          <path
            style={{ opacity: 0 }}
            fill="none"
            stroke="#fefffe"
            strokeWidth="10"
            d="M -0.5,665.5 C -0.5,661.833 -0.5,658.167 -0.5,654.5C 5.42405,571.408 47.7574,516.241 126.5,489C 139.576,485.064 152.909,482.398 166.5,481C 229.484,479.553 292.484,479.053 355.5,479.5C 370.431,519.288 385.764,558.955 401.5,598.5C 328.169,599.333 254.836,599.833 181.5,600C 153.252,602.353 133.752,616.52 123,642.5C 116.546,670.479 125.046,692.646 148.5,709C 155.132,712.655 162.132,715.321 169.5,717C 185.132,718.216 200.799,718.883 216.5,719C 385.498,718.629 554.498,718.462 723.5,718.5C 723.5,758.833 723.5,799.167 723.5,839.5C 543.5,839.667 363.5,839.5 183.5,839C 126.194,837.919 78.3603,816.419 40,774.5C 14.3444,742.702 0.844435,706.368 -0.5,665.5 Z"
          />
        </g>
        <g>
          <path
            style={{ opacity: 0 }}
            fill="none"
            stroke="#fefffe"
            strokeWidth="10"
            d="M 962.5,765.5 C 962.5,771.5 962.5,777.5 962.5,783.5C 955.167,827.5 929.5,853.167 885.5,860.5C 880.833,860.5 876.167,860.5 871.5,860.5C 828.741,854.688 802.574,830.688 793,788.5C 789.178,741.703 809.011,709.87 852.5,693C 889.551,683.797 920.384,693.63 945,722.5C 954.474,735.436 960.307,749.77 962.5,765.5 Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
