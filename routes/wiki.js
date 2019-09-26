const express = require('express');

const router = express.Router();

const { addPage } = require('../views');
const { main } = require('../views');
const { Page } = require('../models');

router.get('/', (req, res, next) => {
  res.send(main());
});

router.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    name: req.body.name,
    email: req.body.email,
    status: req.body.status,
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
