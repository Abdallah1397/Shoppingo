import { bags } from "../../../data/bags"

// handler function to get all bags
export default function bagsHandler(req, res) {
    res.status(200).json(bags);
}