import getCountries from '@/lib/data/countries';
import ComboBox from '@/components/ComboBox';
import orderBy from 'lodash.orderby';

const ComboBoxContent = async ({ initialSelected }: { initialSelected?: {} }) => {
  const countries = await getCountries();

  const countryData = countries.map((country: any) => {
    return { name: country.name.common, flag: { image: country.flags.svg, alt: country.flags.alt }, id: country.cca3 };
  });

  return <ComboBox initialSelected={initialSelected} comboBoxArray={orderBy(countryData, ['name'], ['asc'])} />;
};

export default ComboBoxContent;
