# Blog Post Repository Guidelines

This repository is designed to serve as an endpoint for a blog application built with React. Each blog post is organized in a specific structure and requires adherence to the following guidelines for pull requests (PRs) to be successfully merged.

## Directory Structure

- `blogpost/`
  - Each folder within this directory represents a blog post.
  - Folder name should match the `folder` property specified in `posts.json`.
  - Each folder contains:
    - `post.md`: The markdown file with the content of the blog post.
    - Optional images: Used in the blog post, such as `banner.png`.

- `posts.json`
  - A JSON file in the root directory that contains metadata for all blog posts.

## `posts.json` Format

The `posts.json` file must adhere to the following structure:

```json
{
  "posts": [
    {
      "title": "Post Title",
      "folder": "folder-name",
      "cover_image": "banner.png",
      "author": {
        "avatar": "avatar.bmp",
        "name": "Author Name",
        "email": "author@example.com",
        "url": "https://github.com/author"
      },
      "tags": ["tag1", "tag2"],
      "description": "A brief description of the post.",
      "date": "YYYY-MM-DD"
    }
  ]
}
```

### Required Fields
- `title`: The title of the post.
- `folder`: The folder name in `blogpost/` corresponding to this post.
- `cover_image`: The file name of the cover image within the post folder.
- `author`:
  - `avatar`: The file name of the author's avatar image.
  - `name`: The author's name.
  - `email`: The author's email.
  - `url`: A URL to the author's profile or website.
- `tags`: An array of tags related to the post.
- `description`: A brief description of the post.
- `date`: The publication date in `YYYY-MM-DD` format.

### Example

```json

    {
            "title": "How to install MaddonsManager",
            "folder": "maddonsmanager",
            "cover_image": "banner.png",
            "author": {
                "avatar": "avatar.bmp",
                "name": "Jeff aka Sitoz",
                "email": "sitoz@test.com",
                "url": "https://github.com/PentSec"
            },
            "tags": ["maddons", "guide"],
            "description": "A guide to install MaddonsManager",
            "date": "2024-12-25"
        }

```

## Contribution Workflow

### Pull Request Requirements
1. Ensure your changes adhere to the directory structure and `posts.json` format.
2. Run validation checks locally to confirm compliance.
3. Include meaningful commit messages and a detailed PR description.

### Automated Validation
This repository includes a GitHub Actions workflow that runs the following checks on every PR:
- Validate the structure and format of `posts.json`.
- Confirm that all referenced files (e.g., `post.md`, `banner.png`) exist in the correct folders.
- Lint and validate the Markdown in `post.md` files.

By following these guidelines and utilizing, you can ensure a smooth contribution process and maintain a consistent structure in the blog repository.

