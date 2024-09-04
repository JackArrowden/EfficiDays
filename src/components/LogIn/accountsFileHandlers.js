import writeF from "../Note/writeFile";
import readF from "../Note/readFile";

export async function writeListAccs(objects, filePath) {
    let stringData = "";

    const numAccs = objects.length;
    const lenNumAccs = (numAccs.toString()).length;

    stringData += lenNumAccs.toString() + numAccs;
    for (let i = 0; i < numAccs; i++) {
        // Write Acc detail
        let numLetters = (objects[i].username).length;
        let lenNumLetters = (numLetters.toString()).length;
        stringData += lenNumLetters.toString() + numLetters.toString() + objects[i].username;

        // Write Acc style
        numLetters = (objects[i].password).length;
        lenNumLetters = (numLetters.toString()).length;
        stringData += lenNumLetters.toString() + numLetters.toString() + objects[i].password;

        // Write acc file name
        numLetters = (objects[i].fileName).length;
        stringData += numLetters.toString() + objects[i].fileName;
    }

    await writeF(stringData, filePath);
}

export async function readListAccs(filePath) {
    let listAccs = [];
    const stringData = await readF(filePath);
    if (stringData == null) {
        return listAccs;
    }
    
    const lenNumAccs = parseInt(stringData[0], 10);
    let readPointer = lenNumAccs + 1;
    const numAccs = parseInt(stringData.substring(1, readPointer), 10);

    for (let i = 0; i < numAccs; i++) {
        // Read username Acc i
        let lenNumLetters = parseInt(stringData[readPointer], 10);
        readPointer++;

        let numLetters = parseInt(stringData.substring(readPointer, readPointer + lenNumLetters), 10);
        readPointer += lenNumLetters;
        let username = stringData.substring(readPointer, readPointer + numLetters);
        readPointer += numLetters;

        // Read password Acc i
        lenNumLetters = parseInt(stringData[readPointer], 10);
        readPointer++;

        numLetters = parseInt(stringData.substring(readPointer, readPointer + lenNumLetters), 10);
        readPointer += lenNumLetters;
        let password = stringData.substring(readPointer, readPointer + numLetters);
        readPointer += numLetters;

        // Read acc file name
        numLetters = parseInt(stringData[readPointer], 10);
        readPointer++;
        let fileName = stringData.substring(readPointer, readPointer + numLetters);
        readPointer += numLetters;

        // Push to object
        let acc = { username, password, fileName };
        listAccs.push(acc);
    }
    return listAccs;
};