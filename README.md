# Node.js Blog API

This is a Node.js API for a blog application. It allows users to create, read, update, and delete blog posts and comments in posts.

## Technologies

* **NodeJS**

#### Libs

* **express**
* **prisma**
* **bcrypt**
* **jsonwebtoken**

## Installation

1. Clone the repository.
```bash
git clone https://github.com/danbsilva/nodejs-blog-api.git
```

2. Run `npm install` to install the dependencies.
```bash
npm install
```

3. Create a .env file and place the variables `DATABASE_URL` and `SECRET`
```config
DATABASE_URL="postgresql://user:pass@host:port/dbname?schema=schema"
SECRET="YOUR_SECRET"
```

4. Run `npm start` to start the server.

## Usage

### Create a new user
Send a POST request to `/users/register` with the following JSON payload:

```json
{
    "name": "Your Name",
    "email": "email@exemplo.com",
    "password": "yourpassword"
}
```

### Authenticate the user
Send a POST request to `/users/login` with the following JSON payload:

```json
{
    "email": "email@exemplo.com",
    "password": "yourpassword"
}
```

Response
```json
{
    "token": "token"
}
```
Use the `token` in the request header

### Create a new blog post

Send a POST request to `/posts` with the following JSON payload:

```json
{
    "title": "My First Blog Post",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
```

### Get all blog posts

Send a GET request to `/posts`.

### Get a specific blog post

Send a GET request to `/posts/{postId}` where `{postId}` is the ID of the blog post.

### Update a blog post

Send a PUT request to `/posts/{postId}` with the following JSON payload:

```json
{
    "title": "Updated Blog Post",
    "content": "New content for the blog post."
}
```

### Delete a blog post

Send a DELETE request to `/posts/{postId}` where `{postId}` is the ID of the blog post.


### Create a new comment in post

Send a POST request to `/posts/{postId}/comments` where `{postId}` is the ID of the blog post.

```json
{
    "comment": "My first comment"
}
```


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
