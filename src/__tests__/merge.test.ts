import { merge } from "../merge";

describe("merge", () => {
  test("merges and sorts three collections correctly", () => {
    const collection_1 = [9, 7, 5, 3, 1];
    const collection_2 = [2, 4, 6, 8, 10];
    const collection_3 = [0, 11, 12, 13, 14];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  });

  test("merges and sorts three collections correctly", () => {
    const collection_1 = [6, 5, 4];
    const collection_2 = [1, 2, 3, 7, 9];
    const collection_3 = [0, 8, 10, 11];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  test("handles empty collections", () => {
    const collection_1 = [3, 2, 1];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3]);
  });

  test("handles empty collections", () => {
    const collection_1: number[] = [];
    const collection_2 = [1, 2, 3];
    const collection_3 = [4, 5, 6];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("handles all collections being empty", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });
});
