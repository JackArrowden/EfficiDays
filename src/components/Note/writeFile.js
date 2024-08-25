import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';

export default async function writeF(data, filePath) {
    try {
        const stringBuffer = Buffer.from(data, 'utf-8');
        await FileSystem.writeAsStringAsync(filePath, stringBuffer.toString('base64'), {
            encoding: FileSystem.EncodingType.Base64,
        });
    } catch (error) {
        console.error('Error while writing: ', error);
    }
}