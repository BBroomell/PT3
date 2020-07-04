const router = require('express').Router();
let ArmyStandard = require('../models/ArmyStandard.model');

router.route('/searchArmyStandard').get((req, res) => {
    var query = { sex: req.body.sex, age: req.body.age};
    ArmyStandard.find(query)
    .then(armystandards => res.json(armystandards))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Only needed to add the standards one time. If needed to add to the database again use this code.
/*router.route('/addArmyStandard').post((req, res) => {
    const sex = req.body.sex;
    const age = req.body.age;
    const pushups = req.body.pushups;
    const situps = req.body.situps;
    const run = req.body.run;

    const newArmyStandard = new ArmyStandard({
        sex,
        age,
        pushups,
        situps,
        run,
    });

    newArmyStandard.save()
    .then(() => res.json('Army Standard added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});*/ 

module.exports = router;