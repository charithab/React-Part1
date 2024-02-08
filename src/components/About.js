import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Page</h2>
        <UserClass name={"First"} location={"Bangalore"} />
        <UserClass name={"Second"} location={"Bangalore"} />
        <UserClass name={"Third"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
