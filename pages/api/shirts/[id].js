import { shirts } from "../../../data/shirts";

// get Specific Shirt based on its id
export default function getOneShirt(req, res) {
    // get id params from req.query.id
    const id = req.query.id;
    // get the selected shirt
    const shirt = shirts.find(item => item.id === id);
    if (shirt) {
        res.status(200).json(shirt);
    } else {
        res.status(400).json("No data found!");
    }
}