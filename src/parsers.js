import yaml from 'js-yaml';

const getParsedData = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Extention '${extension}' is not supported!`);
  }
};

export default getParsedData;
