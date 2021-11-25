import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

/* Import view components */
import Main from '../views/Main';
import Boards from '../views/Boards';
import Lists from '../views/Lists';
import Tasks from '../views/Tasks';
import Task from '../views/Task';

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