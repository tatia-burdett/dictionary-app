import axios from "axios"

async function fetchResult(searchTerm) {
    const config = {
        headers: {
            "X-Api-Key": "teVNI1Hb9cqmxRiTIVnkeQ==vAnflxJEeU3FCRwP"
        }
    }
    const url = `https://api.api-ninjas.com/v1/dictionary?word=${searchTerm}`
    try {
        const response = await axios.get(url, config)
        return response
    }
    catch (error) {
        console.error()
    }
}

export default fetchResult