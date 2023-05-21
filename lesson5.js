// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
//   for (const key in apartment) {

//     keys.push(key);
//     values.push(apartment[key]);
//     console.log(keys);
//     console.log(values);
//   };
  
// //   for (values in keys){
// //     console.log();
// //   };

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//  if (apartment.hasOwnProperty(key))
//  keys.push(key);
//   values.push(apartment[key]);
//   // Change code above this line
//   console.log(key);
//   console.log(values);
// };

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   console.log(apartment[key]);
//   values.push(apartment[key])
//   console.log(values);
// }

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const name = Object.keys(salaries);
//   const salary = Object.values(salaries);
//   console.log(salary);
//   for (const sum of salary) {
//     console.log(sum);
//     totalSalary += sum;
//     console.log(totalSalary);
//   }
  
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   console.log(color.hex);
//   hexColors.push(color.hex);
//   console.log(hexColors);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];



// function getProductPrice(productName) {
//   // Change code below this line
// for (const product of products) {
//   // console.log(product);
//   const prodName = product.name;
//   console.log(prodName);
//   if (productName === prodName) {
    
    
//     return product.price;
//   }
  
//   return null;
// }


//   // Change code above this line
// }

// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");
  