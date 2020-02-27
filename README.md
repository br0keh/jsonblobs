#  :gem:          jsonblob.js


Example
```js
import jsonblob from "./jsonblob"

const run = async () => {

    const blob = jsonblob()

    await blob.create({ test: 123 })
        // blob_id: String
        // blob_url: String
        // blob_data: Object

    await blob.update("499a77ee-5910-11ea-b72c-71f9bc30f3a5", { test: 1234 })
        // blob_id: String
        // blob_url: String
        // blob_data: Object

    await blob.read("499a77ee-5910-11ea-b72c-71f9bc30f3a5")
        // Object
}

run()
```
