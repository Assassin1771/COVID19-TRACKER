import { Component } from "react";
import { Box, Typography, withStyles } from "@material-ui/core";
import logo from "./images/corona.png";
import Cards from "./components/Cards";
import { fetchData } from "./service/Api";

const style = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  header: {
    backgroundColor: "#F5F5F5",
    width: 400,
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    color: "#777",
  },

  lastUpdated: {
    color: "#777",
    fontSize: 12,
  },
};

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  render() {
    const { data } = this.state;

    return (
      <Box className={this.props.classes.container}>
        <Box className={this.props.classes.header}>
          COVID 19 CORONAVIRUS PANDEMIC STATS
        </Box>
        <Typography className={this.props.classes.lastUpdated}>
          Last Updated:
          {data.lastUpdate && new Date(data.lastUpdate).toDateString()}
        </Typography>
        <br />
        <br />
        <img style={{ width: 350 }} src={logo} alt="COVID_IMAGE" />
        <Cards data={data} />
      </Box>
    );
  }
}

export default withStyles(style)(App);
