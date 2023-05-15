import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import './CountryStateForm.css';

const CountryStateForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);

    // Reset the state selection if the selected country is changed
    if (selectedState) {
      setSelectedState(null);
    }
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCountry || !selectedState) {
      setErrorMessage('Please select both country and state');
    } else {
      // Redirect to the new page or perform any other action
      console.log('Redirecting to the new page:', selectedCountry, selectedState);
      // Reset the form fields and error message
      setSelectedCountry(null);
      setSelectedState(null);
      setErrorMessage('');
    }
  };

  const countries = [
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    { label: 'Australia', value: 'australia' },
  ];

  const statesByCountry = {
    usa: [
      { label: 'California', value: 'ca' },
      { label: 'New York', value: 'ny' },
      { label: 'Texas', value: 'tx' },
    ],
    canada: [
      { label: 'Ontario', value: 'on' },
      { label: 'Quebec', value: 'qc' },
      { label: 'British Columbia', value: 'bc' },
    ],
    australia: [
      { label: 'New South Wales', value: 'nsw' },
      { label: 'Victoria', value: 'vic' },
      { label: 'Queensland', value: 'qld' },
    ],
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <CustomSelect
        options={countries}
        onChange={handleCountryChange}
        placeholder="Select a country"
        value={selectedCountry}
      />
      {selectedCountry && (
        <CustomSelect
          options={statesByCountry[selectedCountry.value]}
          onChange={handleStateChange}
          placeholder="Select a state"
          value={selectedState}
        />
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default CountryStateForm;
