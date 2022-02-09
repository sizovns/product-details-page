import classes from './App.module.css';

const ProductDescription = (props) => {
    // console.log(props);

    const onImgColorClick = (pos) => {
        props.onImgColorClick(pos);
    }

    const onFeatureBtnClick = (pos) => {
        props.onFeatureBtnClick(pos);
    }

    const colors = props.colors.map((item, position) => <img className={classes.ProductImage} onClick={() => onImgColorClick(position)} src={item.imageUrl} key={position}  alt={item.styleName} />);

    const features = props.features.map((item, position) => <button className={classes.FeatureItem} onClick={() => onFeatureBtnClick(position)} key={position}>{item}</button>)

    return (
        <div>
            <h1 className={classes.ProductTitle}>{props.title}</h1>
            <p className={classes.ProductDescription}>{props.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <br/>
            <div>
                {colors}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
                {features}
            </div>
        </div>
    );
};

export default ProductDescription;