let express = require('express');
let router = express.Router();
let { create, get,  update,deleteEmployee } = require('./index');

router.post('/', (req,res) => create(req.body,res));
router.get('/', (req,res) =>  get(req.query.id,res));
router.patch('/', (req,res) =>  update(req.query.id, req.body,res));
router.delete('/', (req,res) =>  deleteEmployee(req.query.id,res));

module.exports = router;
