import React, { Component } from 'react'
import { Button, FontIcon } from 'react-md'

class Home extends Component
{
    render(){
        return (
            <section>
                <h2>Velkommen til reactShop!</h2>
                <article>
                    <p>lorem somthing, somthing</p>
                </article>
                <Button raised>TEST</Button>
                <FontIcon primary>home</FontIcon>

            </section>
        )
    }
}

export default Home
