authenticateToken = require('../middlewares/auth.js')

const authTp = async (req, res) => {
    try {
        const user = req.user;
        //Crear el token JWT con los datos del usuario.
        const accessToken = jwt.sign(user.toJSON(), process.env.JWT_SECRET_KEY, {expiresIn:"15m"})   
        //Enviar respuesta al cliente con el access_token
        res.cookie("access_token", accessToken);
        return  res.redirect("/")
    } 
    catch (error) {
        return   res.status(500).json({ error: 'Ha ocurrido un error.' });
        }
}



module.exports = { authTp } 