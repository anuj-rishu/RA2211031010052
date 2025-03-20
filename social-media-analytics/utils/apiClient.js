const axios = require('axios');
require('dotenv').config();

const TEST_SERVER_URL = process.env.TEST_SERVER_URL;

const apiClient = {
    async getUsers() {
        try {
            const response = await axios.get(`${TEST_SERVER_URL}/users`);
            return response.data.users;
        } catch (error) {
            throw new Error('Failed to fetch users: ' + error.message);
        }
    },

    async getPostsByUser(userId) {
        try {
            const response = await axios.get(`${TEST_SERVER_URL}/users/${userId}/posts`);
            return response.data.posts;
        } catch (error) {
            throw new Error(`Failed to fetch posts for user ${userId}: ` + error.message);
        }
    },

    async getCommentsByPost(postId) {
        try {
            const response = await axios.get(`${TEST_SERVER_URL}/posts/${postId}/comments`);
            return response.data.comments;
        } catch (error) {
            throw new Error(`Failed to fetch comments for post ${postId}: ` + error.message);
        }
    }
};

module.exports = apiClient;