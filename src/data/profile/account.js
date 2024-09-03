import { fileAccDir } from "../accDir";

export const accInfor = {
    data: [],
    id: 0,
    numTomatoes: 0,
    accountName: "User",
    username: "",
    password: "",
    birthday: "",
    learningTime: 0, // Minute
    listNoteFile: [],
    listTodoFile: [],
    listBoughtItems: [],
    avtTemp: require('../../assets/images//avt.jpg')
};

export function getAccInfor(data) {
    accInfor.data = data
};

export function saveAccInfor() {
    writeNoteDetails(accInfor.data, fileAccDir.fileAccDir); //////// Chua co ham nay
};