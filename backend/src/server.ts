import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 5100;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, welcome to Matt Griffin Plumbing!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
