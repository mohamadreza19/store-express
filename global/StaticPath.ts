import path from 'path';
export default class StaticPath {
  private static rootDir: string | null;
  private static _public = '/public';

  static setRootDir(path: string) {
    this.rootDir = path;
  }

  static get public() {
    if (this.rootDir) {
      return this.pathJoin(this._public);
    }
  }
  private static pathJoin(pathToJoin: string) {
    if (this.rootDir) return path.join(this.rootDir, pathToJoin);
  }
}
