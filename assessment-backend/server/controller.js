const goals = require('./db.json')
let globalId = 11

module.exports = {
    getGoals: (req, res) => res.status(200).send(goals),
    deleteGoal: (req, res) => {
        let index = goals.findIndex(elem => elem.id === +req.params.id)
        goals.splice(index, 1)
        res.status(200).send(goals)
    },
    createGoal: (req, res) => {
        let { goal, imageURL, percent, targetDate, tips } = req.body
        let newGoal = {
            id: globalId,
            goal,
            imageURL,
            // percent,
            targetDate,
            tips
        }
        goals.push(newGoal)
        res.status(200).send(goals)
        globalId++
    },
    updateGoal: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = goals.findIndex(elem => +elem.id === +id)

        // if (goals[index].percent === 100 && type === 'plus') {
        //     res.status(400).send("This goal has been completed!")
        // } else if (goals[index].percent === 25 && type === 'minus') {
        //     res.status(400).send('cannot go below 25')
        // } else if (type === 'plus') {
        //     goals[index].percent++
        //     res.status(200).send(goals)
        // } else if (type === 'minus') {
        //     goals[index].percent--
        //     res.status(200).send(goals)
        // } else {
        //     res.sendStatus(400)
        // }
    }
}
