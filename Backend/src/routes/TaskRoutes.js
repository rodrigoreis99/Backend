const express = require('express'); //importa o express
const router = express.Router(); // importa o router

const TaskController = require('../controller/TaskController'); //importa o task controller
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/', TaskValidation,TaskController.create);
router.put('/:id', TaskValidation,TaskController.update);
router.get('/filter/all/:macaddress',TaskController.all);
router.get('/:id',TaskController.show);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);
router.get('/filter/late/:macaddress',TaskController.late);
router.get('/filter/today/:macaddress',TaskController.today);
router.get('/filter/week/:macaddress',TaskController.week);
router.get('/filter/month/:macaddress',TaskController.month);
router.get('/filter/year/:macaddress',TaskController.year);


module.exports = router;