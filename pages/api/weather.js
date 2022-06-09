export default function handler(req, res) {
    if (req.method === 'GET') {
        // We need the ZIP code.
        const query = req.query;
        const { zip } = query;

        const axios = require('axios').default;
    } else {
        // We do not take any other requests.
        res.status(405).json({ error: 'Method Not Allowed' })
    }
}