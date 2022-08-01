import { assert } from "chai";
import { isHappy, isHappy2 } from "../../src/leetcode/其他/哈希表/202.快乐数";
import { isAnagram } from "../../src/leetcode/其他/哈希表/242.有效的字母异位词";
import { intersection } from "../../src/leetcode/其他/哈希表/345.两个数组的交集";
import { canConstruct } from "../../src/leetcode/其他/哈希表/383.赎金信";

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
});
