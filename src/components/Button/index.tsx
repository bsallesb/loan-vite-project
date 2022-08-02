import { memo } from 'react';

import { ButtonStyles } from './styles';

interface IButtonProps {
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ onClick }) => {
  return (
    <div className="text-center mb-3">
      <ButtonStyles
        type="button"
        className="btn mt-5 fs-3 text-white px-5 py-3"
        onClick={onClick}
      >
        <h3 className="m-0">Continuar</h3>
      </ButtonStyles>
    </div>
  );
};

export default memo(Button);
