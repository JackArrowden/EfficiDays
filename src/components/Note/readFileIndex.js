import readF from "./readFile";
import writeF from "./writeFile";

export async function writeFileIndex(fileIndex, filePath) {
    const stringData = fileIndex.toString();
    await writeF(stringData, filePath);
}

export async function readFileIndex(filePath) {
    try {
        const data = await readF(filePath);

        if (data === null || isNaN(data)) {
            await writeFileIndex(0, filePath);
            return 0;
        } else {
            const fileIndex = parseInt(data, 10);
            return fileIndex;
        }
    } catch (error) {
        await writeFileIndex(0, filePath);
        return 0;
    }
}