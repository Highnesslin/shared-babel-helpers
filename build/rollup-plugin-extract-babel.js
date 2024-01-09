export default function () {
  return {
    name: 'get-ast',
    async generateBundle(_, bundle) {
      if (!bundle['bundle1.js']) return

      const { imports, code } = bundle['bundle1.js']
      const ast = this.parse(code)

      const args = ast.body[0].expression.arguments

      /**
       * @var imports ImportDeclaration 的 moduleSpecifier
       * @var args    ImportDeclaration 的 importClause
       * @example     import `args[`i] from '`imports[i]`'
       */
    }
  };
}
