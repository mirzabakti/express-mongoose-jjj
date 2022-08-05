const { UserModel } = require("../model");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await UserModel.find({});
    console.log(users);

    try {
      res.json({
        message: "berhasil ambil data semua user",
        data: users,
      });
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },

  getUserByID: async (req, res) => {
    const { id } = req.params

    const user = await UserModel.findById(id)

    res.json({
      message: "success get data user",
      data: user
    })
  },

  addUser: (req, res) => {
    const data = req.body
    const user = new UserModel(data)
    user.save()

    res.json("success add data user")
  },

  updateUserByID: (req, res) => {},
  deleteUserByID: (req, res) => {},
};
