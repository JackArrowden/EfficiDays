import readNotePreview from "../../components/Note/readNotePreview";
import writeNotePreview from "../../components/Note/writeNotePreview";
import { curDir } from "../noteDir";

export const listNote = {
    data: []
};

export function getNotePrevs(data) {
    listNote.data = data;
};

export function saveListNote() {
    writeNotePreview(listNote.data, curDir);
};