import classes from './ProductDescription.module.css';

const ProductDescription = (props) => {
    // console.log(props);

    const onImgColorClick = (pos) => {
        props.onImgColorClick(pos);
    }

    const onFeatureBtnClick = (pos) => {
        props.onFeatureBtnClick(pos);
    }

    const colors = props.colors.map((item, position) => <img onClick={() => onImgColorClick(position)} className={classes.ProductDescriptionImage} src={item.imageUrl} key={position} />);

    const features = props.features.map((item, position) => <button onClick={() => onFeatureBtnClick(position)} key={position}>{item}</button>)

    return (
        <div className={classes.ProductDescription}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Select Color:</p>
            <br/>
            <div>
                {colors}
            </div>
            <div>
                {features}
            </div>
        </div>
    );
};

export default ProductDescription;