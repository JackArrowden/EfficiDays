import readF from "./readFile";

export default async function readNoteDetails(filePath) {
    let objects = [];
    const stringData = await readF(filePath);
    if (stringData == null) {
        return objects
    }
    
    const lenNumSegments = parseInt(stringData[0], 10);
    let readPointer = lenNumSegments + 1;
    const numSegments = parseInt(stringData.substring(1, readPointer), 10);

    for (let i = 0; i < numSegments; i++) {
        // Read detail segment i
        let lenNumLetters = parseInt(stringData[readPointer], 10);
        readPointer++;

        let numLetters = parseInt(stringData.substring(readPointer, readPointer + lenNumLetters), 10);
        readPointer += lenNumLetters;
        let content = stringData.substring(readPointer, readPointer + numLetters);
        readPointer += numLetters;

        // Read segment style
        lenNumLetters = parseInt(stringData[readPointer], 10);
        readPointer++;

        numLetters = parseInt(stringData.substring(readPointer, readPointer + lenNumLetters), 10);
        readPointer += lenNumLetters;
        let style = parseInt(stringData.substring(readPointer, readPointer + numLetters), 10);
        readPointer += numLetters;

        // Push to object
        let item = { content, style };
        objects.push(item);
    }
    return objects;
};