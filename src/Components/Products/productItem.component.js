import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Card, CardTitle, CardActions, CardText} from 'react-md'
class ProductItem extends Component {
    constructor(props){
        super(props)
        this.handleProductClick = this.handleProductClick.bind(this)
       this.state = {
           redirect: false,
           clickedId: 0
       }
    }

    handleProductClick(target, data){
        if(target === 'cart'){
            this.props.click(data)
            
            return;
        }else if(target === 'show'){
            this.setState({ redirect: true, clickedId: data})
            return;
        }
    }
    
    render(){
        if(this.state.redirect){
            return <Redirect to={'/Product/'+this.state.clickedId} />
        }
        return (
            <Card onClick={ (e) => { this.handleProductClick('show',this.props.id) }} shadow={2} style={{background: '#eee', cursor: 'pointer'}}>
                <CardTitle title="" style={{color: '#000'}}>
                    <img src={this.props.image} alt={this.props.title} style={{width: '100%', height: 'auto'}} />
                </CardTitle>
                <CardText>
                    <h4 style={{margin: '0'}}>
                       {this.props.title}
                    </h4>
                    <p>DKK {this.props.price} ,-</p>
                </CardText>
                <CardActions>
                    <Button raised secondary iconChildren="add_shopping_cart" onClick={ (e) => { e.stopPropagation(); this.handleProductClick('cart', this.props) }}>Køb</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductItem
