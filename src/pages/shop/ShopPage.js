import React from "react";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";

import {selectCollections} from '../../redux/shop/shop.selector'

import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherprops }) => (
      <CollectionPreview key={id} {...otherprops} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  });
  



export default connect(mapStateToProps)(ShopPage);
