import { sysDir } from "./noteDir";

export const accId = sysDir + 'accId.bin';
export let listAccsDirs = sysDir + 'listAccs.bin';

export const listAccReset = {
    isReset1: false,
    isReset2: false
};

export const accFile = {
    fileName: ''
};

export const fileAccDir = {
    fileAccDir: sysDir + accFile.fileName + '.bin'
};

export function updateFileAccDir() {
    fileAccDir.fileAccDir = sysDir + accFile.fileName + '.bin'
};