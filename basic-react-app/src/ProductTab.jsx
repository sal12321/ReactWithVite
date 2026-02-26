import Product from "./Product.jsx"
import Message from "./MessageBox.jsx"
import Price from "./Price.jsx"
import "./MessageBox.css"
import "./ProductTab.css"


function ProductTab(){

    // let options  = {a : "smart", b:"cheap", c:"efficient"};
    let options  = [
    <li>"smart"</li>, 
    <li>"cheap"</li>,
    <li>"efficient"</li>
                     
];

    // return (
    //     <div className="ProductTab">

    //         <Message 
    //         username = "salim"
    //         color = "green" 
    //                  />

    //      <Product 
    //      title = "Phone" 
    //      description= "A pocket-sized communication hub for calls, instant messaging, and quick access to essential apps on the go, uick access to essential apps on the go." 
    //      price = {12000}
    //     //  features = {{a : "kaam chalaw", b:"cheap", c:"efficient"}}
    //     features={options}

        
       

        
    //  />
    //       <Product
    //       title = "Tab"
    //       description = "A slim, touchscreen-focused device that offers a larger display than a phone, making it ideal for reading, sketching, and media consumption."
    //       price = {8700}
    //     //    features = {{a : "badhiya maal", b:"cheap", c:"efficient"}}
    //     features = {options}
    //       />
    //      <Product
    //       title = "Laptop"
    //       description = "A portable personal computer with a physical keyboard and full operating system designed for intensive tasks like work, study, and, with the help of java"
    //       price = {58000}
    //     //    features = {{a : "tikaaw", b:"cheap", c:"efficient"}}
    //     features={options}
    //        />
    //     <Product
    //      title = "Play Station"
    //      description = " A dedicated gaming console designed to deliver high-performance graphics, immersive stories, and online multiplayer experiences on a television or monitor"
    //     //  price = {134000}
    //     //  features = {{a : "ameero ki chochle", b:"cheap", c:"efficient"}}
    //     features = {options}

    //      /> 

          
    //     </ div>
    // );

    return (
        <>
        <div className="ProductTab">

            <Product
         title = "Play Station"
         description = " A dedicated gaming console designed to deliver high-performance graphics, immersive stories, and online multiplayer experiences on a television or monitor"

        // features = {options}
         /> 

         </div>

        </>

    );
}

export default ProductTab;