const watchBotActivityStream = require("./watchBotActivityStream")
const watchBotStream = require("./watchBotStream")
const watchBubblesForEveryoneStream = require("./watchBubbleForEveryoneStream")
const watchBubbleStream = require("./watchBubbleStream")
const watchChatsStream = require("./watchChatsStream")
const watchFollowerStream = require("./watchFollowerStream")
const watchFollowingtream = require("./watchFollowingStream")
const watchNotificationStream = require("./watchNotificationStream")
const watchSavedAudienceStream = require("./watchSavedAudienceStream")
const watchUserBubblesStream = require("./watchUserBubblesStream")
const watchUserFeedsStream = require("./watchUserFeedsStream")
const watchUserLikesStream = require("./watchUserLikesStream")
const watchUserRepliesStream = require("./watchUserRepliesStream")
const watchUserShareStream = require("./watchUserShareStream")
const watchUserStream = require("./watchUserStream")

function watchAllStreams(models){
    console.log("starting to watch");
    watchBotActivityStream(models)
    watchBotStream(models)
    watchUserFeedsStream(models)
    watchBubbleStream(models)
    watchBubblesForEveryoneStream(models)
    watchNotificationStream(models)
    watchUserLikesStream(models)
    watchUserRepliesStream(models)
    watchUserShareStream(models)
    watchUserStream(models)
    watchChatsStream(models)
    watchUserBubblesStream(models)
    
    watchSavedAudienceStream(models)
    watchFollowerStream(models)
    watchFollowingtream(models)
    console.log("watching...");
}

module.exports = watchAllStreams