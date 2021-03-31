import React, { Component } from 'react';

import SHOP_DATA from './Shop.data'


import CollectionPreview from "../../components/collection-preview/CollectionPreview"

class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            collections: SHOP_DATA
             
        }
    }

    render() {

        const {collections} = this.state


        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherprops}) => (
                        <CollectionPreview key={id} {...otherprops}/>
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;