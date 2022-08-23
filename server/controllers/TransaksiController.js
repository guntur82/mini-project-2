const {transaksi} = require("../models")

class TransaksiController{
    static async list(req, res) {
        try {
            let transaction = await transaksi.findAll({
                order: [
                    ['id', 'asc']
                ]
            })

            res.json(transaction)
        } catch (err) {
            res.json(err)
        }
    }

    static async createPage(req, res) {
        
    }

    static async create(req, res) {
        try {
            const { name, alamat, tanggal, jumlah, total_harga,itemid } = req.body;
            let transaction = await transaksi.create({
                name, alamat, tanggal, jumlah, total_harga,itemid
            })

            res.json(transaction)

        } catch (err) {
            res.json(err)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id

            let transaction = await transaksi.destroy({
                where: { id }
            })
            

            transaction === 1 ?
                res.json(({
                    message: `data from id ${id} has been deleted!`
                })) :
                res.json({
                    message: `data from id ${id} has not been deleted!`
                })
        } catch (err) {
            res.json(err)
        }
    }

    static update(req, res) {

    }

    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name, alamat, tanggal, jumlah, total_harga,itemid } = req.body

            let transaction = await transaksi.update({
                name, alamat, tanggal, jumlah, total_harga,itemid
            }, {
                where: { id }
            })
         

            transaction[0] === 1 ?
                res.json({
                    message: `Company id ${id} has been updated!`
                }) :
                res.json({
                    message: `Company ${id} has not been updated`
                })
        } catch (err) {
            res.json(err)
        }
    }

    static async info(req, res) {
        try {
            const id = +req.params.id

            let result = await profile.findOne({
                where: {
                    companyId: id
                },
                include: [company]
            })

            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }
}


module.exports = TransaksiController;
