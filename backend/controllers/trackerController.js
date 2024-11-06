const Tracker = require('../models/Tracker');

const addEntry = async (req, res) => {
  const { userId, weight, calories, waterIntake, sleepDuration } = req.body;

  try {
    const newEntry = new Tracker({ userId, weight, calories, waterIntake, sleepDuration });
    await newEntry.save();
    res.json({ success: true, message: 'Entry added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const deleteLatest = async (req, res) => {
  const { userId } = req.body;

  try {
    const latestEntry = await Tracker.findOne({ userId }).sort({ date: -1 });
    if (latestEntry) {
      await Tracker.deleteOne({ _id: latestEntry._id });
      res.json({ success: true, message: 'Latest entry deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'No entries found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const getProgressData = async (req, res) => {
  const { userId } = req.params;

  try {
    const data = await Tracker.find({ userId }).sort({ date: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// delete all
const deleteAllEntries = async (req, res) => {
  const { userId } = req.body;

  try {
    const result = await Tracker.deleteMany({ userId });
    if (result.deletedCount > 0) {
      res.json({ success: true, message: 'All entries deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'No entries found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { addEntry, deleteLatest, getProgressData, deleteAllEntries };



// old code :


// const Tracker = require('../models/Tracker');

// exports.addTrackerEntry = async (req, res) => {
//     try {
//         const newEntry = await Tracker.create(req.body);
//         res.status(201).json(newEntry);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.getTrackerData = async (req, res) => {
//     try {
//         const data = await Tracker.find();
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


