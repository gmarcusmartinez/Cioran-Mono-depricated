import React from 'react';
import { connect } from 'react-redux';
import Queue from 'components/common/Queue';
import { ITicket } from 'interfaces';
import MyQueueTicket from './MyQueueTicket/index.';

const headers = [
  { text: 'Project', sort: 'project' },
  { text: 'Ticket', sort: 'ticket' },
  { text: 'Due By', sort: 'date' },
];

interface IProps {
  tickets: ITicket[];
}

const MyQueue: React.FC<IProps> = ({ tickets }) => {
  let list = null;
  if (tickets)
    list = tickets.map((t) => <MyQueueTicket key={t._id} ticket={t} />);

  const classNames = ['my-que', 'my-que__th', 'my-que__ticket-table'];
  const props = { headers, list, classNames };

  return <Queue {...props} />;
};

interface IState {
  auth: {
    currentUser: {
      assignedTickets: ITicket[] | [];
    };
  };
}

const mapStateToProps = (state: IState) => ({
  tickets: state.auth.currentUser?.assignedTickets,
});

export default connect(mapStateToProps, {})(MyQueue);
