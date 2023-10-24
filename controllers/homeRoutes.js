const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true}));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: err
        });
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });

        const post = postData.get({ plain: true });

        res.render('postpage', {
            ...post,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route
router.get('/post', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
      });
      const postData = await Post.findAll({
        where: {
            user_id: req.session.user_id
        }
      });
      const user = userData.get({ plain: true });
      const posts = postData.map(post => post.get({ plain: true }));

      res.render('post', {
        posts,
        ...user,
        logged_in: true
      });
      console.log(posts);
      console.log(req.session.user_id);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;