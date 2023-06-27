import express from 'express';
import cors from 'cors';
import { getAvatar } from './avatarController';

const app = express();
const port = 3000;
app.use(cors({
  origin: true,  
  credentials: true,
}));

app.get('/user-avatar', getAvatar);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
