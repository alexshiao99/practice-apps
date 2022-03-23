const router = require('express').Router();
const controller = require('./controller');

router.get('/api/words/:query', controller.readWords);
router.post('/api/words', controller.saveWord);
router.patch('/api/words', controller.patchWord);
router.delete('/api/words/:_id', controller.deleteWord);


module.exports = router;