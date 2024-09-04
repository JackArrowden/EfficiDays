import writeNotePreview from "../../components/Note/writeNotePreview";
import { fileDir } from "../noteDir";

export const listNote = {
    data: [],
    curFile: 0,
    isReset: false,
    fileID: 0
};

export function getNotePrevs(data) {
    listNote.data = data;
};

export function saveListNote() {
    writeNotePreview(listNote.data, fileDir.curDir);
};

export function getIDFile(filename) {
    const len = listNote.data.length;
    for(let i = 0; i < len; i++) {
        if (listNote.data[i].fileName == filename) return i
    }
    return -1
}