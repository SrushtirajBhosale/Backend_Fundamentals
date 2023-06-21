const express = require("express");
const router = express.Router();

const Team = require("../models/teams")

router.post("/teams", async (req, res) => {
    try {
        const teamData = new Team (req.body);
        const team = await teamData.save();
        res.status(201).send(team);                           //req fullfilled for creation of new resourse

        // const team = await Team.insertMany(req.body);      // for many documents
        // res.status(201).send(team);
    } catch (error) {
        res.status(400).send(error)                     //server cann't process the req
    }
})


// get team data
router.get("/teams", async (req, res) => {
    try {
        const teamData = await Team.find();
        res.status(200).send(teamData);
    } catch (error) {
        res.status(404).send(error);
    }
    
});


// get team data
router.get("/teams/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const teamData = await Team.findById(_id);
        res.status(200).send(teamData);
    } catch (error) {
        res.status(404).send(error);
    }
    
});


// update team data
router.patch("/teams/:id", async (req, res) => {
    try {
        const _id = req.params.id;
    const updateTeamData = await Team.findByIdAndUpdate(_id, req.body, {new: true});
    res.status(201).send(updateTeamData);
    } catch (error) {
        console.log(error);
    }    
});


router.delete("/teams/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteTeam = await Team.findByIdAndDelete(_id);
        res.send(deleteTeam);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;