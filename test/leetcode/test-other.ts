import { assert } from "chai";
import { isHappy, isHappy2 } from "../../src/leetcode/其他/哈希表/202.快乐数";

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
  });
});
