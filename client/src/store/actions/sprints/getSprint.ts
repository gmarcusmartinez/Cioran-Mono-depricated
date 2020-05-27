import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import { IProject } from '../projects/createProject';

export interface ISprint {
  _id: string;
  title: string;
  totalStoryPoints: number;
  project: string;
  createdAt: Date;
  tickets: [];
  startDate: Date;
  endDate: Date;
  currentPage: number;
}

export interface GetSprintAction {
  type: ActionTypes.GET_SPRINT;
  payload: ISprint;
}

export const getSprint = (project: IProject, id: string) => (
  dispatch: Dispatch
) => {
  try {
    const sprint = project.sprints.find((s: ISprint) => s._id === id);
    dispatch<GetSprintAction>({
      type: ActionTypes.GET_SPRINT,
      payload: sprint,
    });
  } catch (err) {
    console.log(err.message);
  }
};
