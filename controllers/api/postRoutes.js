const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// POST ROUTE - Create one post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE ROUTE - Delete one post
router.delete('/:id', withAuth, async (req, res) => {
    try {
      await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });

      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }

      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// GET ROUTE - Find all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.status(200).json(postData);
    }
    catch (err) {
        res.status(500).json(err);
    }
  });

module.exports = router;