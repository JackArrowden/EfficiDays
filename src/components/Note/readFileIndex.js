import deleteFile from "./deleteFile";
import readF from "./readFile";
import writeF from "./writeFile";

export async function writeFileIndex(fileIndex, filePath) {
    const stringData = fileIndex.toString();
    await writeF(stringData, filePath);
}

export async function readFileIndex(filePath) {
    const stringData = await readF(filePath);
    if (stringData == null) {
        await writeFileIndex(0, filePath);
        return 0
    }
    
    const fileIndex = parseInt(stringData, 10);
    return fileIndex;
};