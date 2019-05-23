const db = require("../DB");
const Business = require("../models/Business");

// let newEvent = new Event({
//     title: "this is the event 2",
//     description: "omar and manal",
//     location: "they life in taif city",
//     date: Date.now(),
//     createdAt: "2019-1-1"
// });

newEvents = new Business ({
    person_name: "Anguler",
    business_name: "It is a framewark.",
    business_gst_number: 5555
        });


        newEvents.save((err) => {
        if (!err)
            console.log("record was added.");
        else
            console.log(err);
    });