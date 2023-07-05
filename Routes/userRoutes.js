const express = require('express')

const {createUser,deleteUser,getAllUser,singleUser,updateSingle,getById,getByAge} = require('../controller/userController')

const router = express.Router()

router.get('/', getAllUser)
router.post('/', createUser)
router.get('/:id', singleUser)
router.patch('/:id', updateSingle)
router.delete('/:id', deleteUser)
router.get('/:id', getById)
router.get('/', getByAge)

module.exports = router;