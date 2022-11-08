const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  deleteThought,
  updateFriendList,
  deleteFriend

} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers)
// /api/users/:userId
router.route('/:userId').get(getSingleUser)
router.route('/').post(createUser)
router.route('/:userId').put(updateUser)
router.route('/:userId').delete(deleteUser)
router.route('/:userId/thoughts/:thoughtId').delete(deleteThought);
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(updateFriendList)
router.route('/:userId/friends/:friendId').delete(deleteFriend)
// /api/users/:userId/thoughts/:thoughtId
module.exports = router;
