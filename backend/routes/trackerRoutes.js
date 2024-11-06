
// old codes :

// const express = require('express');
// const { addTrackerEntry, getTrackerData } = require('../controllers/trackerController');
// const router = express.Router();

// router.post('/add', addTrackerEntry);
// router.get('/', getTrackerData);

// module.exports = router;


//  ---------- just recent added----------------

const express = require('express');
const router = express.Router();
const { addEntry, deleteLatest, getProgressData, deleteAllEntries } = require('../controllers/trackerController');

router.post('/add', addEntry);
router.delete('/delete-latest', deleteLatest);
router.get('/:userId/data', getProgressData); // New route to fetch progress data
router.delete('/delete-all', deleteAllEntries);


module.exports = router;


