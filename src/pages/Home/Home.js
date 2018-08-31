import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './home.css';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topFive: ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]
    }
  }

  render() {
    const topFiveUserNameButton = this.state.topFive.map((username,index) => {
      return (
      <Button key={index} variant="contained" size="small" color="primary" className="btn-username" 
        onClick={() => this.props.history.push('/person?username='+ username)}>
        { username }
      </Button>
      )
    })

    return (
      <div className="container-fluid">
        <div className="row">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Home
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className="row contain">
          <h2>Top 5 GitHub Users</h2>
          <p>Tap the username to see more information</p>
          {topFiveUserNameButton}
        </div>
      </div>
    );
  }
}
export default HomePage;

