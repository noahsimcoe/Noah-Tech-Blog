const { Comment } = require('../../models');
const router = require('express').Router();

router.post('/', wihtAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id: req.session.post_id,
        });
            res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;