import * as F from 'expo-file-system';
export let sysDir = F.documentDirectory;
export const fileIndex = sysDir + 'fileIndex.bin';
export let curDir = sysDir + 'listNotePreviews.bin';
export const isNewFile = {
    new: false,
    header: "",
};

// The name of current note file, if users choose a note to modify, or auto-generated if users create a new one
export const noteFile = {
    fileName: ''
};

export const fileDir = {
    fileDir: sysDir + noteFile.fileName + '.bin'
};

export function updateFileDir() {
    fileDir.fileDir = sysDir + noteFile.fileName + '.bin'
};