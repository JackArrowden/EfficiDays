import * as F from 'expo-file-system';
export let sysDir = F.documentDirectory;

export const isNewFile = {
    new: false,
    header: "",
};

// The name of current note file, if users choose a note to modify, or auto-generated if users create a new one
export const noteFile = {
    fileName: '',
    curDir: '',
    fileIndex: '',
};

export const fileDir = {
    fileDir: sysDir + noteFile.fileName + '.bin',
    curDir: sysDir + noteFile.curDir + '.bin',
    fileIndex: sysDir + noteFile.fileIndex + '.bin'
};

export function updateFileDir() {
    fileDir.fileDir = sysDir + noteFile.fileName + '.bin';
    fileDir.curDir = sysDir + noteFile.curDir + '.bin';
    fileDir.fileIndex = sysDir + noteFile.fileIndex + '.bin';
};