import React from 'react'
import { LoaderTable } from './LoaderTable'

export const TableSection = ({ stateData, children }) => {
    return (
        <div className="grid grid-cols-1 overflow-auto relative">
            {children}
            <LoaderTable
                stateData={stateData}
            />
        </div>
    )
}