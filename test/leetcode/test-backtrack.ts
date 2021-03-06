import assert from "assert";
import { partition } from "../../src/leetcode/算法-回溯/131.分割回文串";
import { letterCombinations } from "../../src/leetcode/算法-回溯/17.电话号码的字母组合";
import { solveSudoku } from "../../src/leetcode/算法-回溯/37.解数独";
import { combinationSum } from "../../src/leetcode/算法-回溯/39.组合总和";
import { permute } from "../../src/leetcode/算法-回溯/46.全排列";
import { permuteUnique } from "../../src/leetcode/算法-回溯/47.全排列 II";
import { solveNQueens } from "../../src/leetcode/算法-回溯/51.N 皇后";
import { combine } from "../../src/leetcode/算法-回溯/77.组合";
import { subsets } from "../../src/leetcode/算法-回溯/78.子集";
import { exist } from "../../src/leetcode/算法-回溯/79.单词搜索";
import { restoreIpAddresses } from "../../src/leetcode/算法-回溯/93.复原 IP 地址";

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
  describe("37.解数独", function () {
    const cases = [
      {
        arg1: [
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ],
        ret: [
          ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
          ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
          ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
          ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
          ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
          ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
          ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
          ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
          ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
        ],
      },
    ];
    it("回溯", function () {
      cases.forEach((item) => {
        solveSudoku(item.arg1);
        assert.deepStrictEqual(item.arg1, item.ret);
      });
    });
  });
  describe("77.组合", function () {
    const cases = [
      {
        arg1: 4,
        arg2: 2,
        ret: [
          [1, 2],
          [1, 3],
          [1, 4],
          [2, 3],
          [2, 4],
          [3, 4],
        ],
      },
    ];
    it("回溯", function () {
      cases.forEach((item) => {
        const ret = combine(item.arg1, item.arg2);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("78.子集", function () {
    const cases = [
      {
        arg1: [1, 2, 3],
        ret: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]],
      },
    ];
    it("回溯", function () {
      cases.forEach((item) => {
        const ret = subsets(item.arg1);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("131.分割回文串", function () {
    const cases = [
      {
        arg1: "aab",
        ret: [
          ["a", "a", "b"],
          ["aa", "b"],
        ],
      },
      {
        arg1: "a",
        ret: [["a"]],
      },
    ];
    it("回溯", function () {
      cases.forEach((item) => {
        const ret = partition(item.arg1);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("93.复原 IP 地址", function () {
    const cases = [
      {
        arg1: "25525511135",
        ret: ["255.255.11.135", "255.255.111.35"],
      },
      {
        arg1: "0000",
        ret: ["0.0.0.0"],
      },
    ];
    it("回溯", function () {
      cases.forEach((item) => {
        const ret = restoreIpAddresses(item.arg1);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
  describe("47.全排列 II", function () {
    const cases = [
      {
        arg1: [1, 1, 2],
        ret: [
          [1, 1, 2],
          [1, 2, 1],
          [2, 1, 1],
        ],
      },
      {
        arg1: [1, 2, 3],
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
        const ret = permuteUnique(item.arg1);
        assert.deepStrictEqual(ret, item.ret);
      });
    });
  });
});
