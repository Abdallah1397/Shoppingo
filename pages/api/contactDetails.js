import { contactData } from '../../data/contactDetails'

// Create Request
export default function handlerRequest(req, res) {
    if (req.method === "POST") {
        const values = req.body.values;
        const newContatDetails = {
            id: Date.now(),
            ...values,
        };
        contactData.push(newContatDetails);
        res.status(200).json(newContatDetails);
    } else {
        res.status(200).json(contactData);
    }
}