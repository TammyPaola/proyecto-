const RegristoCtrls = {}

const pool = require('../database')

RegristoCtrls.renderRegistro = (req, res) => {
    res.render('pag_principal');
}

RegristoCtrls.registroAdd = async (req,res)=> {
const {altura,edad,sexo,peso}=req.body
const newRegistro={
    altura,
    edad,
    sexo,
    peso,
    usuario:req.user.id
}
await pool.query('INSERT INTO control_nutricion set ?',[newRegistro])
req.flash('Datos Guardados Correctos')
 res.redirect('/Lista');;
}

//lista
RegristoCtrls.renderClientes = async (req, res) => {
    const clientes = await pool.query('SELECT * FROM control_nutricion WHERE usuario = ?', [req.user.id]);
    res.render('lista', {clientes});
}

module.exports = RegristoCtrls