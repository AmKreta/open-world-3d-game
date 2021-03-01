const user = require('./user/user.model');
const friendsList = require('./friendsList/friendList.model');
const blockList = require('./blockList/blockList.model');
const posts = require('./posts/posts.model');
const comment = require('./comment/comment.model');
const likes = require('./likes/likes.model');
const chat = require('./chat/chat.model');
const chatGroups = require('./chatGroups/chatGroups.model');
const group = require('./group/group.model');
const tokens = require('./tokens/tokens.model');


module.exports = { user, friendsList, blockList, posts, comment, likes, chat, chatGroups, group, tokens };