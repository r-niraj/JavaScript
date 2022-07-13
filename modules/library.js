export default function(){
    console.log('This is default export message');
}

export let message = "This is module message";
export function user(name){
    // console.log("Hello " + name);
    return ("Hello " + name);
}

// export class test{
//     constructor (){
//         console.log('Constructor function');
//     }
// }

// export {message,user, test}