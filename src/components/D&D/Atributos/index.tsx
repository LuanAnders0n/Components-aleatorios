import { useState } from 'react';
import { Container } from './styled';

interface Props {
  label: string;
}

const Atributos: React.FC<Props> = ({ label }) => {
  const [inputValue, setInputValue] = useState<any>();

  function calculateValue(value: number): number | '' {
    if (value === 0) return -5;
    if (value === 1) return -5;
    if (value === 2) return -4;
    if (value === 3) return -4;
    if (value === 4) return -3;
    if (value === 5) return -3;
    if (value === 6) return -2;
    if (value === 7) return -2;
    if (value === 8) return -1;
    if (value === 9) return -1;
    if (value === 10) return 0;
    if (value === 11) return 0;
    if (value === 12) return 1;
    if (value === 13) return 1;
    if (value === 14) return 2;
    if (value === 15) return 2;
    if (value === 16) return 3;
    if (value === 17) return 3;
    if (value === 18) return 4;
    if (value === 19) return 4;
    if (value === 20) return 5;
    return '';
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    setInputValue(value);
  }

  const displayValue = calculateValue(inputValue);

  return (
    <Container>
      <div className="atributos">
        <label>{label}</label>
        <input
          className="input"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          min="0"
          max="20"
        />
        <span className="mod">{displayValue}</span>
      </div>
    </Container>
  );
};

export default Atributos;
