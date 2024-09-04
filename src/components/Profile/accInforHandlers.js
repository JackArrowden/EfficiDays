import readF from "../Note/readFile";
import writeF from "../Note/writeFile";
import { accInfor } from "../../data/profile/account";

export async function writeAccInfor(filePath) {
    let stringData = "";
    
    // ID
    let curLen = accInfor.id.toString().length;
    stringData += curLen.toString() + accInfor.id.toString();

    // Number of tomatoes
    let numLetters = accInfor.numTomatoes.toString().length.toString();
    curLen = numLetters.toString().length;
    stringData += curLen.toString() + numLetters + accInfor.numTomatoes.toString();
    
    // Account name
    numLetters = accInfor.accountName.length.toString();
    curLen = numLetters.toString().length;
    stringData += curLen.toString() + numLetters + accInfor.accountName;
    
    // User name
    numLetters = accInfor.username.length.toString();
    curLen = numLetters.toString().length;
    stringData += curLen.toString() + numLetters + accInfor.username;
    
    // Password
    numLetters = accInfor.password.length.toString();
    curLen = numLetters.toString().length;
    stringData += curLen.toString() + numLetters + accInfor.password;
    
    // Birthday
    numLetters = accInfor.birthday.length.toString();
    curLen = numLetters.toString().length;
    stringData += curLen.toString() + numLetters + accInfor.birthday;
    
    // Learning time
    numLetters = accInfor.learningTime.toString().length.toString();
    curLen = numLetters.toString().length;
    stringData += curLen.toString() + numLetters + accInfor.learningTime.toString();
    
    // List file notes
    let numFiles = accInfor.listNoteFile.length;
    curLen = numFiles.toString().length;
    stringData += curLen.toString() + numFiles.toString();
    
    for (let i = 0; i < numFiles; i++) {
        numLetters = accInfor.listNoteFile[i].toString().length.toString();
        stringData += numLetters + accInfor.listNoteFile[i].toString();
    }

    // List file todo
    numFiles = accInfor.listTodoFile.length;
    curLen = numFiles.toString().length;
    stringData += curLen.toString() + numFiles.toString();
    
    for (let i = 0; i < numFiles; i++) {
        numLetters = accInfor.listTodoFile[i].toString().length.toString();
        stringData += numLetters + accInfor.listTodoFile[i].toString();
    }

    // List bought items
    numFiles = accInfor.listBoughtItems.length;
    curLen = numFiles.toString().length;
    stringData += curLen.toString() + numFiles.toString();
    
    for (let i = 0; i < numFiles; i++) {
        numLetters = accInfor.listBoughtItems[i].toString().length.toString();
        stringData += numLetters + accInfor.listBoughtItems[i].toString();
    }

    await writeF(stringData, filePath);
}

export async function readAccInfor(filePath) {
    const stringData = await readF(filePath);

    if (stringData == null) return;
    
    // ID
    let curLen = parseInt(stringData[0], 10);
    let readPointer = curLen + 1;
    let id = parseInt(stringData.substring(1, readPointer), 10);

    // Number of tomatoes
    curLen = parseInt(stringData[readPointer], 10);
    readPointer++;

    let numLetters = parseInt(stringData.substring(readPointer, readPointer + curLen), 10);
    readPointer += curLen;
    let numTomatoes = parseInt(stringData.substring(readPointer, readPointer + numLetters), 10);
    readPointer += numLetters;

    // Account name
    curLen = parseInt(stringData[readPointer], 10);
    readPointer++;

    numLetters = parseInt(stringData.substring(readPointer, readPointer + curLen), 10);
    readPointer += curLen;
    let accountName = stringData.substring(readPointer, readPointer + numLetters);
    readPointer += numLetters;

    // User name
    curLen = parseInt(stringData[readPointer], 10);
    readPointer++;

    numLetters = parseInt(stringData.substring(readPointer, readPointer + curLen), 10);
    readPointer += curLen;
    let username = stringData.substring(readPointer, readPointer + numLetters);
    readPointer += numLetters;

    // Password
    curLen = parseInt(stringData[readPointer], 10);
    readPointer++;

    numLetters = parseInt(stringData.substring(readPointer, readPointer + curLen), 10);
    readPointer += curLen;
    let password = stringData.substring(readPointer, readPointer + numLetters);
    readPointer += numLetters;

    // Birthday
    curLen = parseInt(stringData[readPointer], 10);
    readPointer++;

    numLetters = parseInt(stringData.substring(readPointer, readPointer + curLen), 10);
    readPointer += curLen;
    let birthday = stringData.substring(readPointer, readPointer + numLetters);
    readPointer += numLetters;

    // Learning time
    curLen = parseInt(stringData[readPointer], 10);
    readPointer++;

    numLetters = parseInt(stringData.substring(readPointer, readPointer + curLen), 10);
    readPointer += curLen;
    let learningTime = parseInt(stringData.substring(readPointer, readPointer + numLetters), 10);
    readPointer += numLetters;

    // List file notes
    let lenNumFiles = parseInt(stringData[readPointer], 10);
    readPointer++;
    let numFiles = parseInt(stringData.substring(readPointer, readPointer + lenNumFiles), 10);
    readPointer += lenNumFiles;
    let listNoteFile = [];
    
    for (let i = 0; i < numFiles; i++) {
        numLetters = parseInt(stringData[readPointer], 10);
        readPointer++;
        listNoteFile.push(stringData.substring(readPointer, readPointer + numLetters));
        readPointer += numLetters;
    }

    // List file todo
    lenNumFiles = parseInt(stringData[readPointer], 10);
    readPointer++;
    numFiles = parseInt(stringData.substring(readPointer, readPointer + lenNumFiles), 10);
    readPointer += lenNumFiles;
    let listTodoFile = [];
    
    for (let i = 0; i < numFiles; i++) {
        numLetters = parseInt(stringData[readPointer], 10);
        readPointer++;
        listTodoFile.push(stringData.substring(readPointer, readPointer + numLetters));
        readPointer += numLetters;
    }    

    // List bought items
    lenNumFiles = parseInt(stringData[readPointer], 10);
    readPointer++;
    numFiles = parseInt(stringData.substring(readPointer, readPointer + lenNumFiles), 10);
    readPointer += lenNumFiles;
    let listBoughtItems = [];
    
    for (let i = 0; i < numFiles; i++) {
        numLetters = parseInt(stringData[readPointer], 10);
        readPointer++;
        listBoughtItems.push(stringData.substring(readPointer, readPointer + numLetters));
        readPointer += numLetters;
    }   

    return [{id, numTomatoes, accountName, username, password, birthday, learningTime, listNoteFile, listTodoFile, listBoughtItems}];
};