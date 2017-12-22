const fs = require('fs-extra')
		, irregularPlurals = require('irregular-plurals')
		, pluralize = require('pluralize')
var hash = {}
	, singular, plural
	, list = require('noun-json')
list.push.apply(list, require('pronoun-json'))
list.sort()
var len = list.length
for(var i = 0; i < len; ++i){
	singular = list[i]
	plural = null
	if(irregularPlurals[singular]){
		plural = irregularPlurals[singular];
	} else {
		plural = pluralize.plural(singular)
	}
	hash[singular] = plural
}

fs.writeFile('./output.js', 'module.exports=' + JSON.stringify(hash).replace(/"(\w+)":/g, "$1:"));
