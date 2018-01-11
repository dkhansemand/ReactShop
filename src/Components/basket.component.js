import React, { Component } from 'react'
import { DataTable, TableHeader } from 'react-mdl'

class BasketView extends Component
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            hideActions: true,
            selectedItemsId: []
        }
        
    }

    render()
    {
        return (
            <div>
                <span style={{ display: (this.state.hideActions ? 'none' : 'block')}}>
                    <p>toolbar</p>
                </span>
                <DataTable
                    selectable
                    onSelectionChanged={ (id) => {
                        console.log('Change: ', id)
                        if(id.length === 0){
                            this.setState({ hideActions : true})
                        }else if((this.state.selectedItemsId.length > 0) && (this.state.selectedItemsId.length <= id.length)){
                            this.setState({ hideActions : false})
                        }else{
                            this.setState({ hideActions : false})
                        }
                        this.setState({ selectedItemsId : id})
                        
                    }}
                    shadow={2}
                    rowKeyColumn="id"
                    rows={window.Basket.products}>
                    <TableHeader name="title" tooltip="Product name">Produkt navn</TableHeader>
                    <TableHeader numeric name="qnty" tooltip="Antal">Antal</TableHeader>
                    <TableHeader numeric name="price" cellFormatter={(price,self) =>`DKK ${price.toFixed(2)*self.qnty}` } tooltip="Pris (efter antal)">Pris</TableHeader>
                </DataTable>
            </div>
        )
    }
}

export default BasketView