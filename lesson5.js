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

function countProps(object) {
    let propCount = 0;
    // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
        propCount += 1;
      }
  }
    // Change code above this line
    return propCount;
  }
  
  countProps({});
  countProps({ name: "Mango", age: 2 });
  countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

  