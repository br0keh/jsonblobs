#  :gem:          jsonblob.js


Example
```js
import jsonblob from "./jsonblob"

const run = async () => {

    const blob = jsonblob()

    let json = await blob.create({ test: 123 })
        // blob_id: String
        // blob_url: String
        // blob_data: Object

    await blob.update(json.blob_id, { test: 1234 })
        // blob_id: String
        // blob_url: String
        // blob_data: Object

    let content = await blob.read(json.blob_id)
        // Object
}

run()
```
