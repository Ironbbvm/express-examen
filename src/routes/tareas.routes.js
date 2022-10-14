const router = require('express').Router();

const {getTarea, postTarea, deleteTarea, updateTarea} = require('../controllers/tarea.controller');

const validarJWT = require('../midelware/validarJwt');

router.get('/tarea',validarJWT,  getTarea);

router.post('/tarea', validarJWT, postTarea);

router.delete("/tarea/:id", validarJWT, deleteTarea)

router.put("/tarea/:id", validarJWT, updateTarea)

module.exports = router;    