
// get-search-part @ npm, get part value by name from window.location.search.

//get_search_part(name [, searchString] )
module.exports = function (name, searchString) {
	if (!searchString) searchString = window.location.search;

	if (typeof URLSearchParams === "function") return (new URLSearchParams(searchString)).get(name);

	var mr = searchString.match(new RegExp("(^|\\?|\\&)" + name + "\\=([^\\&]*)($|\\&)"));
	return mr && mr[2];
};
