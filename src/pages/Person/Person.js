import React, { Component } from "react";
import { fetchPersonByUsername } from '../../services/person.services';
import qs from 'querystringify';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export class PersonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: '',
      name: '',
      location: ''
    }
  }

  componentDidMount() {
    const username = qs.parse(this.props.location.search).username;
    fetchPersonByUsername(username).then(userInfo => {
      this.setState({
        avatar_url: userInfo.avatar_url,
        name: userInfo.name,
        location: userInfo.location
      });
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu" onClick={() => this.props.history.push('/')}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Person
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className="row contain">
        <List>
          <ListItem>
            <Avatar src={this.state.avatar_url}/>
            <ListItemText primary={this.state.name}secondary={this.state.location} />
          </ListItem>
        </List>
        </div>
      </div>
    );
  }
}
export default PersonPage;

