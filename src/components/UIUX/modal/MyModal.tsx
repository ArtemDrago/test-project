import React from 'react';
import './MyModal.scss';

interface MyModalProps {
   children: any,
   visible: boolean,
   setVisible: Function,
}

const MyModal: React.FC<MyModalProps> = ({ children, visible, setVisible }) => {

   const func = (e: any) => {
      e.stopPropagation()
      e.preventDefault()
   }
   if (!visible) {
      return (
         <></>
      )
   }

   return (
      <div
         className='open'
         onClick={() => setVisible(false)}
      >
         <div
            className='myModalContent'
            onClick={(e) => func(e)}
         >
            {children}
         </div>
      </div>
   );
};

export default MyModal;