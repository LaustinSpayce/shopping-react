import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import CartItems from './cart'

export default class Search extends Component {
    constructor() {
        super()

        this.state = {
            products: []
        }
    }

    onItemClick(number) {
        this.props.setActiveItem(number)
    }

    getProducts() {
        const url = '/products.json';
        axios.get(url)
          .then((response) => {
            const data = response.data
            this.setState({ products: data })
          }).catch((error)=>{
            console.log(error);
          })
      }


    render() {
        console.log('items in search')
        console.log(this.state.products)
        return (       
            <div>
                <SearchBox getProducts={() => {this.getProducts()}} />
                <ProductList products={this.state.products}
                    onItemClick={(number) => {this.onItemClick(number)}}
                />
            </div>
        )
    }
}


class SearchBox extends Component {

    getProducts () {
        this.props.getProducts();
    }

    render() {
        return (
        <Button color="primary" 
            variant="contained"
            onClick={()=>{ this.getProducts() }}>
                Click me to search
        </Button>
        )
    }
}


class ProductList extends Component {

    onItemClick(event) {
        let number = event.target.id
        this.props.onItemClick(number)
    }

    render() {

        let productList = []
        if (this.props.products.length > 0) {
            productList = this.props.products.map((item, index) => {
                return (
                    <li id={item.id} 
                        key={index} 
                        onClick={(event)=>{this.onItemClick(event)}}>
                            {item.name} - ${item.price}
                    </li>
                )
            }
            )
    }

        return (
            <ul>
                {productList}
            </ul>
        )
    }
}