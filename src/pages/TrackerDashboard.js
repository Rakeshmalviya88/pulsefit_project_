import React, { useEffect, useState } from 'react';
// import { addEntry, deleteLatestEntry, getProgressData, deleteAllEntries  } from '../services/api';     // using axios
import { addEntry, deleteLatestEntry, getProgressData, deleteAllEntries} from '../utils/fetchData';    //without axios
import { Line } from 'react-chartjs-2';
import { Chart, registerables, CategoryScale, LinearScale } from 'chart.js';
import '../styles/Tracker.css';

Chart.register(...registerables);
Chart.register(CategoryScale, LinearScale);

const TrackerDashboard = ({ userId, username }) => {
  const [weight, setWeight] = useState('');
  const [calories, setCalories] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [sleepDuration, setSleepDuration] = useState('');
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    fetchProgressData();
  }, []);

  const fetchProgressData = async () => {
    try {
      const response = await getProgressData(userId);
      setProgressData(response.data);
    } catch (error) {
      console.error('Error fetching progress data:', error);
    }
  };

  const handleAddEntry = async () => {
    if (weight && calories && waterIntake && sleepDuration) {
      try {
        await addEntry(userId, weight, calories, waterIntake, sleepDuration);
        fetchProgressData();
        setWeight('');
        setCalories('');
        setWaterIntake('');
        setSleepDuration('');
      } catch (error) {
        console.error('Error adding entry:', error);
      }
    } else {
      alert('Please fill all fields.');
    }
  };

  const handleDeleteLatest = async () => {
    try {
      await deleteLatestEntry(userId);
      fetchProgressData();
    } catch (error) {
      console.error('Error deleting latest entry:', error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      const response = await deleteAllEntries(userId);
      if (response.data.success) {
        alert(response.data.message);
        setProgressData([]); // Clear data in UI
      } else {
        alert('Failed to delete all data');
      }
    } catch (error) {
      console.error('Error deleting all data:', error);
      alert('Server error. Please try again.');
    }
  };
  

  const chartData = {
    labels: progressData.map(entry => new Date(entry.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Weight',
        data: progressData.map(entry => entry.weight),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Calories',
        data: progressData.map(entry => entry.calories),
        fill: false,
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
      },
      {
        label: 'Water Intake',
        data: progressData.map(entry => entry.waterIntake),
        fill: false,
        backgroundColor: 'rgba(54,162,235,0.4)',
        borderColor: 'rgba(54,162,235,1)',
      },
      {
        label: 'Sleep Duration',
        data: progressData.map(entry => entry.sleepDuration),
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  return (
    <div className="tracker-dashboard">
      {/* <h2>Hello <span id='u-name'>{username}</span>, Track your Progress here</h2> */}
      <h2>Hello <span id='u-name'>{username}</span>, Enter your today's data</h2>
      <div className="input-container">
        <input type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
        <input type="number" placeholder="Water Intake" value={waterIntake} onChange={(e) => setWaterIntake(e.target.value)} />
        <input type="number" placeholder="Sleep Duration" value={sleepDuration} onChange={(e) => setSleepDuration(e.target.value)} />
      </div>
      <div className="buttons">
        <button className="add-entry-btn" onClick={handleAddEntry}>Add Entry</button>
        <button className="delete-entry-btn" onClick={handleDeleteLatest}> <i className="fas fa-trash-alt"></i> </button>
        
        <button className="delete-all-btn" onClick={handleDeleteAll}>Delete my data</button>

      </div>
      <div className="chart-container">
        <h3>Progress Chart</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default TrackerDashboard;

