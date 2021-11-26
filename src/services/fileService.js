import * as FileSystem from 'expo-file-system';
const imageDirectory = `${FileSystem.documentDirectory}images`;
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
    const fileName = folderSplit[folderSplit.length - 1];
    await onException(() => copyFile(imageLocation, `${imageDirectory}/${fileName}`));

    return {
        name: fileName,
        type: 'image',
        file: await loadImage(fileName)
    };
}

//TODO rename
export const remove = name => {
    data.boards.map((elem,index,arr) => {
        if(elem.name === name) {arr.splice(index,1)}
    });
}

export const add = (name, obj) => {
    data[name].push(obj)
}

export const remove_list = name => {
    data.lists.map((elem,index,arr) => {
        if(elem.name === name) {arr.splice(index,1)}
    });
}

export const remove_task = name => {
    data.tasks.map((elem,index,arr) => {
        if(elem.name === name) {arr.splice(index,1)}
    })
}


export const loadImage = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
        encoding: FileSystem.EncodingType.Base64
    }));
}

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(imageDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(imageDirectory);
    }
}

export const getAllImages = async () => {
    // Check if directory exists
    await setupDirectory();

    const result = await onException(() => FileSystem.readDirectoryAsync(imageDirectory));
    return Promise.all(result.map(async fileName => {
        return {
            name: fileName,
            type: 'image',
            file: await loadImage(fileName)
        };
    }));
}