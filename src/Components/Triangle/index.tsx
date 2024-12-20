import React from "react";

interface TriangleProps extends React.SVGProps<SVGSVGElement> {
    width?: string;
    height?: string;
}

const Triangle: React.FC<TriangleProps> = ({
    width = "1000px", height = "1000px", ...props }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        id="triangle"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,0,0)"
        {...props}
    >
        <path
            id="path21090-9"
            d="M7.5385,2 C7.2437,2,7.0502,2.1772,6.9231,2.3846l-5.8462,9.5385C1,12,1,12.1538,1,12.3077C1,12.8462,1.3846,13,1.6923,13h11.6154 C13.6923,13,14,12.8462,14,12.3077c0-0.1538,0-0.2308-0.0769-0.3846L8.1538,2.3846C8.028,2.1765,7.7882,2,7.5385,2z"
            fill="#BE2026"
        />
    </svg>
);

export default Triangle;
