import * as FileSystem from 'expo-file-system';

export default async function deleteFile(relativePath) {
    try {
        const absolutePath = `${FileSystem.documentDirectory}${relativePath}`;
        const fileInfo = await FileSystem.getInfoAsync(absolutePath);
        if (fileInfo.exists) {
            await FileSystem.deleteAsync(absolutePath);
            console.log('File deleted successfully.');
        } else {
            console.log('File does not exist.');
        }
    } catch (error) {
        console.error('Error deleting file:', error);
    }
};