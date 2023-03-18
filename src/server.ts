import express from 'express';
import payload from 'payload';
import cors from 'cors';

require('dotenv').config();
const app = express();

app.use(cors({
  origin:'*'
}))
// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  },
  email: {
    transportOptions: {
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'sylvester41@ethereal.email',
        pass: 'ZV4y84fnVh3GzUgpxP'
      }
    },
    fromAddress: 'sylvester41@ethereal.email',
    fromName: 'Hello',
  }
})

// Add your own express routes here
const port = process.env.PORT || 3000
app.listen(port);
