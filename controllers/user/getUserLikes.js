// const {doc, getDoc} = require('firebase/firestore')
// const {database} = require('../../database/firebase')
// const LikeModel = require('../../models/LikeModel')

async function getUserLikes(req, res){
    const {LikeModel} = req.dbModels
    
    let userID = req.body.userID

    try{
        const likes = await LikeModel.findOne({userID}).lean()
        if(likes){
            res.send({successful: true, bubbles: likes.bubbles})
        } else {
            res.send({successful: false, message: 'bubbles not found'})
        }
    } catch(e){
        res.send({successful: false, message: 'Server error: unable to get bubbles'})
    }
}

module.exports = getUserLikes