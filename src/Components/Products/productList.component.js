import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import ProductItem from './productItem.component'
import DataSource from '../../Datasource'
import Basket from '../../basket'
class ProductList extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: [],
            cart: []
        }
    }

    componentDidMount() {
        DataSource.getProducts()
            .then( (data) => {
                this.setState({products : data})
                console.log('Datasource; ', this.state.products)
            })
    }
    
    addToCart(item){
        console.log('Item: ', item)
        let cart = this.state.cart
        if(cart.length > 0){
            let match = false
            cart.forEach( (product, idx) => {
                //console.log(`Item: ${product.id} #${idx}`)
                if(item.id === product.id){
                    cart[idx].qnty++
                    match = true
                }
            })
            if(!match){
                cart.push({
                    id: item.id,
                    title: item.title,
                    image: '//placehold.it/500x500',
                    price: item.price,
                    qnty: 1
                })
            }
        }else{
            cart.push({
                id: item.id,
                title: item.title,
                image: '//placehold.it/500x500',
                price: item.price,
                qnty: 1
            })
        }
        this.setState({ cart: cart }, () => {
            console.log('Products: ', this.state.cart)
        })
        this.props.items(cart.length)
        Basket.products = this.state.cart
    }   

    render(){
        return(
            
            <Grid>
                {this.state.products.map( (item) => {
                    return (
                        <Cell key={item.id} col={3} phone={12} tablet={6}>
                            <ProductItem id={item.productID} title={item.productName} price={item.price} image="//placehold.it/500x500" click={this.addToCart.bind(this)}/>
                        </Cell>
                    )
                })}
            </Grid>
            
        )
    }
}

export default ProductList
