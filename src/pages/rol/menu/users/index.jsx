import React from 'react'
import { ListUserTable } from './ListUserTable'

export const Users = () => {
    return (
        <div className='grid xl:grid-cols-1 gap-2'>
            <ListUserTable />
        </div>
    )
}