import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

/* Import view components */
import Main from '../views/main';
import Boards from '../views/Boards';
import Lists from '../views/lists';
import Tasks from '../views/tasks';
import Task from '../views/task';

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Boards" component={Boards} />
            <Stack.Screen name="Lists" component={Lists} />
            <Stack.Screen name="Tasks" component={Tasks} />
            <Stack.Screen name="Task" component={Task} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;