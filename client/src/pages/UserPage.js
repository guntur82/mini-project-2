import React, { useState, useEffect } from 'react';
import * as moment from 'moment';
import { useParams } from 'react-router-dom'; // buat redirect
import { Link } from 'react-router-dom';
import LoadingBar from '../helpers/LoadingBar';
import { getData } from '../axios/itemAxios';

const UserPage = () => {
  const API_img = 'http://localhost:3000/uploads/';
  const params = useParams();
  const { name } = params;
  // let sample = moment(item.createdAt).format('DD/MM/YYYY hh:mm:ss');
  //             sample = sample.split('T')[0];
  let date = moment(new Date()).format('DD/MM/YYYY hh:mm:ss');
  date = date.split('T')[0];
  const [form, setForm] = useState({
    name: name,
    alaamt: '',
    tanggal: date,
    jumlah: '',
    total_harga: '',
    itemId: '',
  });
  const [filter, setFilter] = useState({
    data: '',
    order: '',
  });
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData((result) => setItems(result), filter);
  });
  //tinggal masukin gambar,name udh didapet
  return (
    <div className="my-3">
      <div className="w-100 text-center my-3">
        <h3>Welcome {name}</h3>
        <p>Disini nnti list hp ceritanya</p>
        <select
          className="form-select me-2"
          onChange={(e, a = e.target.value.split('-')) =>
            setFilter({ ...filter, data: a[0], order: a[1] })
          }
        >
          <option value="">-Paling Sesuai-</option>
          <option value="createdAt-asc">Terbaru</option>
          <option value="harga-desc">Harga Tertinggi</option>
          <option value="harga-asc">Harga Terendah</option>
          <option value="stock-desc">Stock Terbanyak</option>
          <option value="stock-asc">Stock Terendah</option>
        </select>
      </div>
      <div className="row my-3 text-center">
        <div className="col-7 mx-auto">
          <div className="row">
            {/*  */}
            {items.map((item) => {
              const { id, name, harga, gambar, stock } = item;
              return (
                <div className="col-4 mb-3" key={id}>
                  <div className="card">
                    <div className="card-body">
                      <div className="home-icons">
                        <img
                          src={gambar ? API_img + gambar : ''}
                          className="img-thumbnail"
                          width={gambar ? '200' : 0}
                          height={gambar ? '200' : 0}
                        />
                      </div>
                      <div className="home-title">
                        <h5>{name}</h5>
                        <h5>
                          Rp.
                          {new Intl.NumberFormat('de-DE', {
                            prefix: 'Rp',
                            centsLimit: 0,
                            thousandsSeparator: '.',
                          }).format(harga)}
                        </h5>
                        <h5>Stock : {stock}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
