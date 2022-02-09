import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    // console.log(props);

    const product = props.data;

    const onImgColorClick = (pos) => {
        props.onImgColorClick(pos);
    }

    const onFeatureBtnClick = (pos) => {
        props.onFeatureBtnClick(pos);
    }

    const colorOptions = product.colorOptions.map((item, position) => {
        const classArr = [classes.ProductImage]
        if (position === props.currentPreviewImagePos) {
            classArr.push(classes.SelectedProductImage)
        }
        return (
            <img className={classArr.join(' ')} onClick={() => onImgColorClick(position)} src={item.imageUrl} key={position} alt={item.styleName} />
        );
    });

    const featureList = product.featureList.map((item, position) => {
        const classArr = [classes.FeatureItem]
        if (position === props.currentPreviewFeaturePos) {
            classArr.push(classes.SelectedFeatureItem)
        }
        return (
            <button className={classArr.join(' ')} onClick={() => onFeatureBtnClick(position)} key={position}>{item}</button>
        );
    });

    return (
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{product.title}</h1>
            <p className={classes.ProductDescription}>{product.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <br />
            <div>
                {colorOptions}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
                {featureList}
            </div>
            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    );
};

export default ProductDetails;