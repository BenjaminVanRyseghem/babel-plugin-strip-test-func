const testRegexp = /^__test__.+/;

function getRegexp(state) {
	if (!state.opts.regexp) {
		return testRegexp;
	}

	return new RegExp(state.opts.regexp);
}

export default function() {
	return {
		name: "strip-test-func",
		visitor: {
			VariableDeclaration(path, state) {
				path.node.declarations.forEach((declaration, index) => {
					if (declaration.id.name.match(getRegexp(state))) {
						let declarationPath = path.get(`declarations.${index}`);
						declarationPath.remove();
					}
				})
			},
			FunctionDeclaration(path, state) {
				if (path.node.id.name.match(getRegexp(state))) {
					path.remove();
				}
			}
		}
	};
};
