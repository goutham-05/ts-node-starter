import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
  res.json([{ id: 1, name: 'Hello world!' }]);
};
