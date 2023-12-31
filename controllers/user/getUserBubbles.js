// const {doc, getDoc} = require('firebase/firestore')
// const {database} = require('../../database/firebase')
// const userBubbles = require('../../models/userBubbles')

async function getUserBubbles(req, res){
    const {userBubbles} = req.dbModels
    
    let userID = req.body.userID

    try{
        const bubbleRef = await userBubbles.findOne({userID}).lean()
        if(bubbleRef){
            res.send({successful: true, bubbles: bubbleRef.bubbles})
        } else {
            res.send({successful: false, message: 'bubbles not found'})
        }
    } catch(e){
        res.send({successful: false, message: 'Server error: unable to get bubbles'})
    }
}

module.exports = getUserBubbles