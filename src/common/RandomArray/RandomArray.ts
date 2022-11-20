import { RandomArrayInterface } from './RandomArrayInterface';
import { filteredArray } from '../helper/filteredArray';
import { ItemInterface } from '../../schema/ItemInterface';

export class RandomArray implements RandomArrayInterface {
  public array: any;
  public randomItem: string = '';
  public percentageItem: number = 0;
  public newArray: Array<ItemInterface> = [];

  constructor(array: Array<any>) {
    this.array = filteredArray(array);
    this.randomItem = this.chooseItemRandom();
    this.percentageItem = this.calculatePercentage();
  }

  chooseItemRandom() {
    const itemRandom = this.array[Math.floor(Math.random() * this.array.length)];
    return itemRandom;
  }

  calculatePercentage() {
    const percentageItem = 1 / this.array.length;
    return percentageItem;
  }

  chooseArrayRandom() {
    this.array.map((name: any, index: any) => {
      this.newArray.push({
        index: index,
        name: name,
        percentage: this.percentageItem,
      });
    });
    return {
      itemRandom: this.chooseItemRandom(),
      inputArray: this.newArray,
    };
  }
}
