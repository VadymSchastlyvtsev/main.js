// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// console.log(`Можно открыть чат?`, canOpenChat)

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
  
//     switch (password) {
//       case null:
//         message = 'Canceled by user!';
//         break;
  
//       case ADMIN_PASSWORD :
//         message = 'Welcome!';
//         break;
  
//       default:
//         message = 'Access denied, wrong password';
 
//     }
  
//     // Change code above this line
//     return message;
//   }
  
//   checkPassword("mangohackzor");
//   checkPassword(null);
//   checkPassword("polyhax");
//   checkPassword("jqueryismyjam");


// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[20];
// console.log(lastElement)

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const ownPropName = [];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//   for (const product of products) {
//     // console.log(product);
//     if (product.hasOwnProperty(propName)){
//         ownPropName.push(product[propName])
// console.log(ownPropName);
//     }
//   }
//   return ownPropName;
  
//     // Change code above this line
//   }
  
//   getAllPropValues("name");
//   getAllPropValues("quantity");
//   getAllPropValues("price");
//   getAllPropValues("category");

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   let totalPrice = 0;
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice =+ product.price * product.quantity;
//       console.log(totalPrice);
//     }
    
//   }
  
  
//     // Change code above this line
//   }
//   calculateTotalPrice("Blaster");
//   calculateTotalPrice("Radar");
//   calculateTotalPrice("Droid");
//   calculateTotalPrice("Grip");
//   calculateTotalPrice("Scanner");

function addOverNum(...args) {
    let total = 0;
  const number = args[0];
  console.log(number);
    for (const arg of args) {
      if (number < arg) {
        total += arg;
      }
      
    }
  
    return total;
    // Change code above this line
  }
  addOverNum(50, 15, 27);
  addOverNum(10, 12, 4, 11, 48, 10, 8);
  addOverNum(15, 32, 6, 13, 19, 8);
  addOverNum(20, 74, 11, 62, 46, 12, 36) ;