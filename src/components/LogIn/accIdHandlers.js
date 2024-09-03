import readF from "../Note/readFile";
import writeF from "../Note/writeFile";

export async function writeAccId(fileIndex, filePath) {
    const stringData = fileIndex.toString();
    await writeF(stringData, filePath);
}

export async function readAccID(filePath) {
    let stringData = "";

    await readF(filePath)
    .then(data => {
        stringData = data;
    });

    if (stringData == null) {
        await writeAccId(0, filePath);
        return 0
    }
    
    const fileIndex = parseInt(stringData, 10);
    return fileIndex;
};