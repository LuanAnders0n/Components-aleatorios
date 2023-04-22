import React, { useState } from 'react';

const Race = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showAdditionalSelect, setShowAdditionalSelect] = useState(false);

  const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    if (event.target.value === '2') {
      setShowAdditionalSelect(true);
    } else {
      setShowAdditionalSelect(false);
    }
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionSelect}>
        <option value="1">Humano</option>
        <option value="2">Elfo</option>
        <option value="3">Anão</option>
        <option value="4">Halfling</option>
        <option value="5">Meio-orc</option>
        <option value="6">Tiefling</option>
        <option value="7">Gnomo</option>
        <option value="8">Draconato</option>
        <option value="9">Meio-elfo</option>
      </select>

      {showAdditionalSelect && (
        <select>
          <option value="1">Alto Elfo</option>
          <option value="2">Elfo da floresta</option>
          <option value="3">Elfo Negro</option>
        </select>
      )}
    </div>
  );
};

export default Race;
