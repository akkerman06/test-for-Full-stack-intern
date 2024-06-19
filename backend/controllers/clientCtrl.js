const bcrypt = require("bcrypt");
const Clients = require("../models/clientModel");
const clientCtrl = {
  getClients: async (req, res) => {
    try {
      const clientsData = await Clients.find({
        fullnameUser: req.user.fullname,
      });

      res.json({
        msg: "Success",
        clientsData,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  changeStatus: async (req, res) => {
    try {
      const { status } = req.body;
      const client = await Clients.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        {
          status,
        }
      );
      if (!client) {
        return res.status(400).json({ msg: "Пользователя нет." });
      }
      res.json({
        msg: "Status updated",
        // client,
      });
    } catch (err) {}
  },
};

module.exports = clientCtrl;
