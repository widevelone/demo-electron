import React from 'react'
import { Link } from 'react-router-dom'

export const LogoTitle = ({ to, src = null, text }) => {
    return (
        <Link
            to={to}
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            {
                src &&
                <img className="w-40 h-40 mr-2 rounded-xl" src={src} alt="logo" />
            }
            {text}
        </Link>
    )
}
