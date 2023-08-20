class UsuarioDTO{
    id;
    name;
    email;
    password;

    constructor(data) {
        this.id = data?.id;
        this.name = data?.name;
        this.email = data.email;
        this.password = data.password;
    }
}
module.exports = UsuarioDTO