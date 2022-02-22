
//global variable, for html page, refer tpsvr @ npm.
get_search_part = require("../get-search-part.js");

module.exports = {

	".get_search_part()": function (done) {
		//get_search_part(name [, searchString] )
		done(!(
			get_search_part('a', '?aa=1&a=2') === '2' &&
			get_search_part('aa', '?aa=1&a=2') === '1' &&
			get_search_part('a', '?aa=1&a=2&cc=3') === '2' &&
			get_search_part('d', '?aa=1&a=2&cc=3') === null
		));
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('get_search_part', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
