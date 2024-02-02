function calculateTax(income: number,taxYear=2022): number{
    if((taxYear || 2022)<2022)
    return income*1.2;
    return income * 1.3;


}
calculateTax(10_000,2022);

let employee: {
id: number,
name: string,
retire:(date: Date)=> void
} =  {
    id: 1,
    name: 'Krish',
    retire: (date:Date)=> {
        console.log(date);
    }

};


employee.name = 'Krish';








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
