import * as FileSystem from 'expo-file-system';

export default async function checkFileExistence(filePath) {
    try {
        const fileInfo = await FileSystem.getInfoAsync(filePath);
        if (fileInfo.exists) {
            console.log('File exists:', filePath);
            return true;
        } else {
            console.log('File does not exist:', filePath);
            return false;
        }
    } catch (error) {
        console.error('Error checking file existence:', error);
        return false;
    }
};