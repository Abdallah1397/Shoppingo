import { shirts } from '../../../data/shirts';

export default function shirtsHandler(req, res) {
    res.status(200).json(shirts);
}