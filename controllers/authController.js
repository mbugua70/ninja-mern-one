const WorkOutModel = require("../models/workOut");

// controllers functions

// workOut all
module.exports.workOut_get_all = async (req, res) => {
  //   res.json({ msg: "Get all the workouts" });
  try {
    const allWorkOut = await WorkOutModel.find();
    console.log(allWorkOut);
    if (allWorkOut.length === 0) {
      return res
        .status(200)
        .json({ success: true, msg: "You have no workout record available" });
    }
    return res.status(200).json({ success: true, data: allWorkOut });
  } catch (err) {
    console.log(err);
  }
};

module.exports.single_get_workOut = async (req, res) => {
  //   res.json({ msg: "Get Single workout" });
  try {
    const paramsID = req.params.id;
    const SingleWorkOut = await WorkOutModel.findById(paramsID);
    // console.log(SingleWorkOut);
    return res.status(200).json({ success: true, data: SingleWorkOut });
    // if(SingleWorkOut)
  } catch (err) {
    console.log(err);
  }
};

module.exports.workOut_post = async (req, res) => {
  //   res.json({ msg: "Post new workout" });
  const { title, reps, load } = req.body;
  try {
    const createWorkOut = await WorkOutModel.create({ title, reps, load });
    res
      .status(201)
      .json({ success: true, msg: "WorkOut created successfully" });
  } catch (err) {
    console.log(err);
  }
};

module.exports.workOut_delete = async (req, res) => {
  //   res.json({ msg: "Delete workout" });
  const paramsID = req.params.id;
  try {
    const deleteResult = await WorkOutModel.findByIdAndDelete(paramsID);
    console.log(deleteResult);
    return res.status(200).json({
      success: true,
      data: `ObjectID ${deleteResult._id} deleted successfully`,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.workOut_update = async (req, res) => {
  //   res.json({ msg: "Update workout" });
  const paramsID = req.params.id;
  const updatedValue = req.body;
  try {
    const updatedWork = await WorkOutModel.findByIdAndUpdate(
      paramsID,
      updatedValue,
      { new: true }
    );

    return res.status(204).json({ success: true, data: updatedWork });
  } catch (err) {
    console.log(err);
  }
};
