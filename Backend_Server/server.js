const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const eventRoutes = require('./Routes/eventRoutes');
const venueRoutes = require('./Routes/venueRoutes');
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/venues', venueRoutes);

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
