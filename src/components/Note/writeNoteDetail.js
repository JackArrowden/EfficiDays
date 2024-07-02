import writeF from "./writeFile";

export default async function writeNoteDetails(objects, filePath) {
    let stringData = "";

    const numSegment = objects.length;
    const lenNumSegment = (numSegment.toString()).length;

    stringData += lenNumSegment.toString() + numSegment;
    
    for (let i = 0; i < numSegment; i++) {
        // Write segment detail
        numLetters = (objects[i].segmentDetail).length;
        lenNumLetters = (numLetters.toString()).length;
        stringData += lenNumLetters.toString() + numLetters.toString() + objects[i].segmentDetail;

        // Write segment style
        numLetters = (objects[i].segmentStyle).length;
        lenNumLetters = (numLetters.toString()).length;
        stringData += lenNumLetters.toString() + numLetters.toString() + objects[i].segmentStyle;
        console.log(stringData);
    }

    await writeF(stringData, filePath);
}