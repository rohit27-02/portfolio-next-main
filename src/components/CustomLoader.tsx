import React from 'react';
import { HashLoader } from 'react-spinners';

interface loader {
    loading:boolean;
}

const FillingIcon:React.FC<loader> = ({ loading }) => {

  return (
    <div className={`bg-dark inset-0 fixed w-full h-full z-40  ${loading ? '' : 'hidden'}`}>
     <HashLoader color="#36d7b7" className='mx-auto mt-[18rem]' />
    </div>
  );
};

export default FillingIcon;
