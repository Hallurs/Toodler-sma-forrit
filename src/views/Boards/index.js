import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import BoardList from "../../components/BoardList";
import data from "../../resources/data.json";
import Toolbar from '../../components/Toolbar';
import * as fileService from '../../services/fileService';

const Boards = ({navigation: { navigate } }) => {
    
    const [images, setImages] = useState([]);

    const [selectedImages, setSelectedImages] = useState([]);

    const [loadingImages, setLoadingImages] = useState(true);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const images = await fileService.getAllImages();
            //console.log(images)
            setImages(images);
            //console.log(images)
            setLoadingImages(false);
        })();
    }, []);

    
    const onImageLongPress = name => {
        if (selectedImages.indexOf(name) !== -1) {
            // The image is already within the list
            setSelectedImages(selectedImages.filter(image => image !== name));
        } else {
            // Add the new image
            setSelectedImages([...selectedImages, name]);
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



    return(
        <View style={styles.container}>
            <Toolbar
                    hasSelectedImages={selectedImages.length > 0}
                    onAdd={() => setIsAddModalOpen(true)}
                    onRemove={() => deleteSelectedImages()} />
            
            
            <BoardList 
                images={data.boards}
                selectedImages={selectedImages}
                onLongPress={name => onImageLongPress(name)}/>

            {/* <TouchableHighlight 
                onPress={() => navigate('Lists')}
                style={styles.button}>
                <Text style={styles.buttonText}>On boards now</Text>
            </TouchableHighlight> */}
        </View>
    )
};

export default Boards;