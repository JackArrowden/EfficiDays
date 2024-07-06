import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';
import checkFileExistence from './checkFileExistence';

export default async function readF(filePath) {
    try {
        if (await checkFileExistence(filePath)) {
            const base64Data = await FileSystem.readAsStringAsync(filePath, {
                encoding: FileSystem.EncodingType.Base64,
            });
            const dataBuffer = Buffer.from(base64Data, 'base64');
            let stringData = dataBuffer.toString('utf-8');
            return stringData;
        } else return null;
    } catch (error) {
        console.error('Error while reading: ', error);
        return null;
    }
};