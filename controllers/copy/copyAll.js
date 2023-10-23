const copyUser = require("./copyUsers")
const copyUserBubbles = require('./copyUserBubbles')
const copyUserReplies = require('./copyUserReplies')
const copyUserShares = require('./copyUserShares')
const copyUserFeed = require('./copyUserFeed')
const copyUserLikes = require('./copyUserLikes')
const copyBotActivities = require("./copyBotActivities")
const copyBots = require("./copyBots")
const copyBubbles = require("./copyBubbles")
const copyBubblesForEveryone = require("./copyBubblesForEveryone")
const copyChats = require("./copyChats")
const copyNotifications = require("./copyNotifications")
const copySavedSubscription = require("./copySavedSubscription")
const copyUsageAnalytics = require("./copyUsageAnalytics")
const copyUserAudience = require("./copyUserAudience")
const copyUserFollowers = require("./copyUserFollowers")
const copyUserFollowings = require("./copyUserFollowings")

async function copyAll(){
    // USE PRODUCTION
    // await copyUser()
    // await copyUserFeed()
    // await copyUserLikes()
    // await copyUserShares()
    // await copyUserReplies()
    // await copyUserBubbles()
    // await copyBotActivities()
    // await copyBots()
    // await copyNotifications()
    // await copyChats()
    // await copyBubblesForEveryone()
    

    // BE CAREFUL
    // await copyUserAudience()
    // await copyUserFollowers()
    // await copyUserFollowings()


    // USE LOCALHOST IN PRODUCTION
    // await copyBubbles()
    // await copySavedSubscription()
    // await copyUsageAnalytics()

}

module.exports = copyAll