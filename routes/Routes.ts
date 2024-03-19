import {
  FileContoller,
  ProductConteoller,
  UserConteoller,
} from '@/controllers';
import { FileModel, ProductModel, UserModel } from '@/models';
import { ModelService } from '@/services';
import { Application } from 'express';

export default class Routes {
  //
  private api_base_url: string = '/api';
  //models
  private productService = new ModelService(ProductModel);
  private userService = new ModelService(UserModel);
  private fileService = new ModelService(FileModel);

  //contollers
  private productConteoller = new ProductConteoller(this.productService);
  private userConteoller = new UserConteoller(this.userService);
  private fileConteoller = new FileContoller(this.fileService);

  routes(app: Application) {
    app
      .route(this.api_base_url + '/products')
      .get(this.productConteoller.getProducts);
    //
    //
    app.route(this.api_base_url + '/users').get(this.userConteoller.getUsers);
    //
    //
    app
      .route(this.api_base_url + '/files/:id')
      .get(this.fileConteoller.getFileById);
  }
}
