import GameSavingLoader from './GameSavingLoader';
import GameSaving from './gameSaving';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  throw error;
});
