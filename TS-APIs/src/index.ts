// Pick / Partial
interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {

}
updateUser({})




// function sumOfAge(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name:'Tony',age: 20},{name:'Pepper',age:20});
// console.log(age);