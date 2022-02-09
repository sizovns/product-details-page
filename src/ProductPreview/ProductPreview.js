import classes from './ProductPreview.module.css'

const ProductPreview = (props) => {

    const product = props.data;

    return (
        <div className={classes.ProductPreview}>
            <img src={product.colorOptions[props.currentPreviewImagePos].imageUrl} alt="Product Preview" />
            {props.getFeatureSpec()}
          </div>
    );

};

export default ProductPreview;