const wishService = require('./wish.service.js');
const logger = require('../../services/logger.service')

// GET LIST
async function getwishs(req, res) {
  try {
    // var queryParams = req.query;
    const filterBy = req.query;
    console.log('filterBy controller:',filterBy);
    const wishs = await wishService.query(filterBy)
    res.json(wishs);
  } catch (err) {
    logger.error('Failed to get wishs', err)
    res.status(500).send({ err: 'Failed to get wishs' })
  }
}

// GET BY_id
async function getwishById(req, res) {
  try {
    const wishId = req.params.id;
    const wish = await wishService.getById(wishId)
    res.json(wish)
  } catch (err) {
    logger.error('Failed to get wish', err)
    res.status(500).send({ err: 'Failed to get wish' })
  }
}

// POST (add wish)
async function addwish(req, res) {
  try {
    const wish = req.body;
    console.log('***',wish);
    const addedwish = await wishService.add(wish)
    res.json(addedwish)
  } catch (err) {
    logger.error('Failed to add wish', err)
    res.status(500).send({ err: 'Failed to add wish' })
  }
}

// PUT (Update wish)
async function updatewish(req, res) {
  try {
    const wish = req.body;
    console.log('wish:',wish);
    const updatedwish = await wishService.update(wish)
    res.json(updatedwish)
  } catch (err) {
    logger.error('Failed to update wish', err)
    res.status(500).send({ err: 'Failed to update wish' })

  }
}

// DELETE (Remove wish)
async function removewish(req, res) {
  try {
    const wishId = req.params.id;
    const removedId = await wishService.remove(wishId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove wish', err)
    res.status(500).send({ err: 'Failed to remove wish' })
  }
}

module.exports = {
  getwishs,
  getwishById,
  addwish,
  updatewish,
  removewish
}
