const {
  createSourceTree,
  saveTree,
} = require('../../tools/prepare-source-chunks');
const path = require('path');
const {
  createTemplatesTree,
  saveTemplateTree,
} = require('../../tools/prepare-template-chunks');
let sourceChunks = '';
let templateChunks = '';

const sourceRoot = path.join(__dirname, '../../');



class CompileSourceChunks {
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    compiler.hooks.beforeCompile.tap(
      'MyExampleWebpackPlugin',
      () => {

        return;
        const tree = createSourceTree(sourceRoot);

        try {
          if (sourceChunks !== tree) {
            console.log('rewrite ast source chunks');
            saveTree(path.join(sourceRoot, 'components-chunks.ts'), tree);
            sourceChunks = tree;
          }

          const templateTree = createTemplatesTree(sourceRoot);

          if (templateChunks !== templateTree) {
            console.log('rewrite ast template chunks');
            saveTemplateTree(
              path.join(sourceRoot, 'components-template-chunks.ts'),
              templateTree
            );
            templateChunks = templateTree;
          }
        } catch (e){
          // nothing
        }

      }
    );
  }
}

module.exports = {
  plugins: [
    new CompileSourceChunks(),
  ],
};
