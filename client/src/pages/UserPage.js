import React from 'react';
import { MdAssignment } from 'react-icons/md';

const UserPage = () => {
  return (
    <div className="my-3">
      <div className="w-100 text-center my-3">
        <h3>UserPage</h3>
        <p>Disini nnti list hp ceritanya</p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-7 mx-auto">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div className="home-icons">
                    <MdAssignment />
                  </div>
                  <div className="home-title">
                    <h5>Easy to Assign</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div className="home-icons">
                    <MdAssignment />
                  </div>
                  <div className="home-title">
                    <h5>Easy to Assign</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div className="home-icons">
                    <MdAssignment />
                  </div>
                  <div className="home-title">
                    <h5>Easy to Assign</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
