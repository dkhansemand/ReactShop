import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Drawer, Toolbar } from 'react-md'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            basketItems : 0,
            visible: false
        }
        this.showDrawer = this.showDrawer.bind(this)
        this.hideDrawer = this.hideDrawer.bind(this)
        this.handleVisibility = this.handleVisibility.bind(this)

    }

    showDrawer = () => {
        this.setState({ visible: true })
    }

    hideDrawer = () => {
        this.setState({ visible: false })
    }

    handleVisibility = (visible) => {
        this.setState({ visible })
    }

    render(){
        const { visible } = this.state
        return (
           
        )
    }
}

export default WithRouter(Navbar);
