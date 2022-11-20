import { RandomArrayInterface } from './RandomArrayInterface';
import { filteredArray } from '../helper/filteredArray';
import { ItemInterface } from '../../schema/ItemInterface';
import { isDeepStrictEqual } from 'util';

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
    const percentageItem = (1 / this.array.length) * 100;
    return percentageItem;
  }

  chooseArrayRandom() {
    this.array.map((name: any, index: any) => {
      this.newArray.push({
        name: name,
        percentage: this.percentageItem,
      });
    });

    const resultArray = this.validateRules(this.newArray);
    console.log(resultArray);
    return {
      itemRandom: this.chooseItemRandom(),
      inputArray: resultArray,
    };
  }

  validateRules(array: any) {
    const greaterThanOneHundred = this.validateGreaterThanOneHundred(this.newArray);
    if (greaterThanOneHundred) {
      return {
        message: 'the percentage is greater than 100%',
      };
    }

    return (this.array = this.validateLessThanOneHundred(this.newArray));
  }

  validateGreaterThanOneHundred(newArray: any) {
    let total_percentage = 0;
    newArray.map((item: any) => {
      total_percentage = total_percentage + item.percentage;
    });
    if (total_percentage > 100) {
      return true;
    }
  }
  validateLessThanOneHundred(newArray: any) {
    let total_percentage = 0;
    newArray.map((item: any) => {
      total_percentage = total_percentage + item.percentage;
    });

    if (total_percentage < 100) {
      const difference_percentage = 100 - total_percentage;
      const indeterminado = {
        name: 'indeterminado',
        percentage: difference_percentage,
      };
      this.newArray.push(indeterminado);
      return this.newArray;
    }

    return this.newArray;
  }
}
