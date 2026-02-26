// import "./Product.css";
// import Price from "./Price.jsx"

// function Product({ title, description, price = 1, features=null }) {
//     // console.log(props);

//     // const list = features.map((feature) => {
//     //     return <li>{feature}</li>
//     // })
//     let isDisc =  price > 10000 ? "Discount of 5%" : "" ;
    
    
//     let styles = {backgroundColor : price < 13000 ? "Pink" : "lightGreen", border: "1px solid black"}
//     return (
//         <div>
//             <h3 className="Product">{title}</h3>
//             {/* <h3 className="Price">Price : {price}</h3> */}

//             <h3 className="Desciption">{description}</h3>
//             {/* <h3 className="features">{features}</h3> */}

//             {price > 10000 ? <h3 className="discount" style = {styles}> <p>{isDisc}</p></h3> : ""}
//             {/* <p>{list}</p> */}
//             {/* <p>
//                 {

//                     features.map((feature) => {

//                         return <li>{feature}</li>
//                     })
//                 }
//             </p> */}

//             <Price  price = {1200}  />
//         </div>
//     )
// }

// export default Product;