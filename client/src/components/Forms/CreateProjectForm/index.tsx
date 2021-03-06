import React, { FC } from 'react';
import { connect } from 'react-redux';
import { FormInput } from 'components/common/Form';
import { setDisplayModal } from 'store/actions';
import { createProjectStart } from 'store/actions/projects/createProject';
interface IProps {
  createProjectStart: Function;
  setDisplayModal: Function;
}

const CreateProjectForm: FC<IProps> = ({
  createProjectStart,
  setDisplayModal,
}) => {
  const defaultFormState = { title: '', slug: '' };
  const [formData, setFormData] = React.useState(defaultFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCloseModal = () => setDisplayModal(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisplayModal(false);
    createProjectStart(formData);
    setFormData(defaultFormState);
  };

  const { title, slug } = formData;
  return (
    <form className='create-project-form' onSubmit={handleSubmit}>
      <div className='create-project-form__header'>
        <h2>Create Project</h2>
        <span onClick={handleCloseModal}>&times;</span>
      </div>
      <FormInput
        label='Project Name'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <FormInput
        label='Project Slug'
        name='slug'
        value={slug}
        onChange={handleChange}
        info='Slug should be between 4-6 characters'
      />
      <button className='btn-dark'>Submit</button>
    </form>
  );
};

export default connect(null, { createProjectStart, setDisplayModal })(
  CreateProjectForm
);
