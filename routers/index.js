var express = require('express'),
    file1   = require('../controllers/file1'),
    file2   = require('../controllers/file2'),
    file3   = require('../controllers/file3'),
    create  = require('../controllers/create'),
    read    = require('../controllers/read'),
    readall = require('../controllers/readall'),
    update  = require('../controllers/update'),
    del     = require('../controllers/del'),
    err     = require('../controllers/err'),
    router  = express.Router();

router.route('/').get(file1);
router.route('/about').get(file2);
router.route('/photo').get(file3);
router.route('/form')
    .post(create)
    .get(readall);
router.route('/form/:id')
    .get(read)
    .put(update)
    .delete(del);
router.route('*').get(err);

module.exports = router;