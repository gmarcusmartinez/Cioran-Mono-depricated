import React from 'react';
import { formatDate } from 'utils';
import { ISprint } from 'interfaces';

interface IProps {
  sprint: ISprint;
}
const SprintDetails: React.FC<IProps> = ({ sprint }) => {
  return sprint?.startDate ? (
    <>
      <h3 className='sprint-console__title'>{sprint.title}</h3>
      <div className='sprint-console__dates'>
        {formatDate(sprint.startDate)} - {formatDate(sprint.endDate)}
      </div>
    </>
  ) : null;
};

export default SprintDetails;
