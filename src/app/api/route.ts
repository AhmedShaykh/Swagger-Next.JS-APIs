/**
 * @swagger
 * tags: 
 *    - name: Users
 *      description: Operations About Users
 * api/users:
 *   get:
 *     tags:
 *      - Users
 *     summary: Get User
 *     responses:
 *       200:
 *         description: User Fetched Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * api/users:
 *   post:
 *     tags:
 *      - Users
 *     summary: Add User
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       200:
 *         description: User Added Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * api/users/{id}:
 *   put:
 *     tags:
 *      - Users
 *     summary: Update User
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       200:
 *         description: User Updated Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * api/users/{id}:
 *   delete:
 *     tags:
 *      - Users
 *     summary: Delete User
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: User Deleted Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * tags: 
 *    - name: Categories
 *      description: Operations About Categories
  * api/categories?{userId}:
 *   get:
 *     tags:
 *      - Categories
 *     summary: Get Category
 *     responses:
 *       200:
 *         description: Category Fetched Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * api/categories?{userId}:
 *   post:
 *     tags:
 *      - Categories
 *     summary: Add Category
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *                title:
 *                  type: string
 *     responses:
 *       200:
 *         description: Category Added Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * api/categories/{id}?{userId}:
 *   put:
 *     tags:
 *      - Categories
 *     summary: Update Category
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *     responses:
 *       200:
 *         description: Category Updated Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * api/categories/{id}?{userId}:
 *   delete:
 *     tags:
 *      - Categories
 *     summary: Delete Category
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Category Deleted Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * tags: 
 *    - name: Blogs
 *      description: Operations About Blogs
  * api/blogs?{userId}&{categoryId}:
 *   get:
 *     tags:
 *      - Blogs
 *     summary: Get Blogs
 *     responses:
 *       200:
 *         description: Blogs Fetched Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * api/blogs?{userId}&{categoryId}:
 *   post:
 *     tags:
 *      - Blogs
 *     summary: Add Blog
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *                categoryId:
 *                  type: string
 *                title:
 *                  type: string
 *                description:
 *                  type: string
 *     responses:
 *       200:
 *         description: Blog Added Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
  * api/blogs/{id}?{userId}&{categoryId}:
 *   get:
 *     tags:
 *      - Blogs
 *     summary: Get Blog
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Blog Fetched Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * api/blogs/{id}?{userId}&{categoryId}:
 *   put:
 *     tags:
 *      - Blogs
 *     summary: Update Blog
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                description:
 *                  type: string
 *     responses:
 *       200:
 *         description: Blog Updated Successfully!
 *       400:
 *         description: Error 404
 */

/**
 * @swagger
 * api/blogs/{id}?{userId}&{categoryId}:
 *   delete:
 *     tags:
 *      - Blogs
 *     summary: Delete Blog
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Blog Deleted Successfully!
 *       400:
 *         description: Error 404
 */