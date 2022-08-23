# Keltwoe Ponsel Apps

## Database

```bash
npx sequelize-cli model:generate --name user --attributes name:string,no_hp:string,alamat:string

npx sequelize-cli model:generate --name brand --attributes name:string,homepage:string,logo:string

npx sequelize-cli model:generate --name item --attributes name:string,harga:integer,gambar:string,stock:integer,userId:integer,brandId:integer

npx sequelize-cli model:generate --name transaksi --attributes name:string,alamat:string,tanggal:string,jumlah:integer,total_harga:integer,itemId:integer

```

### End Point

| Method | Route             | Keterangan                                      |
| ------ | ----------------- | ----------------------------------------------- |
| GET    | /brand            | Menampilkan semua brand yang ada dalam database |
| POST   | /brand/create     | Melakukan _insertion_ brand ke dalam database   |
| POST   | /brand/update/:id | Melakukan _update_ brand ke dalam database      |
| GET    | /brand/delete/:id | Melakukan _delete_ brand di database            |
| GET    | /item             | Menampilkan semua item yang ada dalam database  |
| POST   | /item/create      | Melakukan _insertion_ item ke dalam database    |
| POST   | /item/update/:id  | Melakukan _update_ item ke dalam database       |
| GET    | /item/delete/:id  | Melakukan _delete_ item di database             |

### Documentation

- GET '/brand'

```ssh
//req
localhost:3000/brand

//res
[
    {
        "id": 1,
        "name": "apple",
        "homepage": "apel jatuh",
        "logo": "apple",
        "createdAt": "2022-08-22T09:58:40.660Z",
        "updatedAt": "2022-08-22T10:08:57.702Z"
    }
]
```

- POST '/brand/create'

```ssh
//req
localhost:3000/brand/create
{
    "name": "samsung",
    "homepage": "test",
    "logo": "samsung"
}

//res
{
    "id": 1,
    "name": "samsung",
    "homepage": "test",
    "logo": "samsung",
    "updatedAt": "2022-08-22T09:58:40.660Z",
    "createdAt": "2022-08-22T09:58:40.660Z"
}
```

- POST '/brand/update/:id'

```ssh
//req
localhost:3000/brand/update/1
{
    "name": "apple",
    "homepage": "apel jatuh",
    "logo": "apple"
}

//res
[
    1
]
```

- POST '/brand/delete/:id'

```ssh
//req
localhost:3000/brand/delete/1

//res
1
```

- GET '/item'

```ssh
//req
localhost:3000/item

//res
[
    {
        "id": 1,
        "name": "samsung s10",
        "harga": 12000000,
        "gambar": "samsung pict",
        "stock": 10,
        "userId": 1,
        "brandId": 2,
        "createdAt": "2022-08-22T10:46:20.791Z",
        "updatedAt": "2022-08-22T10:46:20.791Z"
    }
]
```

- POST '/item/create'

```ssh
//req
localhost:3000/item/create
{
    "name" : "samsung s10",
    "harga" : "12000000",
    "gambar" : "samsung pict",
    "stock" : 10,
    "userId" : 1,
    "brandId" : 2
}

//res
{
    "id": 1,
    "name": "samsung s10",
    "harga": 12000000,
    "gambar": "samsung pict",
    "stock": 10,
    "userId": 1,
    "brandId": 2,
    "updatedAt": "2022-08-22T10:46:20.791Z",
    "createdAt": "2022-08-22T10:46:20.791Z"
}
```

- POST '/item/update/:id'

```ssh
//req
localhost:3000/item/update/1
{
    "name" : "samsung note 10",
    "harga" : "15000000",
    "gambar" : "samsung pict",
    "stock" : 15,
    "userId" : 1,
    "brandId" : 2
}

//res
[
    1
]
```

- GET '/item/delete/:id'

```ssh
//req
localhost:3000/item/delete/2

//res
1
```
