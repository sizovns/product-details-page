import { Component } from 'react';
import './App.css';
import ProductData from './model/ProductData';
import ProductDescription from './ProductDescription';

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
      let time = today.getHours() + ":" + today.getMinutes();
      return time;
    } else {
      return 71;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="split right">
          <div className="centeredText">
            <ProductDescription title={ProductData.title} 
            description={ProductData.description} colors={ProductData.colorOptions} 
            features={ProductData.featureList} onImgColorClick={this.setColor} onFeatureBtnClick={this.setFeature} 
            />
          </div>
        </div>
        <div className="split left">
          <div className="centered">
            <img src={this.state.colorOption.imageUrl} />
            <p>{this.getFeatureSpec()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
