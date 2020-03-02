import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default class Product extends Component {
    constructor() {
        super()
    }

    addProductToCart() {
        this.props.addProductToCart(this.props.activeProduct)
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        if (this.isEmpty(this.props.activeProduct)) {
            return (
                <div>
                    <h3>Please select a product</h3>
                </div>
            )
        } else {
            console.log(this.props.activeProduct)
            return (
                <div>
                    <ProductName name={this.props.activeProduct.name} />
                    <br />
                    <ProductImage image_url={this.props.activeProduct.image_url} />
                    <br />
                    <ProductDescription description={this.props.activeProduct.description} />
                    <br />
                    <ProductPrice price={this.props.activeProduct.price} />
                    <br />
                    <AddToCartButton addProductToCart={()=>{this.addProductToCart()}} />
                </div>
            )
        }
    }
}


class ProductName extends Component {
render() {
    return (
        <h1>{this.props.name}</h1>
    )
}}


class ProductImage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image_url}></img>
            </div>
        )
    }
}


class ProductDescription extends Component {
    render() {
        return(
            <div>
                <p>
                    {this.props.description}
                </p>
            </div>
        )
    }
}


class ProductPrice extends Component {
    render() {
        return(
            <div>
                <h3>
                    ${this.props.price}
                </h3>
            </div>
        )
    }
}


class AddToCartButton extends Component {
    render() {
        return (
            <Button variant="contained"
            color="secondary"
            onClick={()=>{this.props.addProductToCart()}}>
                <AddShoppingCartIcon/>Add to Cart!</Button>
        )
    }
}