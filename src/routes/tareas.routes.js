const router = require('express').Router();

const {getTarea, postTarea} = require('../controllers/tarea.controller');

const validarJWT = require('../midelware/validarJwt');

router.get('/tarea',validarJWT,  getTarea);

router.post('/tarea', validarJWT, postTarea);


module.exports = router;    