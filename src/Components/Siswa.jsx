import React from "react";

const Siswa = (props) => {
  return (
    <div>
      <table className="">
        <thead>
          <h5>Siswa Kelas XII</h5>
          <tr>
            <th>Nama</th>
            <th>:</th>
            <th>{props.nama}</th>
          </tr>
          <tr>
            <th>NISN</th>
            <th>:</th>
            <th>{props.nisn}</th>
          </tr>
          <tr>
            <th>Jurusan</th>
            <th>:</th>
            <th>{props.jurusan}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Siswa;
