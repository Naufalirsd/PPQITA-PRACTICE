const { sum, reduce, cross, devide } = require("./mymath");

describe.skip("testing mymath", () => {
    test("test sum should sucess", () => {
        let result = sum(10, 30);

        expect(result).toEqual(40);
    });

    // Latihan
    test("test reduce should sucess", () => {
        let result2 = reduce(30, 10);

        expect(result2).toEqual(20);
    });

    test("test cross should sucess", () => {
        let result3 = cross(30, 10);

        expect(result3).toEqual(300);
    });

    test("test devide should sucess", () => {
        let result4 = devide(30, 10);

        expect(result4).toEqual(3);
    });
});
