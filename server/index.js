import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


import authRoutes from './src/routes/authRoutes.js';
import channelsRoutes from './src/routes/channelsRoutes.js';
import settingsRoutes from './src/routes/settingsRoutes.js';
import { registerSocketServer } from './src/io/io.js';

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

// file deepcode ignore UseCsurfForExpress: <please specify a reason of ignoring this>, file deepcode ignore DisablePoweredBy: <please specify a reason of ignoring this>
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  return res.send('Hello here is your server');
});

app.use('/api/auth', authRoutes);
app.use('/api/channels', channelsRoutes);
app.use('/api/settings', settingsRoutes);

// file deepcode ignore HttpToHttps: <please specify a reason of ignoring this>
const server = http.createServer(app);

registerSocketServer(server);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Database connection failed. Server not started!');
    console.log(err);
  });
