import { IApi } from '../api/models';

export interface IService {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  thumbnail?: string;
  icon?: string;
  price?: number;
  applied_count?: number;
  introduction?: string;
  api_ids?: string[];
  apis?: IApi[];
  created_at?: string;
  updated_at?: string;
}

export interface IServiceListResponse {
  count: number;
  items: IService[];
}

export type IServiceDetailResponse = IService;
