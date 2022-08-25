import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/item';
const URL_upload = 'http://localhost:3000/upload';

const getData = async (cb) => {
  try {
    let item = await axios({
      method: 'GET',
      url: URL,
    });
    cb(item.data);
  } catch (error) {
    console.log(error);
  }
};

const uploadImage = async (img, cb) => {
  try {
    if (img) {
      let formData = new FormData();
      formData.append('picture', img);
      fetch(URL_upload, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.status === 'success') {
            console.log('URL SHOW = ' + result.image);
            cb(result.name);
          }
        });
    } else {
      cb('');
    }
  } catch (error) {
    console.log(error);
  }
};

const addItem = async (data, img) => {
  try {
    uploadImage(img, async (cb) => {
      data.gambar = cb;
      let result = await axios({
        method: 'POST',
        url: URL + '/create',
        data: data,
      });
      Swal.fire(
        'Add Item',
        'Item ' + result.data.name + ' has been addes',
        'success'
      );
    });
  } catch (error) {
    console.log(error);
  }
};

const editItem = async (id, data, img) => {
  try {
    uploadImage(img, async (cb) => {
      data.gambar = cb;
      await axios({
        method: 'PUT',
        url: URL + '/update/' + id,
        data: data,
      });
      Swal.fire(
        'Edit Item',
        'Item ' + data.name + ' has been update',
        'success'
      );
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async (id) => {
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

const informationItem = async (id, cb) => {
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

export { getData, addItem, editItem, deleteItem, informationItem };
