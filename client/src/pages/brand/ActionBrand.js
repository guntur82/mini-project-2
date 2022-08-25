import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // buat redirect
import { addBrand, informationBrand, editBrand } from '../../axios/brandAxios';

const ActionBrand = () => {
  const [form, setForm] = useState({
    name: '',
    homepage: '',
    logo: '',
  });
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    if (id) {
      informationBrand(+id, (result) => {
        setForm({
          name: result.name,
          homepage: result.homepage,
          logo: result.logo,
        });
      });
    }
  }, []);
  const navigation = useNavigate();
  const submitHandler = () => {
    id ? editBrand(id, form) : addBrand(form);
    navigation('/main/brand');
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <h5>{id ? 'Edit Brand' : 'Create Brand'}</h5>
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
            <label>Homepage :</label>
            <input
              value={form.homepage}
              onChange={(e) => setForm({ ...form, homepage: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>logo :</label>
            <input
              value={form.logo}
              //   onChange={this.onFileChange}
              onChange={(e) => setForm({ ...form, logo: e.target.value })}
              type="text"
              className="form-control"
            />
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

export default ActionBrand;
