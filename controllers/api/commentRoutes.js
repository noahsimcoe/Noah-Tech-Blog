const { Comment } = require('../../models');
const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);

        req.session.save(() => {
            req.session.user_id = commentData.id;
            req.session.post_id = commentData.post_id;
            req.session.logged_in = true;

            res.status(200).json(commentData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;