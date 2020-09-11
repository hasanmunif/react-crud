import React, { Component, Fragment } from "react";
import Axios from "axios";
import swal from "sweetalert";

class AddEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      jenis_kelamin: "",
      password: "",
      password_confirmation: "",
      email: "",
      isLoading: false,
      isProccess: false
    };
  }

  onInputHandle = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("tambah", event.target.value);
  };

  onSubmitHandle = (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true
    });
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/register`;
    const payload = {
      username: this.state.username,
      name: this.state.name,
      jenis_kelamin: this.state.jenis_kelamin,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      email: this.state.email
    };
    Axios.post(url, payload)
      .then((response) => {
        console.log("submit", response);
        swal("Data Berhasil di Input", "success");
        this.setState({
          username: "",
          name: "",
          jenis_kelamin: "",
          password: "",
          password_confirmation: "",
          email: "",
          isLoading: false,
          isProccess: false
        });
      })
      .catch((error) => {
        console.log("error", error);
        this.setState({
          isLoading: false
        });
      });
  };

  render() {
    return (
      <Fragment>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {this.props.formName}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form onSubmit={this.onSubmitHandle}>
            <div className="form-group">
              <label htmlFor="username" className="col-form-label">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onInputHandle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="col-form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onInputHandle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="jenis_kelamin" className="col-form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onInputHandle}
              />
            </div>
            <div className="mb-1">Jenis Kelamin</div>
            <div className="form-check">
              <label
                id="jenis_kelamin"
                htmlFor="jenis_kelamin"
                className="form-check-label"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="jenis_kelamin"
                  value="laki-laki"
                  onChange={this.onInputHandle}
                  // checked={(this.state.jenis_kelamin = "laki-laki")}
                />
                Laki-laki
              </label>
            </div>
            <div className="form-check">
              <label
                id="jenis_kelamin2"
                htmlFor="jenis_kelamin"
                className="form-check-label"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="jenis_kelamin"
                  value="perempuan"
                  onChange={this.onInputHandle}
                  // checked={(this.state.jenis_kelamin = "perempuan")}
                />
                Perempuan
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="" className="col-form-label">
                Password
              </label>
              <input
                id="password"
                type="text"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onInputHandle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="col-form-label">
                Konfirmasi Password
              </label>
              <input
                id="password_confirmation"
                type="text"
                className="form-control"
                name="password_confirmation"
                value={this.state.password_confirmation}
                onChange={this.onInputHandle}
              />
            </div>

            <div className="mt-2">
              <button className="btn btn-primary">
                {this.state.isLoading ? "menyimpan data..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default AddEditUser;
