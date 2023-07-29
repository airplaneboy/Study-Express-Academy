import getCountries from '@/lib/data/countries';
import ComboBox from '@/components/ComboBox';

const ComboBoxContent = async () => {
  const countries = await getCountries();

  const countryData = countries.map((country: any) => {
    return { name: country.name.common, flag: { image: country.flags.svg, alt: country.flags.alt }, id: country.cca3 };
  });

  return <ComboBox comboBoxArray={countryData} />;
};

export default ComboBoxContent;
