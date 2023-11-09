import React from 'react'
import DeleteBlock from './DeleteBlock'
import ProgessDisplay from './ProgessDisplay'
import ProrityDisplay from './ProrityDisplay'
import StatusDisplay from './StatusDisplay'

const TicketCard = () => {
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
        <div className='flex mb-3'>
        <ProrityDisplay/>

        <div className='ml-auto'>
        <DeleteBlock/>
        </div>

        </div>
        <h4>Ticket Title</h4>
        <hr className='h-px border-0 bg-page mb-2'/>
        <p className='whitwspace-pre-wrap'>This is the ticket description! Please do this ticket</p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
        <div className='flex flex-col'>
        <p className='text-xs my-1'>11/9/23 1:01PM</p>
        <ProgessDisplay/>
        </div>
        <div className='ml-auto flex item-end'>
        <StatusDisplay/> 
        </div>
        </div>
    </div>
  )
}

export default TicketCard