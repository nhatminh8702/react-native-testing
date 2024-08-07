import AddIcon from "@/components/AddIcon";
import { Todo } from "@/constants/Types";
import { Link } from "expo-router";
import { useContext, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TodoContext } from "./_layout";
import TodoList from "@/components/TodoList";

export default function HomePage() {
  const { todoList, setTodoList } = useContext(TodoContext);

  const handlePressCheckBox = (todoId: number) => {
    let tempTodoList: Todo[] = [];
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

      <TodoList
        title="Completed"
        onDeleteTodo={handleDeleteTodo}
        todoList={completedTodoList}
        onCheckTodo={handlePressCheckBox}
      />

      <TodoList
        title="On-going"
        onDeleteTodo={handleDeleteTodo}
        todoList={onGoingTodoList}
        onCheckTodo={handlePressCheckBox}
      />
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
