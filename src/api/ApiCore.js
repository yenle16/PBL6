// import axios from "axios";
// const BASE_URL = 'http://localhost:3000'
// const config = {
//     headers: {
//         'Content-Type': 'application/json',
//     },
// };
export const SampleApi = async (data) => {
    // const response = await axios.post(`${BASE_URL}`, JSON.stringify(data), config);
    // return response
    const response = {
        message: 'Sample response'
    }
    return response;
}
