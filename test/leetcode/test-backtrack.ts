import assert from "assert";
import { letterCombinations } from "../../src/leetcode/算法-回溯/17.电话号码的字母组合";
import { combinationSum } from "../../src/leetcode/算法-回溯/39.组合总和";
import { permute } from "../../src/leetcode/算法-回溯/46.全排列";
import { solveNQueens } from "../../src/leetcode/算法-回溯/51.N 皇后";
import { exist } from "../../src/leetcode/算法-回溯/79.单词搜索";

describe("回溯", function () {
  describe("46.全排列", function () {
    const cases = [
      {
        arg: [],
        ret: [[]],
      },
      {
        arg: [1, 2, 3],
        ret: [
          [1, 2, 3],
          [1, 3, 2],
          [2, 1, 3],
          [2, 3, 1],
          [3, 1, 2],
          [3, 2, 1],
        ],
      },
    ];
    it("回溯", function () {
      cases.forEach((item) => {
        const ret = permute(item.arg);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("79.单词搜索", function () {
    const cases = [
      {
        arg1: [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        arg2: "ABCCED",
        ret: true,
      },
      {
        arg1: [
          ["a", "b"],
          ["c", "d"],
        ],
        arg2: "abcd",
        ret: false,
      },
    ];
    it("回溯", function () {
      cases.forEach((item) => {
        const ret = exist(item.arg1, item.arg2);
        assert.strictEqual(ret, item.ret);
      });
    });
  });
  describe("17.电话号码的字母组合", function () {
    const cases = [
      {
        arg1: "23",
        ret: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
      },
    ];
    it("回溯", function () {
      cases.forEach((item) => {
        const ret = letterCombinations(item.arg1);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("39.组合总和", function () {
    const cases = [
      {
        arg1: [2, 3, 6, 7],
        arg2: 7,
        ret: [[2, 2, 3], [7]],
      },
      {
        arg1: [2, 3, 5],
        arg2: 8,
        ret: [
          [2, 2, 2, 2],
          [2, 3, 3],
          [3, 5],
        ],
      },
    ];
    it("回溯", function () {
      cases.forEach((item) => {
        const ret = combinationSum(item.arg1, item.arg2);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("51.N 皇后", function () {
    const cases = [
      {
        arg1: 1,
        ret: [["Q"]],
      },
      {
        arg1: 4,
        ret: [
          [".Q..", "...Q", "Q...", "..Q."],
          ["..Q.", "Q...", "...Q", ".Q.."],
        ],
      },
    ];
    it("回溯", function () {
      cases.forEach((item) => {
        const ret = solveNQueens(item.arg1);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
});
