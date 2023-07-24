import React, { useState } from 'react';
import Select from 'react-select';

const countryCodes = [
  { value: '+1', label: 'USA (+1)' },
  { value: '+44', label: 'UK (+44)' },
  { value: '+91', label: 'India (+91)' },
  // Add more country codes as needed
];

const PhoneForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if both fields are filled
    if (!selectedCountry || !phoneNumber) {
      setValidationMessage('Please fill in all fields.');
      return;
    }

    // Validate the phone number
    const isValidPhoneNumber = validatePhoneNumber(selectedCountry.value, phoneNumber);

    if (isValidPhoneNumber) {
      // Format the phone number with the country code and log it in the console
      const formattedPhoneNumber = selectedCountry.value + phoneNumber;
      console.log('Formatted Phone Number:', formattedPhoneNumber);
      setValidationMessage('Phone number is valid.');
    } else {
      setValidationMessage('Invalid phone number. Please check your input.');
    }
  };

  const validatePhoneNumber = (countryCode, phoneNumber) => {
    // Use a regular expression to validate the phone number
    const phoneRegex = /^\+?\d{1,4}[-.\s]?\d{3,14}$/;
    const fullPhoneNumber = countryCode + phoneNumber;

    return phoneRegex.test(fullPhoneNumber);
  };

  return (
    <div className='my-44'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="countryCode">Country Code:</label>
          <Select
            id="countryCode"
            options={countryCodes}
            value={selectedCountry}
            onChange={(selectedOption) => setSelectedCountry(selectedOption)}
            isSearchable={false}
            placeholder="Select country code"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.trim())}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <p id="validationMessage">{validationMessage}</p>
    </div>
  );
};

export default PhoneForm;
