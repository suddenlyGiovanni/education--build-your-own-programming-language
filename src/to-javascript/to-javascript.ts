import generate from '@babel/generator'
import { Node } from '@babel/types'

import { traverse, Visitor } from 'traverse/traverse'
import { ASTNode, CallExpression, Identifier } from 'ast/ast'
import { SyntaxKind } from 'types'

const babelVisitor: Visitor = {
  CallExpression: {
    enter({ node }): void {
      if (CallExpression.isCallExpression(node)) {
        const identifier: Identifier = {
          type: SyntaxKind.Identifier,
          name: node.name,
          loc: null,
        }
        node.callee = identifier
      }
    },
  },
}

export const toJavaScript = (ast: ASTNode): string => {
  traverse(ast, babelVisitor)
  return generate(ast as Node).code
}
