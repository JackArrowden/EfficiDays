import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';

export default async function readF(filePath) {
    try {
        const base64Data = await FileSystem.readAsStringAsync(filePath, {
            encoding: FileSystem.EncodingType.Base64,
        });
        const dataBuffer = Buffer.from(base64Data, 'base64');
        let stringData = dataBuffer.toString('utf-8');
        return stringData;
    } catch (error) {
        console.error('Error while reading: ', error);
        return null;
    }
};