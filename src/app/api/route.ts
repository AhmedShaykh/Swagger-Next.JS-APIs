/**
 * @swagger
 * tags: 
 *    - name: Users
 *      description: Operations about users
 * api/users:
 *   get:
 *     tags:
 *      - Users
 *     description: Returns the hello world
 *     parameters:
 *      - name: objectName
 *        in: query
 *        description: object description
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: API Success!
 *       400:
 *         description: Not Found
 */

/**
 * @swagger
 * api/users:
 *   post:
 *     tags:
 *      - Users
 *     description: Returns the hello world
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                address:
 *                  type: string
 *     responses:
 *       200:
 *         description: API Success!
 *       400:
 *         description: Not Found
 */

/**
 * @swagger
 * api/users/{id}:
 *   put:
 *     tags:
 *      - Users
 *     description: Returns the hello world
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                address:
 *                  type: string
 *     responses:
 *       200:
 *         description: API Success!
 *       400:
 *         description: Not Found
 */

/**
 * @swagger
 * api/users/{id}:
 *   delete:
 *     tags:
 *      - Users
 *     description: Returns the hello world
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                address:
 *                  type: string
 *     responses:
 *       200:
 *         description: API Success!
 *       400:
 *         description: Not Found
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