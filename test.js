const {
  tokenizer,
  parser,
  transformer,
  codeGenerator,
  compiler,
} = require('./the-super-tiny-compiler');
const assert = require('assert');

const input  = '(add 2 (subtract a 2))';
const output = 'add(2, subtract(4, 2));';

// const tokens = [
//   { type: 'paren',  value: '('        },
//   { type: 'name',   value: 'add'      },
//   { type: 'number', value: '2'        },
//   { type: 'paren',  value: '('        },
//   { type: 'name',   value: 'subtract' },
//   { type: 'number', value: '4'        },
//   { type: 'number', value: '2'        },
//   { type: 'paren',  value: ')'        },
//   { type: 'paren',  value: ')'        }
// ];


// //we would like to error out - if type was inncorrect
// const ast = {
//   type: 'Program',
//   body: [{
//     type: 'CallExpression',
//     name: 'add',
//     params: [{
//       type: 'NumberLiteral',
//       value: '2'
//     }, {
//       type: 'CallExpression',
//       name: 'subtract',
//       params: [{
//         type: 'NumberLiteral',
//         value: '4'
//       }, {
//         type: 'NumberLiteral',
//         value: '2'
//       }]
//     }]
//   }]
// };

// const newAst = {
//   type: 'Program',
//   body: [{
//     type: 'ExpressionStatement',
//     expression: {
//       type: 'CallExpression',
//       callee: {
//         type: 'Identifier',
//         name: 'add'
//       },
//       arguments: [{
//         type: 'NumberLiteral',
//         value: '2'
//       }, {
//         type: 'CallExpression',
//         callee: {
//           type: 'Identifier',
//           name: 'subtract'
//         },
//         arguments: [{
//           type: 'NumberLiteral',
//           value: '4'
//         }, {
//           type: 'NumberLiteral',
//           value: '2'
//         }]
//       }]
//     }
//   }]
// };



let tokens = tokenizer(input);
let ast = parser(tokens);
let newAst = transformer(ast);
let genCode = codeGenerator(newAst); //should typeChecking happen at CodeGen level???
let run = typeThrower(genCode);
//expect(parsed.body[0].params[1].params[0].value ).to.equal( 'a ');
