import React, { useState } from 'react';

function Tooltip({ text, children }) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="relative inline-block">
            {showTooltip && text && (
                <div className="absolute right-0 bottom-10 z-10 bg-yellow-500 text-black text-sm font-semibold px-1 py-0.5 rounded-md shadow-md tooltip w-max max-w-[200px]">
                    {text}
                    <div className="tooltip-arrow absolute -bottom-0.5 right-1.5 bg-yellow-500" />
                </div>
            )}
            <div
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="relative inline-block"
            >
                {children}
            </div>
        </div>
    );
}

export default Tooltip;
