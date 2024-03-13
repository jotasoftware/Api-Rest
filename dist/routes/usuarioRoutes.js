"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UsuarioController = require('../controllers/UsuarioController'); var _UsuarioController2 = _interopRequireDefault(_UsuarioController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir
router.get('/', _UsuarioController2.default.index); // Obter usuario
router.get('/:id', _UsuarioController2.default.show);

// Deve existir
router.post('/', _loginRequired2.default, _UsuarioController2.default.store); // Criar usuario
router.put('/', _loginRequired2.default, _UsuarioController2.default.update);
router.delete('/', _loginRequired2.default, _UsuarioController2.default.delete);

exports. default = router;
