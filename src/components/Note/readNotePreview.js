import readF from "./readFile";

export default async function readNotePreview(filePath) {
    let objects = [];
    const stringData = await readF(filePath);
    if (stringData == null) {
        return objects
    }
    
    const lenNumNotes = parseInt(stringData[0], 10);
    let readPointer = lenNumNotes + 1;
    const numNotes = parseInt(stringData.substring(1, readPointer), 10);

    for (let i = 0; i < numNotes; i++) {
        // Read text header
        let lenNumLetters = parseInt(stringData[readPointer], 10);
        readPointer++;

        let numLetters = parseInt(stringData.substring(readPointer, readPointer + lenNumLetters), 10);
        readPointer += lenNumLetters;
        let textHeader = stringData.substring(readPointer, readPointer + numLetters);
        readPointer += numLetters;

        // Read note preview
        lenNumLetters = parseInt(stringData[readPointer], 10);
        readPointer++;

        numLetters = parseInt(stringData.substring(readPointer, readPointer + lenNumLetters), 10);
        readPointer += lenNumLetters;
        let notePreview = stringData.substring(readPointer, readPointer + numLetters);
        readPointer += numLetters;

        // Read note file name
        numLetters = parseInt(stringData[readPointer], 10);
        readPointer++;
        let fileName = stringData.substring(readPointer, readPointer + numLetters);
        readPointer += numLetters;

        // Push to object
        let item = { textHeader, notePreview, fileName };
        objects.push(item);
    }
    return objects;
};