const Tarea = require('../models/tarea');
const ctrl = {};

ctrl.getTarea = async (req, res) => {

    try {
        const uid = req.user._id;

        if (!uid) {
            res.status(400)({
                msg: 'No se recibio una ID'
            })
        }

        const getTarea = await Tarea.find({ userId: uid })

        res.json(getTarea);

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Ocurrio un fallo'
        })
    }
}


ctrl.postTarea = async (req, res) => {

    try {
        const { title, description } = req.body;
        const uid = req.user._id;

        if (!uid) {
            res.status(400)({
                msg: 'No se recibio la ID'
            })
        }

        if (!title && !description) {
            res.status(400).json({
                msg: 'filas no ingresadas'
            })
        }

        const newTarea = new Tarea({
            title, description, userId: uid
        })

        await newTarea.save();

        res.json({
            msg: 'Tarea creada'
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error al crear la Tarea'
        })
    }


}
ctrl.deleteTarea= async (req , res)=>{
    
}
module.exports = ctrl;