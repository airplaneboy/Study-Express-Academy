import { fetchGET } from '@/utils/fetchOption';

const getCountries = async () => await fetchGET({ path: 'https://restcountries.com/v3.1/all?fields=name,flags,cca3' });

export default getCountries;
