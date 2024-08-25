import writeF from "./writeFile";

export default async function writeNoteDetails(objects, filePath) {
    console.log("PAth: ", filePath)
    let stringData = "";

    const numSegment = objects.length;
    const lenNumSegment = (numSegment.toString()).length;

    stringData += lenNumSegment.toString() + numSegment;
    for (let i = 0; i < numSegment; i++) {
        // Write segment detail
        numLetters = (objects[i].content).length;
        lenNumLetters = (numLetters.toString()).length;
        stringData += lenNumLetters.toString() + numLetters.toString() + objects[i].content;

        // Write segment style
        numLetters = (objects[i].style.toString()).length;
        lenNumLetters = (numLetters.toString()).length;
        stringData += lenNumLetters.toString() + numLetters.toString() + objects[i].style.toString();
    }

    await writeF(stringData, filePath);
}