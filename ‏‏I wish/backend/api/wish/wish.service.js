const dbService = require("../../services/db.service");
const logger = require("../../services/logger.service");
const ObjectId = require("mongodb").ObjectId;

async function query(filterBy) {
  try {
    const criteria = _buildCriteria(filterBy);
    // const criteria = {}
    console.log("query:", criteria);
    const collection = await dbService.getCollection("wish");
    var wishs = await collection.find(criteria).toArray();
    
    console.log('wishs',wishs);
    return wishs;
  } catch (err) {
    logger.error("cannot find wishs in service", err);
    throw err;
  }
}

function _buildCriteria(filterBy) {
  console.log("_buildCriteria(filterBy):", filterBy);
  const criteria = {};
  if (filterBy.wishName) {
      const regTxt = { $regex: filterBy.wishName, $options: 'i' }
      criteria.name = regTxt
  }
  if (filterBy.inStock === "in stock") {
    criteria.inStock = { $eq:true };
  }
  if (filterBy.inStock === "out of stock") {
    criteria.inStock = { $eq: false};
  }
  if (filterBy.labels) {
      if (filterBy.labels==='All')return
          criteria.labels = filterBy.labels;
      }

  console.log("criteria", criteria);
  return criteria;
}
// function sort(){if (filter.status) {
//     const { status } = filter;
//     if (status === 'name') {
//         wishs.sort((a, b) => a.name.localeCompare(b.name))
//     }
//     if (status === 'price') {
//         wishs.sort((a, b) => a.price - b.price)
//     }
//     if (status === 'created') {
//         wishs.sort((a, b) => b.createdAt - a.createdAt);
//     }
// }}

async function getById(wishId) {
  try {
    console.log(wishId);
    const collection = await dbService.getCollection("wish");
    const wish = collection.findOne({ _id: ObjectId(wishId) });
    return wish;
  } catch (err) {
    logger.error(`while finding wish ${wishId}`, err);
    throw err;
  }
}

async function remove(wishId) {
  try {
    const collection = await dbService.getCollection("wish");
    await collection.deleteOne({ _id: ObjectId(wishId) });
    return wishId;
  } catch (err) {
    logger.error(`cannot remove wish ${wishId}`, err);
    throw err;
  }
}

async function add(wish) {
  try {
    const collection = await dbService.getCollection("wish");
    const addedwish = await collection.insertOne(wish);
    return addedwish;
  } catch (err) {
    logger.error("cannot insert wish", err);
    throw err;
  }
}
async function update(wish) {
  try {
    var id = ObjectId(wish._id);
    delete wish._id;
    const collection = await dbService.getCollection("wish");
    await collection.updateOne({ _id: id }, { $set: { ...wish } });
    return wish;
  } catch (err) {
    logger.error(`cannot update wish ${wishId}`, err);
    throw err;
  }
}

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
};
