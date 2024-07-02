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
        let segmentDetail = stringData.substring(readPointer, readPointer + numLetters);
        readPointer += numLetters;

        // Read segment style
        lenNumLetters = parseInt(stringData[readPointer], 10);
        readPointer++;

        numLetters = parseInt(stringData.substring(readPointer, readPointer + lenNumLetters), 10);
        readPointer += lenNumLetters;
        let segmentStyle = stringData.substring(readPointer, readPointer + numLetters);
        readPointer += numLetters;

        // Push to object
        let item = { segmentDetail, segmentStyle };
        objects.push(item);
    }
    return objects;
};