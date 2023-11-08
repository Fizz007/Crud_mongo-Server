const User = require("../model/userModel");

const getAllUser = async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200).json({message:"userretrived", user:allUser});
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
  //  try{
  //   const totalUser = await User.count().countDocuments();
  //   res.send({count:totalUser})
  //  }catch (err) {
  //   res.send(err);
  // }

};

const getById = async (req, res) => {
  const {id} = req.body
  try {
    const user = await User.findById({ _id: id });
    res.status(200).json({ usser: user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, email, gender, address, mobile, comments } = req.body;

  try {
    const userAdded = await User.create({
      firstName,
      lastName,
      email,
      gender,
      address,
      mobile,
      comments,
    });

    res.status(200).json({ message: "User added successfully", user: userAdded });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const singleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.send(singleUser);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete({ _id: id });
    res.status(201).json({message:"deleted",deletedUser});
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const updateSingle = async (req, res) => {
  const { id } = req.params;
  console.log("get body", req.body);
  console.log("get id", id);

  try {
    const updatedUser = await User.findByIdAndUpdate(id, {$set: req.body});
    // const updatedUser = await User.findByIdAndUpdate(id, req.body, {new:true});
    res.send(updatedUser);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  getAllUser,
  createUser,
  singleUser,
  deleteUser,
  updateSingle,
  getById,
};
