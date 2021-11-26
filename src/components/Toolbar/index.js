import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Toolbar = ({ hasSelectedImages, onAdd, onRemove, onEdit }) => (
    <View styleName="horizontal" style={styles.toolbar}>
        <TouchableHighlight
            style={styles.toolbarAction}
            onPress={onAdd}>
            <Text style={styles.toolbarActionText}>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.toolbarAction}
            onPress={onRemove}
            disabled={!hasSelectedImages}>
            <Text style={[styles.toolbarActionText, !hasSelectedImages ? { color: 'rgba(155, 155, 155, .5)' } : {}]}>Delete</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.toolbarAction}
            onPress={onEdit}
            disabled={!hasSelectedImages}>
            <Text style={[styles.toolbarActionText, !hasSelectedImages ? { color: 'rgba(155, 155, 155, .5)' } : {}]}>Edit</Text>
        </TouchableHighlight>
    </View>
);

Toolbar.propTypes = {
    // Determines if there are selected boards, lists or tasks or not
    hasSelectedImages: PropTypes.bool.isRequired,
    // Adding function
    onAdd: PropTypes.func.isRequired,
    // Removing function
    onRemove: PropTypes.func.isRequired,
    // Edit function
    onEdit: PropTypes.func.isRequired
};

export default Toolbar;