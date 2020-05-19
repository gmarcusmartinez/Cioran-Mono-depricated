import React from 'react';
import { ITicket } from '../../../store/actions';
interface TicketDisplayProps {
  ticket: ITicket;
}

interface TicketDisplayItemProps {
  text: string;
  value: string | number;
}
const TicketDisplayItem: React.FC<TicketDisplayItemProps> = ({
  text,
  value,
}) => {
  return (
    <div className='ticket-display__item'>
      <span className='ticket-field-key'>{text}</span>
      <span className='ticket-field-value'>{value}</span>
    </div>
  );
};
const TicketDisplay: React.FC<TicketDisplayProps> = ({ ticket }) => {
  return (
    <div className='ticket-display'>
      <TicketDisplayItem text='Type' value={ticket.ticketType} />
      <TicketDisplayItem text='Priority' value={ticket.priority} />
      <TicketDisplayItem text='Status' value={ticket.status} />
      <TicketDisplayItem text='Story Points' value={ticket.storyPoints} />
      {!ticket.assignedTo ? (
        <TicketDisplayItem text='Assigned To' value={ticket.assignedTo} />
      ) : null}
      {!ticket.dateAssigned ? (
        <TicketDisplayItem text='Date Assigned' value={ticket.dateAssigned} />
      ) : null}
      {!ticket.dateCompleted ? (
        <TicketDisplayItem text='Date Completed' value={ticket.dateCompleted} />
      ) : null}
      <div className='ticket-display__description'>
        <span className='ticket-field-key'>Description</span>
        <span className='ticket-field-value'>{ticket.description}</span>
      </div>
      <button
        className='btn-primary'
        style={{ width: '90%', marginLeft: '5%', marginTop: '2rem' }}
      >
        Assign to Que
      </button>
    </div>
  );
};

export default TicketDisplay;
