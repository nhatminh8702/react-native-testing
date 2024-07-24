import AddIcon from "@/components/AddIcon";
import TrashIcon from "@/components/TrashIcon";
import { initData } from "@/constants/InitData";
import { todo } from "@/constants/Types";
import { CheckBox } from "@rneui/base";
import { Link } from "expo-router";
import { useContext, useMemo, useState } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TodoContext } from "./_layout";

export default function HomePage() {
  const { todoList, setTodoList } = useContext(TodoContext);

  const handlePressCheckBox = (todoId: number) => {
    let tempTodoList: todo[] = [];
    todoList.forEach((todo) => {
      if (todo.id === todoId) {
        tempTodoList.push({
          ...todo,
          completed: !todo.completed,
        });
      } else {
        tempTodoList.push(todo);
      }
    });
    setTodoList(tempTodoList);
  };

  const handleDeleteTodo = (todoId: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  const completedTodoList = useMemo(
    () => todoList.filter((todo) => todo.completed) ?? [],
    [todoList]
  );

  const onGoingTodoList = useMemo(
    () => todoList.filter((todo) => !todo.completed) ?? [],
    [todoList]
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleContainer}>Todo</Text>
        <Link href="/create-todo" asChild>
          <TouchableOpacity style={styles.addButton}>
            <AddIcon height={24} width={24} />
          </TouchableOpacity>
        </Link>
      </View>

      <View>
        <Text style={{ fontSize: 24, color: "#ecf8fa" }}>Completed</Text>
        <FlatList
          data={completedTodoList}
          renderItem={({ item }) => (
            <View style={styles.todoContainer}>
              <View style={styles.todoHeader}>
                <Text style={styles.todoTitle}>{item.title}</Text>
                <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
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
                  onPress={() => handlePressCheckBox(item.id)}
                />
              </View>

              <Text>{item.description}</Text>
            </View>
          )}
        />
      </View>
      <View>
        <Text style={{ fontSize: 24, color: "#ecf8fa" }}>On-going</Text>
        <FlatList
          data={onGoingTodoList}
          renderItem={({ item }) => (
            <View style={styles.todoContainer}>
              <View style={styles.todoHeader}>
                <Text style={styles.todoTitle}>{item.title}</Text>

                <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
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
                  onPress={() => handlePressCheckBox(item.id)}
                />
              </View>

              <Text>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#20232a",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    display: "flex",
    gap: 8,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  titleContainer: {
    flex: 1,
    fontSize: 40,
    color: "#ecf8fa",
  },
  todoTitle: {
    fontSize: 24,
    flex: 1,
  },
  addButton: {
    backgroundColor: "#ecf8fa",
    color: "#20232a",
    width: 56,
    display: "flex",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  todoContainer: {
    backgroundColor: "#ecf8fa",
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  todoHeader: { display: "flex", flexDirection: "row", alignItems: "center" },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
