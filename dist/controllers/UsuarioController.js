"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await _Usuario2.default.create(req.body);
      const { id, nome, email } = novoUsuario;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const usuarios = await _Usuario2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(usuarios);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const usuario = await _Usuario2.default.findByPk(req.params.id);

      const { id, nome, email } = usuario;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const usuario = await _Usuario2.default.findByPk(req.usuarioId);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await usuario.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Delete

  async delete(req, res) {
    try {
      const usuario = await _Usuario2.default.findByPk(req.usuarioId);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await usuario.destroy();

      return res.json(null);
    } catch (e) {
      return res.json(null);
    }
  }
}

exports. default = new UsuarioController();
