import { headphones } from '../../../data/headphones';

export default function headphonesHandler(req, res) {
    res.status(200).json(headphones);
}