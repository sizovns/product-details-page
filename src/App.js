import { Component } from 'react';
import ProductData from './model/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import classes from './App.module.css'
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar'

class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentPreviewFeaturePos: 0
  }

  setColor = (position) => {
    this.setState({ currentPreviewImagePos: position });
  };

  setFeature = (position) => {
    const updatedFeature = this.state.productData.featureList[position];
    this.setState({ feature: updatedFeature });
    this.setState({currentPreviewFeaturePos: position});
  };

  getFeatureSpec = () => {
    const feature = this.state.productData.featureList[this.state.currentPreviewFeaturePos]
    if (feature === 'Time') {
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
          <i className="fas fa-heartbeat"></i>
          <p>78</p>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Topbar />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview data={this.state.productData} currentPreviewImagePos={this.state.currentPreviewImagePos} getFeatureSpec={this.getFeatureSpec} />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} currentPreviewImagePos={this.state.currentPreviewImagePos} 
              currentPreviewFeaturePos={this.state.currentPreviewFeaturePos} onImgColorClick={this.setColor} onFeatureBtnClick={this.setFeature}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
