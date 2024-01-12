import React from 'react';

const countryState: { country: any; setCountry: any } = {
  country: null,
  setCountry: null,
};
const PersonalInformationContext = React.createContext(countryState);

export default PersonalInformationContext;
