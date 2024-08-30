import readF from "./readFile";
import writeF from "./writeFile";

export async function writeFileIndex(fileIndex, filePath) {
    const stringData = fileIndex.toString();
    await writeF(stringData, filePath);
}

export async function readFileIndex(filePath) {
    let stringData = "";

    await readF(filePath)
    .then(data => {
        stringData = data;
        console.log("data:", data)
    });

    if (stringData == null) {
        await writeFileIndex(0, filePath);
        return 0
    }
    
    const fileIndex = parseInt(stringData, 10);
    return fileIndex;
};