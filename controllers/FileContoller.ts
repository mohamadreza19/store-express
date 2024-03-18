import { Request, Response } from 'express';
import path from 'path';

import { ModelService } from '@/types/Services';
import { StaticPath } from '@/global';
const MONGODB_OBJECT_ID_LENGTH = 24;

class FileConteoller {
  private service: ModelService;

  constructor(service: ModelService) {
    this.service = service;
  }

  getFileById = async (req: Request, res: Response) => {
    const { id: _id } = req.params;

    if (_id.length !== MONGODB_OBJECT_ID_LENGTH) {
      return res.status(400).json({
        message: '_id must be a 24 character hex string',
      });
    }
    try {
      const record = await this.service.findById(_id);

      if (!record) {
        return res.status(404).json({
          message: `The file with id:${_id} was not found`,
        });
      }
      const filePath = `${StaticPath.public}/${record.name}`;

      res.status(200).sendFile(filePath);
    } catch (error) {
      console.log(error);
    }
  };
}
export default FileConteoller;
