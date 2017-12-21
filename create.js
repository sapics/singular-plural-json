const fs = require('fs-extra')
		, irregularPlurals = require('irregular-plurals')
		, pluralize = require('pluralize')
var nouns = fs.readJsonSync('./noun_list.json')
	, hash = {}

for(var i = nouns.length; i--; ){
	var singular = nouns[i]
	var plural = null
	if(irregularPlurals[singular]){
		plural = irregularPlurals[singular];
	} else {
		plural = pluralize.plural(singular)
	}
	hash[singular] = plural
}

fs.writeFile('./index.js', 'module.exports=' + JSON.stringify(hash).replace(/"(\w+)":/g, "$1:"));
