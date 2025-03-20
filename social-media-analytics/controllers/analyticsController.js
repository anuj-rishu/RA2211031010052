const analyticsService = require('../services/analyticsService');

class AnalyticsController {
    async getTopUsers(req, res, next) {
        try {
            const topUsers = await analyticsService.getTopUsers();
            res.json(topUsers);
        } catch (error) {
            next(error);
        }
    }

    async getTopPosts(req, res, next) {
        try {
            const { type } = req.query;
            if (!type || !['popular', 'latest'].includes(type)) {
                return res.status(400).json({ error: 'Invalid or missing type parameter. Must be "popular" or "latest"' });
            }

            const topPosts = await analyticsService.getTopPosts(type);
            res.json(topPosts);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AnalyticsController();