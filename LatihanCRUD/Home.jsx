import React, { Component, Fragment } from "react";
import Axios from "axios";
import AddEditUser from "./Modal/AddEditUser";
import swal from "sweetalert";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      current_page: "",
      total_page: "",
      per_page: "10",
      search: ""
      // formName: ""
    };
  }

  onPrevioushandle = () => {
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${
      this.state.per_page
    }?page=${this.state.current_page - 1}`;
    Axios.get(url)
      .then((response) => {
        this.setState({
          data: response.data.data,
          current_page: response.data.meta.current_page,
          per_page: response.data.meta.per_page
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  onNexthandle = () => {
    console.log("klik lah");
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${
      this.state.per_page
    }?page=${this.state.current_page + 1}`;
    Axios.get(url)
      .then((response) => {
        this.setState({
          data: response.data.data,
          current_page: response.data.meta.current_page,
          total_page: response.data.total_page,
          per_page: response.data.meta.per_page
        });
        console.log("next", response.data.meta.current_page);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  onChange = (event) => {
    const keyword = event.target.value;
    this.setState({ search: keyword });
    console.log("Value", keyword);
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${event.target.value}`;
    Axios.get(url)
      .then((response) => {
        console.log("Select item", response);
        this.setState({
          data: response.data.data,
          per_page: response.data.meta.per_page,
          current_page: response.data.meta.current_page,
          total_pages: response.data.meta.total_pages
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onSelectItem = (event) => {
    console.log("value", event.target.value);
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${event.target.value}`;
    Axios.get(url)
      .then((response) => {
        this.setState({
          data: response.data.data,
          per_page: response.data.meta.per_page,
          total_page: response.data.total_pages,
          current_page: response.data.meta.current_page
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  onDelete = (e) => {
    e.preventDefault();
    const id = e.target.value;
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id}`;
    Axios.get(url).then((hapus) => {
      swal({
        title: "data akan dihapus?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      });
    });
  };

  componentDidMount() {
    const url = "https://belajar-react.smkmadinatulquran.sch.id/api/users/10";
    Axios.get(url)
      .then((response) => {
        console.log("berhasil", response);
        this.setState({
          data: response.data.data,
          current_page: response.data.current_page,
          total_page: response.data.total_page
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        <h2 className="text-center mt-3">Table CRUD</h2>
        <div className="text-center mt-3 mb-3">
          <button
            // onClick={() => {
            //   console.log("registrasi");
            //   this.setState({
            //     formName: 'Form Registrasi'
            //   })
            // }}
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Tambah
          </button>
        </div>

        <div className="container">
          <div className="float-left">
            <div className="mr-4">
              <select onChange={this.onSelectItem} className="btn border">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
          <div className="float-left">
            <input
              type="text"
              className="form-control"
              name="cari"
              id="cari"
              placeholder="masukkan"
              onChange={this.onChange}
            />
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Name</th>
                <th>Jenis kelamin</th>
                <th>Mendaftar</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data
                .filter(
                  (data) =>
                    data.name
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase()) ||
                    data.email
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase()) ||
                    data.username
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase())
                )
                .map((datas, index) => (
                  <tr key={datas.id}>
                    <td>{datas.id}</td>
                    <td>{datas.username}</td>
                    <td>{datas.email}</td>
                    <td>{datas.name}</td>
                    <td>{datas.jenis_kelamin}</td>
                    <td>{datas.stored_at}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        value={datas.id}
                        onClick={this.onDelete}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <button onClick={this.onPrevioushandle} className="page-link">
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button onClick={this.onNexthandle} className="page-link">
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <AddEditUser formName={"User Register"} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
