import { Response } from './response';

export interface Error {
  error: Response;
  status: number;
  ok: boolean;
  url: string;
  statusText: string;
  name: string;
  message: string;
}
