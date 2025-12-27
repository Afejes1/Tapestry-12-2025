import express, { Request, Response } from 'express';
import { ApiResponse, User } from '@tapestry/shared';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/users', (_req: Request, res: Response) => {
  const users: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const response: ApiResponse<User[]> = {
    data: users,
    status: 200,
    message: 'Users retrieved successfully',
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
