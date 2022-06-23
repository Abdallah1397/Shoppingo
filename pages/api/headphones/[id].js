import { headphones } from "../../../data/headphones";

export default function singleHeadphoneHandler(req, res) {
    const id = req.query.id;
    const headphone = headphones.find((item) => item.id === id);

    res.status(200).json(headphone);
}