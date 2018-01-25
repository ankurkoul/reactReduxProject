import React from 'react';
import { ShopProductComponent } from './shoppingProduct.component';


const middle = {
    margin: 'auto'
}
const divStyle = {
    margin: '40px',
    border: '5px solid brown'
};
export class ShoppingCart extends React.Component {
    constructor() {
        super();
        var dataOfPrice = 1000;
        this.dataList = [
            { name: "product1", price: dataOfPrice, qty: 11, img: "saasas.jpg" },
            { name: "product2", price: dataOfPrice, qty: 12, img: "bbbb.jpg" },
            { name: "product3", price: dataOfPrice, qty: 13, img: "ccc.jpg" }
        ];
    }
    render() {

        //business 

        var listOfProducts = this.dataList.map((elm, i) => <ShopProductComponent details={elm} key={i} />);

        console.log(listOfProducts);
        //return JSX
        return (<div>
            <h1 style={middle} > SHOPPING CART</h1>
            <table style={divStyle}>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Img</th>
                </thead>

                {listOfProducts}
            </table >
        </div>
        )
    }
}