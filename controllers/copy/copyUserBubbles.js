const { doc, getDoc } = require("firebase/firestore");
const User = require("../../models/User");
const userBubbles = require("../../models/userBubbles");
const { database } = require("../../database/firebase");
const { default: axios } = require("axios");
const baseUrl = require("../../utils/baseUrl");

async function copyUserBubbles(req, res){

    await axios.post(baseUrl("user/getAllUsers")).then(async(response)=>{
        if(response.data.successful){
            let allUsers = [...response.data.users]
            for(let i=0; i<allUsers.length; i++){
                const currentUser = {...allUsers[i]}
                await axios.post(baseUrl("user/initializeUser"), {userID: currentUser.id, startUp: true}).then(async(response)=>{
                    if(response.data.successful){
                        const thisData = {...response.data.data}
                        const bubbles = [...thisData.bubbles]
                        if(thisData.bubbles){
                            const bubs = await userBubbles.findOne({userID: currentUser.id})
                            const num = i+1
                            const progress = (num/allUsers.length)*100
                            if(bubs === null){
                                const newUserBubbles = new userBubbles({userID: currentUser.id, bubbles})
                                await newUserBubbles.save().then(()=>{
                                    console.log(`${progress}% new completed`);
                                }).catch(()=>{
                                    console.log(`${progress}% new failed`);
                                })
                            } else {
                                await userBubbles.updateOne({userID: currentUser.id}, {bubbles}).then(()=>{
                                    console.log(`${progress}% completed`);
                                }).catch(()=>{
                                    console.log(`${progress}% failed`);
                                })
                            }
                        }
                    }
                }).catch(()=>{
                    console.log("failed to initialize");
                })
            }
        }
    }).catch(()=>{
        console.log("failed to get users");
    })



    // const allUsers = await User.find({}).lean()
    // for(let i=0; i<allUsers.length; i++){
    //     const currentUser = {...allUsers[i]}
    //     const docRef = doc(database, "userBubbles", currentUser.id)
    //     await getDoc(docRef).then(async(snapshot)=>{
    //         if(snapshot.exists()){
    //             const thisData = {...snapshot.data()}
    //             const bubbles = [...thisData.bubbles]
    //             if(thisData.bubbles){
    //                 const bubs = await userBubbles.findOne({userID: currentUser.id})
    //                 const num = i+1
    //                 const progress = (num/allUsers.length)*100
    //                 if(bubs === null){
    //                     const newUserBubbles = new userBubbles({userID: currentUser.id, bubbles})
    //                     await newUserBubbles.save().then(()=>{
    //                         console.log(`${progress}% new completed`);
    //                     }).catch(()=>{
    //                         console.log(`${progress}% new failed`);
    //                     })
    //                 } else {
    //                     await userBubbles.updateOne({userID: currentUser.id}, {bubbles}).then(()=>{
    //                         console.log(`${progress}% completed`);
    //                     }).catch(()=>{
    //                         console.log(`${progress}% failed`);
    //                     })
    //                 }
    //             }
    //         }
    //     })
    // }
    console.log("bubbles fully completed");

}

module.exports = copyUserBubbles