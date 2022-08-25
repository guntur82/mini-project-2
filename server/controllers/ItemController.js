const { item, brand, user } = require('../models');

class ItemController {
  static async getData(req, res) {
    try {
      let result = await item.findAll({ include: [brand, user] });
      res.json(result);
    } catch (error) {
      res.json('err = ' + error);
    }
  }
  static async craete(req, res) {
    try {
      const { name, harga, gambar, stock, userId, brandId } = req.body;
      let result = await item.create({
        name,
        harga,
        gambar,
        stock,
        userId,
        brandId,
      });
      res.json(result);
    } catch (error) {
      res.json('err = ' + error);
    }
  }
  static async update(req, res) {
    try {
      const id = req.params.id;
      const { name, harga, gambar, stock, userId, brandId } = req.body;
      let result = await item.update(
        {
          name,
          harga,
          gambar,
          stock,
          userId,
          brandId,
        },
        {
          where: { id },
        }
      );
      res.json(result);
    } catch (error) {
      res.json('err = ' + error);
    }
  }
  static async delete(req, res) {
    try {
      const id = req.params.id;
      let result = await item.destroy({
        where: { id },
      });
      res.json(result);
    } catch (error) {
      res.json('err = ' + error);
    }
  }

  static async getInformation(req, res) {
    try {
      const id = +req.params.id;
      let result = await item.findByPk(id);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = ItemController;
