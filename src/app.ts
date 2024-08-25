// import _ from "lodash";
import { Product } from "./product.model";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

const products = [
  { title: "A Carpet", price: 2.99 },
  { title: "A Book", price: 10.99 },
];

const loadedProduct = plainToInstance(Product, products);
const newProd = new Product("", -5);
validate(newProd).then(errors=>{
    if(errors.length>0){
        console.log("validation Errors!")
        console.log(errors)
    }else{
        console.log(newProd.getInfomation());
    }
});

for (const prod of loadedProduct) {
  console.log(prod.getInfomation());
}
// const p1 = new Product("apple", 2);
// const loadedProduct = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });
