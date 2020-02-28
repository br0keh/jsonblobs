# :gem: jsonblobs

Javascript Wrapper for JSONBlob API

Create a cloud JSON file, read and edit. SIMPLE AND EASY.


Example

```js
const jsonblob = require("./jsonblob");

(async function() {
    const jb = jsonblobs();

    let blob = await jb.create({ hello: "world" });

    console.log(blob);
    // Object {
    //     id: '68e6117a-5a46-11ea-bd1e-4b1f30fee893',
    //     url: 'https://jsonblob.com/api/jsonBlob/68e6117a-5a46-11ea-bd1e-4b1f30fee893',
    //     data: { hello: 'world' }
    // }

    let update = await jb.update(blob.id, { world: "hello" });

    console.log(update);
    // Object {
    //     id: '68e6117a-5a46-11ea-bd1e-4b1f30fee893',
    //     url: 'https://jsonblob.com/api/jsonBlob/68e6117a-5a46-11ea-bd1e-4b1f30fee893',
    //     new_data: { hello: 'world' }
    // }

    let content = await jb.read(blob.id);

    console.log(content);
    // Object { world: "hello" }
})();
```
