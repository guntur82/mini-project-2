import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // buat redirect
import { addItem, informationItem, editItem } from '../../axios/itemAxios';
import { getData } from '../../axios/brandAxios';

const ActionItem = () => {
  const [form, setForm] = useState({
    name: '',
    harga: '',
    gambar: '',
    stock: '',
    userId: '',
    brandId: '',
  });
  const [brands, setBrands] = useState([]);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    getData((result) => setBrands(result));
    if (id) {
      informationItem(+id, (result) => {
        setForm({
          name: result.name,
          harga: result.harga,
          gambar: result.gambar,
          stock: result.stock,
          userId: result.userId,
          brandId: result.brandId,
        });
      });
    }
  }, []);
  const navigation = useNavigate();
  const submitHandler = () => {
    id ? editItem(id, form) : addItem(form);
    navigation('/main/item');
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <h5>{id ? 'Edit Item' : 'Create Item'}</h5>
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <div className="mb-3">
            <label>Name :</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Harga :</label>
            <input
              value={form.harga}
              onChange={(e) => setForm({ ...form, harga: e.target.value })}
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Gambar :</label>
            <input
              value={form.gambar}
              //   onChange={this.onFileChange}
              onChange={(e) => setForm({ ...form, gambar: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Stock :</label>
            <input
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Distributor :</label>
            <input
              value={form.userId}
              onChange={(e) => setForm({ ...form, userId: e.target.value })}
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3 ">
            <label>Brand :</label>
            <select
              className="form-select"
              onChange={(e) => setForm({ ...form, brandId: e.target.value })}
              value={form.brandId}
            >
              <option value="">-Pilih Brand-</option>
              {brands.map((brand, i) => {
                const { id, name } = brand;
                return (
                  <option value={id} key={id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <div className="mb-3">
              <button
                onClick={() => submitHandler()}
                className="btn btn-block btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionItem;
