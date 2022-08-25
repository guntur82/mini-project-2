import React from 'react';
import { useNavigate } from 'react-router-dom'; // buat redirect

const HomePage = () => {
  const navigation = useNavigate();
  const submitHandler = () => {
    // buat redirect
    navigation('/user');
  };
  const mainHandler = () => {
    // buat redirect
    navigation('/main');
  };
  return (
    <div className="my-5">
      <div className="w-100 text-center my-3">
        <h3>HomePage</h3>
        <p>Welcome to my Apps.</p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-3 mx-auto">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div className="home-title">
                  <h5>Keltwoe Ponsel Apps</h5>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Nama Pelanggan..."
                  />
                </div>
                <button
                  onClick={() => submitHandler()}
                  className="my-3 btn btn-primary btn-user btn-block"
                >
                  Pesan
                </button>
                <hr />
                <div className="text-center">
                  <button onClick={() => mainHandler()} className="small">
                    Masuk sebagai staff
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
