function calculateTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
/*const small = 1;
const medium = 2;    alternate
const large = 3; */
// const enum Size { Small = 's', Medium = 'm', Large = 'l' };
// let mySize: Size = Size.Medium;
// console.log(mySize);
// let user: [number,string] = [1,'Krish'];
// user.push(1);
// let numbers: number[] = [1,2,'3'];
// numbers.forEach(n => n.)
// let sales: number = 123_456_789;
// let coursse: string = 'TypeScript';
// let is_published: boolean = true;
// let level;
