import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Content } from 'react-mdl'
import Home from './Home.component'
import BasketView from './basket.component'
import ProductList from './Products/productList.component'

class MainComponent extends Component {
    constructor(props){
        super(props)
    }
    

    render(){
        return(
            <Content>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Basket' render={ () => <BasketView items={this.props.items} /> } />
                    <Route exact path='/Products' render={ () =>  <ProductList items={this.props.items} />} />
                </Switch>
            </Content>
        )
    }
}

export default MainComponent
