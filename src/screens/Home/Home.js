import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomTitle, CustomButton, CustomInput } from '../../components/atoms';
import { ListItems } from '../../components/organisms/index';
import colors from '../../constants/colors';
import { GeneralStyles } from '../../styles';
const Home = () => {
  const { fs24, fs16, textBold, textCenter, container } = GeneralStyles;
  const [newTask, setNewTask] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  // Add Task
  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
  };

  return (
    <SafeAreaView style={container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ marginTop: 20 }}>
          <ListItems items={tasks} />
          <CustomTitle
            text="Agrega las tareas realizadas"
            titleStyle={[fs24, textBold, textCenter, { marginVertical: 20 }]}
          />
          <CustomInput
            placeholder="Tarea realizada"
            inputValue={newTask}
            onChangeText={setNewTask}
          />
          <CustomButton
            buttonText="Enviar"
            buttonStyle="primary"
            disabled={newTask === ''}
            onPressButton={addTask}
            buttonTextStyle={[fs16, textBold, textCenter, { color: colors.white }]}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default Home;
