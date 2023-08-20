const { UsuarioService } = require('./../services/usuarioService');
const { UsuarioRepository } = require('./../repository/usuarioRepository');

const UsuarioModel = require('./../schemas/usuario');
const validator = require("email-validator");
 

const usuarioRepository = new UsuarioRepository(UsuarioModel);
const usuarioService = new UsuarioService(usuarioRepository);
require('./../data/usuarioDTO');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const UsuarioDTO = require('./../data/usuarioDTO');

exports.add = async (req, res, next) => {
  try {
      const response = await usuarioService.add(req);
      

    return res.json(response);
  } catch (error) {
    return res.status(400).json({ menssage: error.parent.detail });
  }
};

exports.login = async (req, res, next) => {
  try {
    if (validator.validate(req.body.email)) {
      const response = await usuarioService.login(req);
      const usuario = new UsuarioDTO(response);
      if (response) {
        const validated = await bcrypt.compare(
          req.body.password,
          usuario.password
        );
        if (validated) {
          delete usuario.password;
          const obj = {
            id: usuario.id,
            name: usuario.name,
            email: usuario.email,
          };
          const token = jwt.sign(obj, process.env.TOKEN_SECRET_KEY, {
            expiresIn: "1h",
          });
          return res.json({ ...obj, token });
        } else {
          return res
            .status(400)
            .json({ menssage: "Datos de acceso incorrectos" });
        }
      } else {
        return res.status(400).json({ menssage: "Usuario no existe" });
      }
    } else {
      return res.status(400).json({ menssage: "Email no válido" });
    }
  } catch (error) {
    return res.status(400).json({ menssage: error.parent.detail });
  }
};

exports.list = async (req, res, next) => {
    try {

      const response = await usuarioService.list();
        res.json(response);
  } catch (error) {
    return res.status(400).json({ menssage: error.parent.detail });
  }
};

exports.getById = async (req, res, next) => {
  try {
   
      let response = await usuarioService.getById(req);
      if (response) {
          return res.json(response);
        } else {
          return res.status(400).json();
        }
      
  } catch (error) {
    return res.status(400).json({ menssage: error.parent.detail });
  }
};