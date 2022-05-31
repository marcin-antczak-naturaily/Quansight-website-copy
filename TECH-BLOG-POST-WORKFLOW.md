# Technical blog workflow

All of the labs blog posts are located inside `src/apps/labs/posts` and there all new posts should be added. Every post is a `.md` or `.mdx` file. The `posts` directory also contains `categories.json` file where there are all posts categories. The `categories.json` file is also used for displaying category filters on `/blog` page so after adding new category it will also be visible on that page.

For more details about `mdx` please see:

- https://mdxjs.com/
- https://github.com/hashicorp/next-mdx-remote

# Structure of the blog post

Every post is structured with two main sections - the `meta` and `content` section. The `content` section is a body of the post added by markdown. The `meta` section is a `yaml` like structure and should be wrapped with `---` signs. The meta section contains post related informations like:

- `title` - Title of the blog post. Used also as the title of the page inside `<title></title>` tag
- `description` - Description of the blog post. Used inside `<meta name="description" />` tag
- `published` - Publishing date of the blog post. Used also for sorting posts by date.
- `author` - Unique slug of the author (from Storyblok) usually looks like: `jon-doe`. Based on this property blog post page will display proper info about author (and image).
- `category` - Array of categories for example `[Machine Learning]`. All categories should be the same as in the previously mentioned `categories.json` file. Important note: Categories are case sensitive.
- `featuredImage` - Object with properties: `src` and `alt`. The `src` property is a path to featured image which is displayed on the posts list on the`/blog` page. The `alt` property is alternative text for the image. The image should be added to the `src/apps/labs/public/posts/<post-name>` directory, example: `src/apps/labs/public/posts/hello-world-post`. There is no need to provide full image path so the pathname should start with `/posts/`.
- `hero` - Object with properties: `imageSrc` and `imageAlt`. The `imageSrc` property is a path to hero image which is displayed post page. The `imageAlt` property is alternative text for the image. The image should be added to the `src/apps/labs/public/posts/<post-name>` directory, example: `src/apps/labs/public/posts/hello-world-post`. There is no need to provide full image path so the pathname should start with `/posts/`.

### Example of blog post meta section

    ```
    title: This is hello world post!
    author: anirrudh-krishnan
    published: October 14, 2022
    description: Lorem ipsum dolor sit amet
    category: [Machine Learning]
    featuredImage:
    	src: /posts/hello-world-post/featured.png
    	alt: Hello world post featured image
    hero:
    	imageSrc: /posts/hello-world-post/hero.jpeg
    imageAlt: Lorem ipsum dolor
    ```

# Adding new blog post

1.  Create new feature branch. Example `feature/new-hello-world-post`.
2.  Add `.md|.mdx` file inside `src/apps/labs/posts` directory.
3.  Add post feature image inside `src/apps/labs/public/posts/<post-name>`.
4.  Add post hero image inside `src/apps/labs/public/posts/<post-name>`.
5.  Add all of the meta information between `---` inside `.md|.mdx` file.
6.  After `---` add post content
7.  Save file.
8.  Commit and push changes to the repository. For commits please follow the conventional commits format. [See](https://www.conventionalcommits.org/en/v1.0.0/)
9.  Review the pull request and if ok then merge to develop branch.
10. To make the post visible in production there should be merged `develop` branch into the `main` branch. So create Pull request for this and merge.

# Adding new blog category

1.  Create new feature branch.
2.  Open `src/apps/labs/posts/categories.json` file.
3.  Add new category to array.
4.  Save file
5.  Commit and push changes to the repository. For commits please follow the conventional commits format. [See](https://www.conventionalcommits.org/en/v1.0.0/)
6.  Review the pull request and if ok then merge to develop branch.
7.  To make the changes visible in production there should be merged `develop` branch into the `main` branch. So create Pull request for this and merge.

# Adding new components for usage inside `mdx` posts.

1.  Open `src/apps/labs/services/blogAllowedComponents.ts` file
2.  Import component from the codebase
3.  Add to new component to `blogAllowedComponents` object.