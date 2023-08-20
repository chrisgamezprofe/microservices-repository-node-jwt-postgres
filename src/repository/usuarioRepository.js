
class UsuarioRepository {
  constructor(model) {
    this.usuarioModel = model;
  }

  add(usuario) {
    return this.usuarioModel.create(usuario);
  }

  login(usuario) {
    return this.usuarioModel.findOne({
      where: {
        email: usuario.email,
      },
    });
  }

  list() {
    return this.usuarioModel.findAll();
  }

  getById(usuario) {
    return this.usuarioModel.findOne({
      where: {
        id: usuario.id,
      },
    });
  }
}

module.exports={
    UsuarioRepository
}