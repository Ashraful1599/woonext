import React from 'react';

function GalleryPreview(props) {
    return (
        <div className="absolute top-1 pe-5 z-10">
            <button type="button">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M432 320v112H320m101.8-10.23L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320m10.23 101.8L208 304"
                    />
                </svg>
            </button>
        </div>
    );
}

export default GalleryPreview;