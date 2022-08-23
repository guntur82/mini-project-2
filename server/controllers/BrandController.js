const { brand } = require('../models');
class BrandController {
  static async getData(req, res) {
    try {
      let result = await brand.findAll();
      res.json(result);
    } catch (error) {
      res.json('err = ' + error);
    }
  }
  static async craete(req, res) {
    try {
      const { name, homepage, logo } = req.body;
      let result = await brand.create({
        name,
        homepage,
        logo,
      });
      res.json(result);
    } catch (error) {
      res.json('err = ' + error);
    }
  }
  static async update(req, res) {
    try {
      const id = req.params.id;
      const { name, homepage, logo } = req.body;
      let result = await brand.update(
        {
          name,
          homepage,
          logo,
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
      let result = await brand.destroy({
        where: { id },
      });
      res.json(result);
    } catch (error) {
      res.json('err = ' + error);
    }
  }
}

module.exports = BrandController;
