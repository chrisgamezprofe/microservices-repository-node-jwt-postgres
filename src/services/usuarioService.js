const UsuarioDTO = require('./../data/usuarioDTO');
const bcrypt = require('bcrypt');

require('./../data/usuarioDTO');
class UsuarioService {
  constructor(usuarioRepository) {
    this.repository = usuarioRepository;
  }

  async add(req) {
    const data = new UsuarioDTO(req.body);
    data.password = await bcrypt.hash(data.password, 10);
    let usuario = await this.repository.add(data);
    usuario = new UsuarioDTO(usuario);
    usuario.password = "************************";
    return usuario;
  }

  async login(req) {
    const data = new UsuarioDTO(req.body);
    const usuario = await this.repository.login(data);
    return usuario;
  }

  async list() {
    let usuarios = await this.repository.list();
    usuarios = usuarios.map((u) => {
      u.password = "***************";
      u = new UsuarioDTO(u);
      return u;
    });
    return usuarios;
  }

  async getById(req) {
    const data = new UsuarioDTO({id:req.param("id")});
      let usuario = await this.repository.getById(data);
      usuario.password = "********"
      usuario = new UsuarioDTO(usuario);
    return usuario;
  }
}
module.exports = {
  UsuarioService,
};