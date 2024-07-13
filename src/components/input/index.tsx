import './index.css';
import { IInputProps } from './props';

const Index: React.FC<IInputProps> = ({
  value, onChange
}) => {
  return (<div>
    <input value={value} onChange={onChange} />
  </div>);
}

export default Index;