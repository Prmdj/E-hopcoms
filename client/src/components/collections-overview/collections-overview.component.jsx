import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview  from "../collection-preview/collection-preview.component";

import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

import "./collections-overview.scss";

const CollectinsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview id={id} {...otherCollectionsProps} />
    ))}
  </div>
);

const mapToStateProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
  });

export default connect(mapToStateProps)(CollectinsOverview) 