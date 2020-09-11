import React from "react";
// import Siswa from "./Components/Siswa";
// import SiswaRPL from "./Components/SiswaRPL";
import LifeCycle from "./Components/LifeCycle";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">
          SMK MQ <br /> Daftar siswa
        </h2>
        <div>
          {/* <SiswaRPL /> */}
          <LifeCycle />
        </div>
      </div>
    );
  }
}

export default Home;
