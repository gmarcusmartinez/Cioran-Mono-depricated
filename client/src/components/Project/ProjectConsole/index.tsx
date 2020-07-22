import React from 'react';
import { connect } from 'react-redux';
import CustomBtn from 'components/common/CustomBtn';
import ProjectItem from 'components/Project/ProjectItem';
import { IProject } from 'interfaces';
import { getProjects, setDisplayModal } from 'store/actions';
import { selectProjects } from 'store/selectors/projects';
import { IState } from 'interfaces/state';

interface IProps {
  projects: IProject[] | null;
  getProjects: Function;
  setDisplayModal: Function;
}

const ProjectConsole: React.FC<IProps> = ({
  projects,
  getProjects,
  setDisplayModal,
}) => {
  React.useEffect(() => {
    getProjects();
  }, [getProjects]);

  let list = projects
    ? projects.map((p: IProject) => <ProjectItem key={p._id} item={p} />)
    : null;

  return (
    <div className='project-console'>
      <div className='project-console__title'>My Projects</div>
      <div className='polygon-border'></div>
      <div className='project-list'>
        <CustomBtn
          text='Create Project'
          cb={() => setDisplayModal(true, 'CREATE_PROJECT')}
          className='create-project-btn project-item'
        />
        {list}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  projects: selectProjects(state),
});

export default connect(mapStateToProps, { getProjects, setDisplayModal })(
  ProjectConsole
);
