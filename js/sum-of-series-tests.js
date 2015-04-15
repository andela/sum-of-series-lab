(function() {
  'use strict';
  describe("SumOfSeries", function() {
    it("Sum of [1, 3, 5, 7] series to 10 should be 100", function() {
      var sos = new SumOfSeries([1, 3, 5, 7]);
      expect(sos.AP).toBeTruthy();
      expect(sos.GP).toBeFalsy();
      expect(sos.to(10)).toBe(100);
    });

    it("Sum of [2, 5, 8] series to 20 should be 610", function() {
      var sos = new SumOfSeries([2, 5, 8]);
      expect(sos.AP).toBeTruthy();
      expect(sos.GP).toBeFalsy();
      expect(sos.to(20)).toBe(610);
    });

    it("Sum of [7.5, 12, 16.5, 21] series to 50 should be 5887.5", function() {
      var sos = new SumOfSeries([7.5, 12, 16.5, 21]);
      expect(sos.AP).toBeTruthy();
      expect(sos.GP).toBeFalsy();
      expect(sos.to(50)).toBe(5887.5);
    });

    it("Sum of [24, 12, 6] series to 10 should be 47.953125", function() {
      var sos = new SumOfSeries([24, 12, 6]);
      expect(sos.GP).toBeTruthy();
      expect(sos.AP).toBeFalsy();
      expect(sos.to(10)).toBe(47.953125);
    });

    it("Sum of [3, -6, 12] series to 10 should be -1023", function() {
      var sos = new SumOfSeries([3, -6, 12]);
      expect(sos.GP).toBeTruthy();
      expect(sos.AP).toBeFalsy();
      expect(sos.to(10)).toBe(-1023);
    });
  });
})();
