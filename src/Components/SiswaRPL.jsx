import React from "react";

class SiswaRPL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namaDaftar: "daftar Siswa RPL",
      namaSiswas: [
        { nama: "hasan", kelas: "12", jurusan: "rpl" },
        { nama: "jooa", kelas: "12", jurusan: "rpl" }
      ]
    };
  }

  onClickHandler = () => {
    // {event}
    console.log("berhasil di klik");
    this.setState({
      namaDaftar: "daftar Siswa TKJ",
      namaSiswas: [
        { nama: "mark", kelas: "12", jurusan: "tkj" },
        { nama: "lucas", kelas: "12", jurusan: "tkj" }
      ]
    });
  };
  render() {
    return (
      <div className="container">
        <h4 className="text-center">{this.state.namaDaftar}</h4>
        {this.state.namaSiswas.map((namaSiswa, index) => (
          <div className="card" key="{index}">
            <h5 className="card-title">{namaSiswa.nama}</h5>
            <p className="card-text">{namaSiswa.kelas}</p>
            <p className="card-text">{namaSiswa.jurusan}</p>
            <p>siswa {index + 1}</p>
          </div>
        ))}

        <button
          onClick={this.onClickHandler}
          className="form-control btn-success"
        >
          Ubah
        </button>
      </div>
    );
  }
}

export default SiswaRPL;

// foreach ($datas as $data) {

// }
