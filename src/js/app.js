import GameSavingData from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const result = await read();
    const val = await new GameSavingData(result);
    const arr = val.json();
    return (arr);
  }
}
