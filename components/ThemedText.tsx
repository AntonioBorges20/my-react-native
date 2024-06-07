
import { Button } from '@rneui/themed';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {name: 'Alumnos', ruta: 'Alumnos', icon: 'cubes', color: '#0a7ea4'},
  {name: 'Profesores', ruta: 'Profesores', icon: 'graduation-cap', color: '#0a7ea4'},
  {name: 'Materias', ruta: 'Materias', icon: 'book', color: '#0a7ea4'},
  {name: 'Cursos', ruta: 'Cursos', icon: 'calendar', color: '#0a7ea4'},
]

export function ThemedText({navigation}: any) {
  return (
  <View>
    {data.map((d, index) =>(
      <View key={index}>
        <Button
          title={d.name}
          icon={<Icon name={ d.icon } size={ 50 } color='white' />}
          buttonStyle={{ backgroundColor: d.color, borderRadius: 10, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}
          containerStyle={{ margin: 5 }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ textAlign: 'center' }}
          onPress={() => navigation.navigate(d.ruta)}
        />
      </View>
    ))}
  </View>
  );
}
