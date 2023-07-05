const User = require("../model/userModel");

const getAllUser = async (req, res) => {
  try {
    const allUser = await User.find();
    // res.send(allUser);
    res.status(200).json({message:"userretrived", user:allUser});
  } catch (err) {
    res.send(err);
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
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

const getByAge = async(req,res)=> {
  // const {age} = req.params
  try{
    const user = await User.find({age:req.query.age});
    res.send(user)
  }catch (err) {
    res.send(err);
  }
}

const createUser = async (req, res) => {
  const { name, age, email } = req.body;

  try {
    const userAdded = User.create({
      name: name,
      email: email,
      age: age,
    });
    
    res.status(200).json({message:"userAdded", user:userAdded});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const singleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.send(singleUser);
  } catch (error) {
    res.send(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete({ _id: id });
    res.status(201).json({message:"deleted",deletedUser});
  } catch (error) {
    res.status(400).json({ error: error.message });
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
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllUser,
  createUser,
  singleUser,
  deleteUser,
  updateSingle,
  getById,
  getByAge
};
