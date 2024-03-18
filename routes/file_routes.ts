import { FileContoller } from '@/controllers';
import { FileModel } from '@/models';
import { ModelService } from '@/services';
import express, { Request, Response } from 'express';
FileContoller;
const router = express.Router();

const service = new ModelService(FileModel);

const conteoller = new FileContoller(service);

router.get('/files/:id', conteoller.getFileById);

export default router;
