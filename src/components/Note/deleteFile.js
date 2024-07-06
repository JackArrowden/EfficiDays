import * as FileSystem from 'expo-file-system';
import checkFileExistence from './checkFileExistence';

export default async function deleteFile(filePath) {
    try {
        const absolutePath = `${FileSystem.documentDirectory}${filePath}`;
        if (await checkFileExistence(filePath)) {
            await FileSystem.deleteAsync(filePath);
            console.log('File deleted successfully.');
        } else {
            console.log('File does not exist.');
        }
    } catch (error) {
        console.error('Error deleting file:', error);
    }
};

//////
// const [isDeleted, setDeleted] = useState(true);
// useEffect(() => {
//     if (isDeleted) {
//         deleteFile(curDir);
//         setDeleted(false);
//     }
// }, [isDeleted]);
/////