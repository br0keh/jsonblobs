import axios from "axios";

const jsonblob = () => {
    const api = axios.create({
        baseURL: "https://jsonblob.com/api/jsonBlob",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });

    const create = async json_object => {
        let request = await api.post("/", JSON.stringify(json_object));
        if (request.status !== 200)
            throw new Error(`API Response: ${request.status}`);
        let blob_url = request.headers["location"];
        let blob_id = blob_url.replace(
            "https://jsonblob.com/api/jsonBlob/",
            ""
        );
        
        return { blob_id, blob_url, blob_data: request.data };
    };

    const read = async blob_id => {
        let request = await api.get("/" + blob_id);
        if (request.status !== 200)
            throw new Error(`API Response: ${request.status}`);

        return request.data;
    };

    const update = async (blob_id, new_json_object) => {
        let request = await api.put(
            "/" + blob_id,
            JSON.stringify(new_json_object)
        );
        if (request.status !== 200)
            throw new Error(`API Response: ${request.status}`);
        let blob_url = "https://jsonblob.com/api/jsonBlob/" + blob_id;

        return { blob_id, blob_url, new_blob_data: request.data };
    };

    return { create, read, update };
};

export default jsonblob;
