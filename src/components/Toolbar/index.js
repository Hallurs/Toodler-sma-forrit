import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

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

export default Toolbar;