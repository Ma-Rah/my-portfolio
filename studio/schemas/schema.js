// import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

//  import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//  import object and document schemas
import blockContent from "./blockContent";
import post from "./post";
import project from "./project";
import author from "./author";
import gallery from "./gallery";

//  give schema to the builder and provide the result to Sanity
export default createSchema({
	name: "default",
	//  concatenate our document type to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// document types which will appear in the sanity studio.

		post,
		project,
		author,
		gallery,
		// When added to this list, object types can be used as
		// { type: 'typename' } in other document schemas
		blockContent,
	]),
});
