import { Component } from 'react';
import ProductData from './model/ProductData';
import ProductDescription from './ProductDescription';
import classes from './App.module.css'

class App extends Component {

  state = {
    colorOption: ProductData.colorOptions[0],
    feature: ProductData.featureList[0]
  }

  setColor = (position) => {
    const updatedColor = ProductData.colorOptions[position];
    this.setState({ colorOption: updatedColor });
  };

  setFeature = (position) => {
    const updatedFeature = ProductData.featureList[position];
    this.setState({ feature: updatedFeature });
  };

  getFeatureSpec = () => {
    if (this.state.feature === 'Time') {
      let today = new Date();
      let hours = today.getHours() > 9 ? today.getHours() : '0' + today.getHours();
      let minutes = today.getMinutes() > 9 ? today.getMinutes() : '0' + today.getMinutes();
      let time = hours + ":" + minutes;
      return (
        <div className={classes.TimeSection}>
          <p>{time}</p>
        </div>
      );
    } else {
      return (
        <div className={classes.HeartBeatSection}>
          <i class="fas fa-heartbeat"></i>
          <p>78</p>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className={classes.Topbar}>
            <img src="https://i.dlpng.com/static/png/197684_preview.png" alt="Amazon Logo" />
          </nav>
        </header>
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <img src={this.state.colorOption.imageUrl} alt="Product Preview" />
            <div className={classes.FeatureData}>
              {this.getFeatureSpec()}
            </div>
          </div>
          <div className={classes.ProductData}>
            <ProductDescription title={ProductData.title}
              description={ProductData.description} colors={ProductData.colorOptions}
              features={ProductData.featureList} onImgColorClick={this.setColor} onFeatureBtnClick={this.setFeature}
            />
            <button className={classes.PrimaryButton}>Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
