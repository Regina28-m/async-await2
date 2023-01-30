
import GameSavingLoader from '../GameSavingLoader';

test('Должна создавать объект типа GameSaving', () => {
  GameSavingLoader.load().then((saving) => expect(JSON.parse(saving)).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  }));
});
