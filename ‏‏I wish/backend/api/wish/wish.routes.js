const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getwishs, getwishById, addwish, updatewish, removewish, addReview } = require('./wish.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/',log, getwishs)
router.get('/:id', getwishById)
router.post('/',addwish)
router.put('/:id',requireAuth,requireAdmin,updatewish)
router.delete('/:id',requireAuth,requireAdmin,removewish)

module.exports = router

//requireAuth,requireAdmin