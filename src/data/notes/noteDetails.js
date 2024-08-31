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
    autoFocus: true,
    add: false,
    del: false,
    idAdd: 0,
    idDel: 0
};

export function getNoteDetailInfor(data) {
    noteDetailInfor.data = data
};

export function saveNoteDetailInfor() {
    console.log("Dir", fileDir)
    writeNoteDetails(noteDetailInfor.data, fileDir.fileDir);
};