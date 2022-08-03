import { assert } from "chai";
import { isHappy, isHappy2 } from "../../src/leetcode/其他/哈希表/202.快乐数";
import { isAnagram } from "../../src/leetcode/其他/哈希表/242.有效的字母异位词";
import { intersection } from "../../src/leetcode/其他/哈希表/345.两个数组的交集";
import { canConstruct } from "../../src/leetcode/其他/哈希表/383.赎金信";
import { findKthLargest } from "../../src/leetcode/其他/堆/215.数组中的第K个最大元素";
import { findMaximizedCapital } from "../../src/leetcode/其他/堆/502.IPO";
import { isPowerOfThree } from "../../src/leetcode/其他/数学/326.3 的幂";

describe("其他", function () {
  describe("哈希表", function () {
    describe("202.快乐数", function () {
      const exams = [
        { arg1: 19, ret: true },
        { arg1: 2, ret: false },
      ];
      it("哈希表", function () {
        exams.forEach((exam) => {
          const ret = isHappy(exam.arg1);
          assert.strictEqual(ret, exam.ret);
        });
      });
      it("快慢指针", function () {
        exams.forEach((exam) => {
          const ret = isHappy2(exam.arg1);
          assert.strictEqual(ret, exam.ret);
        });
      });
    });
    describe("383.赎金信", function () {
      const exams = [
        { arg1: "aa", arg2: "ab", ret: false },
        { arg1: "aa", arg2: "aab", ret: true },
      ];
      it("哈希表", function () {
        exams.forEach((exam) => {
          const ret = canConstruct(exam.arg1, exam.arg2);
          assert.strictEqual(ret, exam.ret);
        });
      });
    });
    describe("242.有效的字母异位词", function () {
      const exams = [
        { arg1: "anagram", arg2: "nagaram", ret: true },
        { arg1: "rat", arg2: "car", ret: false },
      ];
      it("哈希表", function () {
        exams.forEach((exam) => {
          const ret = isAnagram(exam.arg1, exam.arg2);
          assert.strictEqual(ret, exam.ret);
        });
      });
    });
    describe("345.两个数组的交集", function () {
      const exams = [
        { arg1: [1, 2, 2, 1], arg2: [2, 2], ret: [2] },
        { arg1: [4, 9, 5], arg2: [9, 4, 9, 8, 4], ret: [9, 4] },
      ];
      it("哈希表", function () {
        exams.forEach((exam) => {
          const ret = intersection(exam.arg1, exam.arg2);
          assert.deepStrictEqual(ret, exam.ret);
        });
      });
    });
  });
  describe("数学", function () {
    describe("326.3 的幂", function () {
      const exams = [
        { arg1: 27, ret: true },
        { arg1: 45, ret: false },
      ];
      it("循环", function () {
        exams.forEach((exam) => {
          const ret = isPowerOfThree(exam.arg1);
          assert.strictEqual(ret, exam.ret);
        });
      });
    });
  });
  describe("堆", function () {
    describe("215.数组中的第K个最大元素", function () {
      const exams = [
        { arg1: [3, 2, 1, 5, 6, 4], arg2: 2, ret: 5 },
        { arg1: [3, 2, 3, 1, 2, 4, 5, 5, 6], arg2: 4, ret: 4 },
      ];
      it("堆", function () {
        exams.forEach((exam) => {
          const ret = findKthLargest(exam.arg1, exam.arg2);
          assert.strictEqual(ret, exam.ret);
        });
      });
      it("快速排序", function () {
        exams.forEach((exam) => {
          const ret = findKthLargest(exam.arg1, exam.arg2);
          assert.strictEqual(ret, exam.ret);
        });
      });
    });
    describe("502.IPO", function () {
      const exams = [
        { arg1: 2, arg2: 0, arg3: [1, 2, 3], arg4: [0, 1, 1], ret: 4 },
        { arg1: 3, arg2: 0, arg3: [1, 2, 3], arg4: [0, 1, 2], ret: 6 },
      ];
      it("堆", function () {
        exams.forEach((exam) => {
          const ret = findMaximizedCapital(exam.arg1, exam.arg2, exam.arg3, exam.arg4);
          assert.strictEqual(ret, exam.ret);
        });
      });
    });
  });
});
