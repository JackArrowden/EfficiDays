import writeNotePreview from "../../components/Note/writeNotePreview";
import { curDir } from "../noteDir";

export const listNote = {
    data: [],
    curFile: 0,
    isReset: false
};

export function getNotePrevs(data) {
    listNote.data = data;
};

export function saveListNote() {
    writeNotePreview(listNote.data, curDir);
    listNote.isReset = true
};

export function getIDFile(filename) {
    const len = listNote.data.length;
    for(let i = 0; i < len; i++) {
        if (listNote.data[i].fileName == filename) return i
    }
    return -1
}