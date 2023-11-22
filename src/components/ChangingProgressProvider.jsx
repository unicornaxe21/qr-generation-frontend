import React from "react";

class ChangingProgressProvider extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false
  }
  static defaultProps = {
    interval: 2000,
   
  };
  state = {
    valuesIndex: 0,
    isMountedVal: 0,  
  };

  componentDidMount() {
    this._isMounted = true;
    this.isMountedVal = 1;
    setTimeout(() => {
      this._isMounted && this.setState({
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
      });
    }, this.props.interval);
  }
  componentWillUnmount(){
		this.isMountedVal = 0;
    this._isMounted = false
	}

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;