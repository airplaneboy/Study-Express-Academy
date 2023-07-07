import { faker } from '@faker-js/faker';
import camelCase from 'camelcase';

const int = { min: 1000, max: 9999 };
const word = faker.word;
const number = faker.number;

const adjectiveAndNoun = () => `${camelCase(`${word.adjective()}_${word.noun()}`)}_${number.int(int)}`;
const adverbAndVerb = () => `${camelCase(`${word.adverb()}_${word.verb()}`)}_${number.int(int)}`;
const verbAndNoun = () => `${camelCase(`${word.verb()}_${word.noun()}`)}_${number.int(int)}`;

function generateUsernames() {
  const options = [adjectiveAndNoun, adverbAndVerb, verbAndNoun];
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomOption = options[randomIndex];

  return randomOption();
}
export default generateUsernames;
