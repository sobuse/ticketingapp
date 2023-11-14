import React from 'react'
import DeleteBlock from './DeleteBlock'
import ProgessDisplay from './ProgressDisplay'
import ProrityDisplay from './ProrityDisplay'
import StatusDisplay from './StatusDisplay'

const TicketCard = ({ticket}) => {

  const formatTimeStamp = (timestamp) =>{
    const option = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    };
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", option);

    return formattedDate;
  }
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
        <div className='flex mb-3'>
        <ProrityDisplay priority={ticket.priority}/>

        <div className='ml-auto'>
        <DeleteBlock id={ticket._id}/>
        </div>

        </div>
        <h4>{ticket.title}</h4>
        <hr className='h-px border-0 bg-page mb-2'/>
        <p className='whitwspace-pre-wrap'>{ticket.description}</p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
        <div className='flex flex-col'>
        <p className='text-xs my-1'>{formatTimeStamp(ticket.createdAt)}
        </p>
        <ProgessDisplay progress={ticket.progress}/>
        </div>
        <div className='ml-auto flex item-end'>
        <StatusDisplay status={ticket.status}/> 
        </div>
        </div>
    </div>
  )
}

export default TicketCard