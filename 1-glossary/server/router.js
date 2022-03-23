const router = require('express').Router();
const controller = require('./controller');

router.get('/api/words', controller.readWords);
router.post('/api/words', controller.saveWord);
// router.patch();
// router.delete();


module.exports = router;