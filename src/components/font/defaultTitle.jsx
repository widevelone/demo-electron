import React from 'react'

export const DefaultTitle = ({text=""}) => {
    return (
        <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            {text}
        </h1>
    )
}
