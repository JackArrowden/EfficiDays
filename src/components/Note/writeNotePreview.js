import writeF from "./writeFile";

export default async function writeNotePreview(objects, filePath) {
    let stringData = "";

    numNotes = objects.length;
    const lenNumNotes = (numNotes.toString()).length;

    stringData += lenNumNotes.toString() + numNotes;
    
    for (let i = 0; i < numNotes; i++) {
        // Write text header
        let numLetters = (objects[i].textHeader).length;
        let lenNumLetters = (numLetters.toString()).length;
        stringData += lenNumLetters.toString() + numLetters.toString() + objects[i].textHeader;

        // Write note preview
        numLetters = (objects[i].notePreview).length;
        lenNumLetters = (numLetters.toString()).length;
        stringData += lenNumLetters.toString() + numLetters.toString() + objects[i].notePreview;

        // Write note file name
        numLetters = (objects[i].fileName).length;
        stringData += numLetters.toString() + objects[i].fileName;
        console.log(stringData);
    }

    await writeF(stringData, filePath);
}