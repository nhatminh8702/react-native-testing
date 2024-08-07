import { Todo } from "@/constants/Types";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TrashIcon from "./TrashIcon";
import { CheckBox } from "@rneui/themed";

type TodoList = {
  title: string;
  todoList: Todo[];
  onDeleteTodo: (id: number) => void;
  onCheckTodo: (id: number) => void;
};

export default function TodoList({
  title,
  todoList,
  onDeleteTodo,
  onCheckTodo,
}: TodoList) {
  return (
    <View>
      <Text style={{ fontSize: 24, color: "#ecf8fa" }}>{title}</Text>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <View style={styles.todoHeader}>
              <Text style={styles.todoTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => onDeleteTodo(item.id)}>
                <TrashIcon height={24} width={24} />
              </TouchableOpacity>

              <CheckBox
                containerStyle={{
                  backgroundColor: "#ecf8fa",
                  padding: 0,
                }}
                checked={item.completed ?? false}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                onPress={() => onCheckTodo(item.id)}
              />
            </View>

            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: "#ecf8fa",
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  todoTitle: {
    fontSize: 24,
    flex: 1,
  },
  todoHeader: { display: "flex", flexDirection: "row", alignItems: "center" },
});
