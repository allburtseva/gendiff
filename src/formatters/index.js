import makeStylish from './stylish.js';
import makePlain from './plain.js';
import makeJSON from './json.js';

const formatTree = (tree, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    case 'json':
      return makeJSON(tree);
    default:
      throw new Error(`Incorrect output format '${format}'`);
  }
};

export default formatTree;
