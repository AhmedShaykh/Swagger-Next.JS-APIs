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
 *        in: query
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
 */

/**
 * @swagger
 * tags: 
 *    - name: Blogs
 *      description: Operations About Blogs
 */