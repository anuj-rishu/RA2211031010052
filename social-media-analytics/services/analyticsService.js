const apiClient = require("../utils/apiClient");

class AnalyticsService {
  async getTopUsers() {
    try {
      const users = await apiClient.getUsers();
      const userPostCounts = [];

      for (const userId of Object.keys(users)) {
        const posts = await apiClient.getPostsByUser(userId);
        userPostCounts.push({
          userId,
          username: users[userId],
          postCount: posts.length,
        });
      }

      return userPostCounts
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 5);
    } catch (error) {
      throw new Error("Error in getTopUsers: " + error.message);
    }
  }

  async getTopPosts(type) {
    try {
      const users = await apiClient.getUsers();
      const allPosts = [];

      for (const userId of Object.keys(users)) {
        const posts = await apiClient.getPostsByUser(userId);
        for (const post of posts) {
          const comments = await apiClient.getCommentsByPost(post.id);
          allPosts.push({
            ...post,
            commentCount: comments.length,
            username: users[userId],
          });
        }
      }

      if (type === "popular") {
        const sortedByComments = allPosts.sort(
          (a, b) => b.commentCount - a.commentCount
        );
        const maxComments = sortedByComments[0]?.commentCount || 0;
        return sortedByComments.filter(
          (post) => post.commentCount === maxComments
        );
      } else if (type === "latest") {
        return allPosts.sort((a, b) => b.id - a.id).slice(0, 5);
      }

      throw new Error("Invalid type parameter");
    } catch (error) {
      throw new Error("Error in getTopPosts: " + error.message);
    }
  }
}

module.exports = new AnalyticsService();
