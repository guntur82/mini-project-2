import axios from 'axios';
import Swal from 'sweetalert2';
const URL = 'http://localhost:3000/brand';
const getData = async (cb) => {
  try {
    let brand = await axios({
      method: 'GET',
      url: URL,
    });
    cb(brand.data);
  } catch (error) {
    console.log(error);
  }
};
const addBrand = async (data) => {
  try {
    let result = await axios({
      method: 'POST',
      url: URL + '/create',
      data: data,
    });
    Swal.fire(
      'Add Brand',
      'Brand ' + result.data.name + ' has been addes',
      'success'
    );
  } catch (error) {
    console.log(error);
  }
};
const editBrand = async (id, data) => {
  try {
    let result = await axios({
      method: 'PUT',
      url: URL + '/update/' + id,
      data: data,
    });
    Swal.fire(
      'Edit Brand',
      'Brand ' + result.data.name + ' has been update',
      'success'
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteBrand = async (id) => {
  try {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // di routenya /delete from "get" to "delete" karena udh pake axios
        await axios({
          method: 'DELETE',
          url: URL + '/delete/' + id,
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        // window.location.reload();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const informationBrand = async (id, cb) => {
  try {
    let result = await axios({
      method: 'GET',
      url: URL + '/information/' + id,
    });
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};

export { getData, addBrand, editBrand, deleteBrand, informationBrand };
