import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Badge, Header, HeaderRow, Icon, Navigation, Textfield } from 'react-mdl'
class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            basketItems : 0
        }
    }

    render(){
        return (
          <Header waterfall hideTop>
          <HeaderRow title="ReactShop">
              <Navigation>
                
                  <Link to="/" className="mdl-navigation__link">Home</Link>
                  <Link to="/Products" className="mdl-navigation__link">Produkter</Link>
                  <Link to="/Basket" className="mdl-navigation__link">
                    <Badge text={this.props.basket} overlap><Icon name="shopping_cart" /></Badge>
                  </Link>
                
              </Navigation>
              
              <Textfield
                  value=""
                  onChange={() => {}}
                  label="Search3"
                  expandable
                  expandableIcon="search"
              />
          </HeaderRow>
      </Header>           
        );
    }
}

export default Navbar;
