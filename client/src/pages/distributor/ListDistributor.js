import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import LoadingBar from '../../helpers/LoadingBar';

const ListDistributor = () => {
  return (
    <div className="row my-3 text-center">
      <div className="col-9 mx-auto">
        <div className="w-100">
          <button to="#" className="btn btn-sm btn-primary my-2">
            <span className="me-2">
              <FiPlusSquare></FiPlusSquare>
            </span>
            Add Distributor
          </button>
        </div>
        <div className="w-100">
          <table className="table table-border">
            <thead>
              <tr className="table-primary">
                <th>No</th>
                <th>Name</th>
                <th>No Hp</th>
                <th>Alamat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <LoadingBar />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListDistributor;
