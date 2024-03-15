document.addEventListener("DOMContentLoaded", () => {
    // Task 1
    {
        const deepFreeze = (obj) => {
            Object.freeze(obj);
            Object.values(obj).forEach(value => {
                if (value && typeof value === 'object' && !Object.isFrozen(value)) {
                    deepFreeze(value);
                }
            });
        };
        
        const fileSystem = {
            name: "root",
            type: "folder",
            children: [
                {
                    name: "folder1",
                    type: "folder",
                    children: [
                        { name: "file1.txt", type: "file" },
                        { name: "file2.txt", type: "file" }
                    ]
                },
                {
                    name: "folder2",
                    type: "folder",
                    children: [
                        { name: "file3.txt", type: "file" }
                    ]
                }
            ]
        };
        
        deepFreeze(fileSystem);
        
        // test
        // fileSystem.name = "newName";
        // fileSystem.children[0].name = "newName";
        // console.log(fileSystem)
    }
});
   