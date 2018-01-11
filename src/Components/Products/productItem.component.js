import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Card, CardTitle, CardActions, CardText} from 'react-md'
class ProductItem extends Component {
    constructor(props){
        super(props)
        this.handleProductShow = this.handleProductShow.bind(this)
       this.state = {
           redirect: false,
           clickedId: 0
       }
    }

    handleProductShow(prodID){
        console.log('Product clicked: ', prodID)
        this.setState({ redirect: true, clickedId: prodID})
    }
    
    render(){
        if(this.state.redirect){
            return <Redirect to={'/Product/'+this.state.clickedId} />
        }
        return (
            <Card onClick={ () => { this.handleProductShow(this.props.id) }} shadow={2} style={{background: '#eee', cursor: 'pointer'}}>
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
                    <Button raised secondary iconChildren="add_shopping_cart" onClick={ () => { this.props.click(this.props) }}>Køb</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductItem
