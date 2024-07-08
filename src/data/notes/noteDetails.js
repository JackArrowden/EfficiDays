import readNoteDetails from "../../components/Note/readNoteDetails";
import writeNoteDetails from "../../components/Note/writeNoteDetail";
import { fileDir } from "../noteDir";

export const noteDetailInfor = {
    data: [],
    id: -1,
    isAddNew: false,
    stopOverride: false,
    reset: 0, // When this variable equal the number of segments, the setText function will be stopped
    update: true,
    autoFocus: true
};

export function getNoteDetailInfor(data) {
    noteDetailInfor.data = data
};

export function saveNoteDetailInfor() {
    writeNoteDetails(noteDetailInfor.data, fileDir.fileDir);
};