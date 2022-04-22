import { bags } from "../../../data/bags";

// handler function to get one bag
export default function bagHandler(req, res) {
    // get id     
    let id = req.query.id;
    // find item based on id params
    let bag = bags.find(item => item.id === id);
    if (bag) {
        res.status(200).json(bag);
    } else {
        res.status(400).json("No data found!");
    }
}