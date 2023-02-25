const { parse: babelParse } = require('@babel/parser');
const { parse: astParse, find, findInfo } = require('ast-parser');
const path = require('path');
const glob = require('glob');
const fs = require('fs');

function getLines(code) {
  return code.split('\n');
}

function printMethod(lines, start, end) {
  const firstLine = lines[start - 1];

  const spacesMatch = firstLine.match(/^\s+/);
  const spaces = spacesMatch && spacesMatch[0] ? spacesMatch[0] : '';

  const resulted = [];

  for (let i = start; i <= end; i++) {
    let line = lines[i - 1];
    if (line.indexOf(spaces) === 0) {
      line = line.replace(spaces, '');
    }
    resulted.push(line);
  }

  return resulted.join('\n');
}

function getNode(code) {
  return babelParse(code, {
    sourceType: 'module',
    plugins: ['classProperties', 'typescript', 'decorators'],
  });
}

function getAst(code) {
  const node = getNode(code);

  return astParse(node);
}

function getClassName(classInfo) {
  if (classInfo && classInfo.id && classInfo.id.name) {
    return classInfo.id.name;
  }

  return null;
}

function getSuperClass(classInfo) {
  if (classInfo.superClass && classInfo.superClass.name) {
    return classInfo.superClass.name;
  }
  return null;
}

function getClassInfo(code) {
  const ast = getAst(code);
  const lines = getLines(code);
  const classInfo = find('ClassDeclaration', ast);
  const className = getClassName(classInfo);

  if (!className) {
    return null;
  }

  const superClass = getSuperClass(classInfo);
  const methods = getMethods(classInfo, lines);
  const properties = getProperties(classInfo, lines);

  return {
    className,
    superClass,
    properties,
    methods,
  };
}

function getProperties(classInfo, lines) {
  const classBody = findInfo('ClassBody', classInfo);
  const properties = findInfo('ClassProperty', classBody);

  return (Array.isArray(properties) ? properties : []).map((property) => {
    return {
      name: property.key.id,
      body: `${printMethod(
        lines,
        property.node.loc.start.line,
        property.node.loc.end.line
      )}`,
    };
  });
}

function getMethods(classInfo, lines) {
  const classBody = findInfo('ClassBody', classInfo);
  const methods = findInfo('ClassMethod', classBody);

  return (Array.isArray(methods) ? methods : [methods])
    .filter((method) => !!method)
    .map((method) => {
      return {
        name: method.key.id,
        body: `${printMethod(
          lines,
          method.node.loc.start.line,
          method.node.loc.end.line
        )}`,
      };
    });
}


const sourceRoot = path.join(
  __dirname,
  '..',
  'apps/change-detection-demo/src/app'
);
glob(`${sourceRoot}/**/*.ts`, function (er, files) {
  const info = files
    .filter((filePath) => !filePath.match(/spec\.ts$/))
    .map((filePath) => {
      const templatePath = filePath.substring(0, filePath.length - 3) + '.html';
      return {
        filePath,
        templatePath,
      };
    })
    .filter(({ templatePath }) => fs.existsSync(templatePath))
    .map(({ filePath, templatePath }) => {
      console.log(templatePath);
      const code = fs.readFileSync(filePath, 'utf8');
      const classInfo = getClassInfo(code);
      const template = fs.readFileSync(templatePath, 'utf8');

      const match = template
        .replace(/\n/gim, '\\n')
        .match(/<.*?>/gim)
        ?.filter((match) => match.indexOf('</') !== 0)
        ?.filter((match) => match.indexOf('#') !== -1)
        ?.map((match) => {
          const nameMatch = /#([A-Za-z\-0-9]+)/.exec(match)?.[1];
          return {
            name: nameMatch,
            body: match.replace(/\\n/gim, '\n'),
          };
        });

      return {
        className: classInfo.className,
        tags: match,
      };
    })
    .filter((info) => info);

  console.log('info', info);
  fs.writeFileSync(
    path.join(sourceRoot, 'components-template-chunks.ts'),
    `export const templateInfo = ${JSON.stringify(info, null, '  ')};`,
    { encoding: 'utf8' }
  );
});
