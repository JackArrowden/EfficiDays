import readNoteDetails from "../../components/Note/readNoteDetails";
import writeNoteDetails from "../../components/Note/writeNoteDetail";
import { fileDir } from "../noteDir";

export const noteDetailInfor = {
    data: [],
    isRefresh: false,
    id: 0,
    stopOverride: false,
};

export function getNoteDetailInfor(data) {
    noteDetailInfor.data = data
};

export function saveNoteDetailInfor() {
    writeNoteDetails(noteDetailInfor.data, fileDir.fileDir);
};