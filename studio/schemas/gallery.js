export default {
	name: "photo",
	title: "Photo",
	type: "document",
	fields: [
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
		},
	],

	preview: {
		select: {
			author: "author.name",
			media: "mainImage",
		},
	},
};
