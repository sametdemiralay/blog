'use client';

import FormPost from '@/components/FormPost';
import { SubmitHandler } from 'react-hook-form';
import { FormInputPost } from '@/types';

const EditPostPage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className='text-2xl my-4 font-bold text-center'>Edit post</h1>
      <FormPost submit={handleEditPost} isEditing />
    </div>
  );
};

export default EditPostPage;
