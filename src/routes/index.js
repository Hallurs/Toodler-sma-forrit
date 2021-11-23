import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

/* Import view components */
import Main from '../views/main';
import Boards from '../views/Boards';
import lists from '../views/lists';
import tasks from '../views/tasks';
import task from '../views/task';

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Boards" component={Boards} />
            <Stack.Screen name="Lists" component={lists} />
            <Stack.Screen name="Tasks" component={tasks} />
            <Stack.Screen name="Task" component={task} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;