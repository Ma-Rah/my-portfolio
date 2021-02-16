export default {
	name: "photo",
	title: "Photo",
	type: "document",
	fields: [
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			// options: {
			// 	hotspot: true,
			// },
		},
	],

	preview: {
		select: {
			author: "author.name",
			media: "mainImage",
		},
	},
};
