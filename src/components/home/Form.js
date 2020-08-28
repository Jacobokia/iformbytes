import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      address: "",
      gender: "",
      textareaValue: "",
    };
  }
  firstNameHandle = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  lastNameHandle = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  emailHandle = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  phoneHandle = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  countryHandle = (e) => {
    this.setState({
      country: e.target.value,
    });
  };
  addressHandle = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  genderHandle = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  textareaValueHandle = (e) => {
    this.setState({
      textareaValue: e.target.value,
    });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      address,
      gender,
      textareaValue,
    } = this.state;
    return (
      <div className="homeDiv">
        {/* <div className="firstDiv">
          This is home react-router-bootstrap – Integration with React Router
          Awesome React Bootstrap Components - Additional components like
          off-canvas navbar, switch and sliders. Local setup Yarn is our package
          manager of choice here. Check out setup instructions here if you don't
          have it installed already. After that you can run yarn run bootstrap
          to install all the needed dependencies. From there you can: Run the
          tests once with yarn test (Or run them in watch mode with yarn run
          tdd). Start a local copy of the docs site with yarn start Or build a
          local copy of the library with yarn run build CodeSandbox Examples
        </div> */}
        <div className="secondDiv">
          <form action method>
            <p>IformByte form</p>
            <div>
              <div>
                <label>
                  <input
                    placeholder="First Name"
                    className="inputs"
                    type="text"
                    value={firstName}
                    onChange={this.firstNameHandle}
                  />
                </label>
                <label className="common">
                  <input
                    placeholder="Last Name"
                    className="inputs"
                    type="text"
                    value={lastName}
                    onChange={this.lastNameHandle}
                  />
                </label>
              </div>
            </div>
            <label>
              <input
                placeholder="Email"
                type="email"
                className="inputs"
                value={email}
                onChange={this.emailHandle}
              />
            </label>
            <label className="common">
              <input
                placeholder="Phone"
                className="inputs"
                type="text"
                value={phone}
                onChange={this.phoneHandle}
              />
            </label>
            <label>
              <input
                placeholder="Country"
                className="inputs"
                type="text"
                value={country}
                onChange={this.countryHandle}
              />
            </label>
            <label className="common">
              <input
                placeholder="Physical Address"
                className="inputs"
                type="text"
                value={address}
                onChange={this.addressHandle}
              />
            </label>
            <div>
              <label>
                <select
                  className="btnTxt"
                  defaultValue="Select Gender"
                  onChange={this.genderHandle}
                  value={gender}
                >
                  <option defaultValue>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
            <label>
              <textarea
                placeholder="Your reason for coming"
                rows={5}
                cols={53}
                value={textareaValue}
                onChange={this.textareaValueHandle}
              ></textarea>
            </label>
            <input style={{width:"83.4%"}} className="btnTxt" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
