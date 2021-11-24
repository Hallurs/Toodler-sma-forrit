import * as FileSystem from 'expo-file-system';
//const imageDirectory =  `${FileSystem.documentDirectory}images`;
//console.log(imageDirectory)
import data from '../resources/data.json'

const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}

export const cleanDirectory = async () => {
    //await FileSystem.deleteAsync(imageDirectory);
}

export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
}

export const addImage = async imageLocation => {
    const folderSplit = imageLocation.split('/');
    const thumbnailPhoto = folderSplit[folderSplit.length - 1];
   // await onException(() => copyFile(imageLocation, `${imageDirectory}/${thumbnailPhoto}`));

    return {
        name: thumbnailPhoto,
        type: 'image',
        file: await loadImage(thumbnailPhoto)
    };
}

export const remove = name => {
    console.log(name)
    //return await onException(() => FileSystem.deleteAsync(`${imageDirectory}/${name}`, { idempotent: true }));
    //return onException(() => data.boards, { idempotent: true });
    data.boards.map((elem,index,arr) => {
        if(elem.name === name) {arr.splice(index,1)}
    });
}

export const loadImage = async fileName => {
    //return await onException(() => FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
       // encoding: FileSystem.EncodingType.Base64
    //}));
}

const setupDirectory = async () => {
   // const dir = await FileSystem.getInfoAsync(imageDirectory);
    //if (!dir.exists) {
        //await FileSystem.makeDirectoryAsync(imageDirectory);
    //}
}

export const getAllImages = async () => {
    // Check if directory exists
   // await setupDirectory();

    //const result = await onException(() => FileSystem.readDirectoryAsync(imageDirectory));
    const result = data.boards;
    console.log(result)
    return result.map(async thumbnailPhoto => {
        return {
            name: thumbnailPhoto,
            type: 'image',
            file: await loadImage(thumbnailPhoto)
        };
    });
}