// const {doc, getDoc, updateDoc} = require('firebase/firestore')
// const {database} = require('../../database/firebase')
// const botActivities = require('../../models/botActivities')

async function deleteBotActivity(req, res){
    const {botActivities} = req.dbModels
    
    const userID = req.body.userID
    const activityID = req.body.activityID

    // console.log("test");
    // console.log("test");

    const userBotActivites = await botActivities.findOne({userID}).lean()
    if(!userBotActivites){
        res.send({successful: false, message: "activity not found in database"})
        return
    }

    for(let i=0; i<userBotActivites.otherBotActivities.length; i++){
        if(userBotActivites.otherBotActivities[i].activityID === activityID){
            userBotActivites.otherBotActivities.splice(i, 1)
        }
    }

    for(let i=0; i<userBotActivites.userBotActivities.length; i++){
        if(userBotActivites.userBotActivities[i].activityID === activityID){
            userBotActivites.userBotActivities.splice(i, 1)
        }
    }
    await botActivities.updateOne({userID}, {
        userBotActivities: [...userBotActivites.userBotActivities],
        otherBotActivities: [...userBotActivites.otherBotActivities]
    }).then(()=>{
    // await userBotActivites.save().then(()=>{
        res.send({successful: true})
    }).catch(()=>{
        res.send({successful: false, message: "activity not saved"})
    })
}

module.exports = deleteBotActivity