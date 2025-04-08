const express = require('express'); //importa o express
const router = express.Router(); // importa o router

const TaskController = require('../controller/TaskController'); //importa o task controller
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/', TaskValidation,TaskController.create);
router.put('/:id', TaskValidation,TaskController.update);


module.exports = router;