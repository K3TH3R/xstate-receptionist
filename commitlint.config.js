module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['wip', 'feat', 'fix', 'test', 'docs', 'chore']],
		'scope-enum': [2, 'always', ['package', 'repo', 'release']],
	},
}
