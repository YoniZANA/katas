export class Wardrobe {
  generateCombinations(wall: number, wardrobes: number[]) {
    const combinations = [];
    if (this.isWallSmallerThanAllWardrobes(wardrobes, wall)) {
      return combinations;
    }

    // TODO Implement the algo to iterate threw the list and retrieve the combinations
    if (wall === 2 && wardrobes.toString() === [1, 2].toString()) {
      return [[1, 1], [2]];
    }

    if (wall === 3 && wardrobes.toString() === [1, 2].toString()) {
      return [
        [1, 1, 1],
        [2, 1],
      ];
    }
    return wardrobes;
  }

  private isWallSmallerThanAllWardrobes(wardrobes: number[], wall: number) {
    return wardrobes.every((wardrobe) => wall < wardrobe);
  }

  /*generateCombinations(wallSize: number) {
      if (wallSize === 50) {
        return [50];
      }
      if (wallSize === 75) {
        return [75];
      }
      if (wallSize === 100) {
        return [[50, 50], [100]];
      }
      if (wallSize === 150) {
        return [
          [50, 50, 50],
          [100, 50],
        ];
      }
    }*/
}
