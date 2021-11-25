import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput } from 'react-native';
import styles from './styles';
import ListsOfBoards from '../../components/ListsOfBoards';
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import * as fileService from '../../services/fileService';
import * as imageService from '../../services/imageService';

import EditModal from '../../components/EditModal';

const Boards = ({navigation: { navigate } }) => {
    
    const [images, setImages] = useState();
    const [selectedImages, setSelectedImages] = useState([]);
    const [loadingImages, setLoadingImages] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [tempImage, setTempImage] = useState();

    useEffect(() => {
        (async () => {
            const images = await fileService.getAllImages();
            //console.log(images)
            /* const sommin = images.map((image,index) => ({
                id: index+4,
                name: image.name,
                thumbnailPhoto: `data:image/jpeg;base64,${image.file}`
            })) */
            const newimages = [...data.boards/* ,...sommin */]
            setImages(newimages);
            setLoadingImages(false);
        })();
    }, []);

    const onImageLongPress = name => {
        if (selectedImages.indexOf(name) !== -1) {
            // The image is already within the list
            setSelectedImages(selectedImages.filter(image => image !== name));
        } else {
            // Add the new image and replace the old image
            if (selectedImages.length > 0) 
            {
                selectedImages.pop();
                setSelectedImages([...selectedImages, name]);
                setTempImage();
            } else {
                setSelectedImages([...selectedImages, name]);
                setTempImage();
            }
        }
    };

    const deleteSelectedImages = async () => {
        setLoadingImages(true);

        // Promise.all resolves the list of promises resulting in all images being deleted.
        await Promise.all(selectedImages.map(image => fileService.remove(image)) /* Returns a list of promises */);

        // Correct the state variables
        setSelectedImages([]);
        setImages(images.filter(image => selectedImages.indexOf(image.name) === -1));
        setLoadingImages(false);
    }

    const editSelectedBoard = async () => {
        setIsEditModalOpen(true);
    }

    const takePhoto = async () => {
        const photo = await imageService.takePhoto();
        if (photo.length > 0) { await addImage(photo); }
    }

    const selectFromCameraRoll = async () => {
        const photo = await imageService.selectFromCameraRoll();
        if (photo.length > 0) { await addImage(photo); }
    }

    const addImage = async image => {
        setLoadingImages(true);

        const newImage = await fileService.addImage(image);
        setTempImage(`data:image/jpeg;base64,${newImage.file}`)
        //setImages([...images, newImage]);
        setLoadingImages(false);
    };

    const overWriteData = (name ,newBoardName) => {
        const imagefound = images.find(image => image.name === name[0]);
        if (tempImage !== undefined)
        {
            imagefound.thumbnailPhoto = tempImage;
        }
        if (newBoardName !== "")
        {
            imagefound.name = newBoardName; 
        }
        setTempImage();
        setSelectedImages([]);
        setIsEditModalOpen(false);
    }

    return(
        <View style={styles.container}>
            <Toolbar
                    hasSelectedImages={selectedImages.length > 0}
                    onAdd={() => setIsAddModalOpen(true)}
                    onRemove={() => deleteSelectedImages()} 
                    onEdit={() => editSelectedBoard()}/>
            
            <ListsOfBoards 
                images={images}
                selectedImages={selectedImages}
                onLongPress={name => onImageLongPress(name)}/>
            <EditModal
                nameOfBoard={[...selectedImages]}
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                takePhoto={() => takePhoto()}
                confirmChanges={(newboardname) => overWriteData(selectedImages, newboardname)}
                selectFromCameraRoll={() => selectFromCameraRoll()} 
                />
            
            {/* <TouchableHighlight 
                onPress={() => navigate('Lists')}
                style={styles.button}>
                <Text style={styles.buttonText}>On boards now</Text>
            </TouchableHighlight> */}
        </View>
    )
};

export default Boards;