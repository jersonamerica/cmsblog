export type AuthorType = {
	name: string;
	photo: {
		url: string;
	};
	bio: string;
};

export type Category = {
	name: string;
	slug: string;
};

export type Post = {
	title: string;
	excerpt: string;
	slug: string;
	createdAt: string;
	featuredImage: {
		url: string;
	};
	author: AuthorType;
	categories: Array<Category>;
	content: {
		raw: {
			children: Array<Record<string, any>>;
		};
	};
};

export type Comment = {
	name: string;
	email: string;
	createdAt: string;
	comment: string;
};
