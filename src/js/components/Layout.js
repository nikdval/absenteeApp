import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div className="container">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Main />
        <Footer />
      </div>
    );
  }
}
