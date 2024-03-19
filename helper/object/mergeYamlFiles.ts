import fs from 'fs';
import path from 'path';
import YAML from 'yamljs';

const mergeYamlFiles = (dirPath: string): object => {
  let mergedSwagger = {};
  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isFile() && path.extname(filePath) === '.yaml') {
      const yamlContent = YAML.load(filePath);
      console.log('11');
      console.log(yamlContent);
      mergedSwagger = { ...mergedSwagger, ...yamlContent };
    }
  });

  return mergedSwagger;
};

export default mergeYamlFiles;
