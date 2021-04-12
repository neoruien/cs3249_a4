import React, { Component } from "react";
import Controller from "./components/Controller.jsx";
import TimeSeriesGraphView from "./components/TimeSeriesGraphView.jsx"
import './MainPanel.css';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

class MainPanel extends Component {
  constructor(props) {
    super(props);
    let now = new Date();
    let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
    let end = moment(start).add(1, "days").subtract(1, "seconds");
    this.state = {
      startDate: start,
      endDate: end,
      size: 7,
      temp0: 20,
      temp1: 20,
      temp2: 20,
      temp3: 20,
      temp4: 20,
      temp5: 20,
      temp6:20,
      tempMax: 28.06,
      tempMin: 7.983,
      color0: 'rgba(88,117,153,1)',
      color1: 'rgba(88,117,153,0.9)',
      color2: 'rgba(88,117,153,0.8)',
      color3: 'rgba(88,117,153,0.7)',
      color4: 'rgba(88,117,153,0.6)',
      color5: 'rgba(88,117,153,0.5)',
      color6: 'rgba(88,117,153,0.4)',
    };
  }

  onDateChange = (newStartDate, newEndDate) => {
    this.setState({
      startDate: newStartDate,
      endDate: newEndDate
    })
  }

  onSizeChange = (event, newValue) => {
    this.setState({ size: newValue });
  };

  render() {
    return (
      <div class="body">
        <div class="header">
          <Controller
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            size={this.state.size}
            onDateChange={this.onDateChange}
            onSizeChange={this.onSizeChange}
          />
        </div>
        <div class="main-content">
          Main content
          <TimeSeriesGraphView />
        </div>
        <div class="footer">
          <Button style={{backgroundColor: this.state.color0}}>Room 0</Button>
          <Button style={{backgroundColor: this.state.color1}}>R1</Button>
          <Button style={{backgroundColor: this.state.color2}}>R2</Button>
          <Button style={{backgroundColor: this.state.color3}}>R3</Button>
          <Button style={{backgroundColor: this.state.color4}}>R4</Button>
          <Button style={{backgroundColor: this.state.color5}}>R5</Button>
          <Button style={{backgroundColor: this.state.color6}}>R6</Button>
        </div>
      </div>
    );
  }
}

export default MainPanel;
