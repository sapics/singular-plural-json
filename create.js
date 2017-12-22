const fs = require('fs-extra')
		, irregularPlurals = require('irregular-plurals')
		, pluralize = require('pluralize')
var nouns = require('noun-json')
	, hash = {}
	, len = nouns.length
	, singular, plural

for(var i = 0; i < len; ++i){
	singular = nouns[i]
	plural = null
	if(irregularPlurals[singular]){
		plural = irregularPlurals[singular];
	} else {
		plural = pluralize.plural(singular)
	}
	hash[singular] = plural
}

fs.writeFile('./output.js', 'module.exports=' + JSON.stringify(hash).replace(/"(\w+)":/g, "$1:"));
