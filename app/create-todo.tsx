import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { TodoContext } from "./_layout";
import { Link, router } from "expo-router";
import BackIcon from "@/components/BackIcon";
import { Todo } from "@/constants/Types";

export default function HomePage() {
  const { todoList, setTodoList, newId, setNewId } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState<Todo>({
    id: newId,
    title: "",
    description: "",
    completed: false,
  });

  const handleValueChange = (key: string, value: string) => {
    setNewTodo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleClickCreateTodo = () => {
    setTodoList([...todoList, newTodo]);
    const tempNewId = newId + 1;
    setNewId(tempNewId);
    router.navigate("/");
  };

  return (
    <View style={styles.container}>
      <View>
        <Link href="" asChild>
          <TouchableOpacity style={styles.backLink}>
            <BackIcon color={"#357da1"} height={25} width={25} />
            <Text style={{ color: "#357da1", fontSize: 16 }}>back to todo</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View>
        <Text style={styles.titleContainer}>Create todo</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTodo.title}
          placeholder="Title"
          onChangeText={(value) => handleValueChange("title", value)}
        />
        <TextInput
          editable
          multiline
          style={styles.textArea}
          value={newTodo.description}
          textAlignVertical="top"
          placeholder="Description"
          onChangeText={(value) => handleValueChange("description", value)}
        />
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleClickCreateTodo}
        >
          <Text style={{ color: "#357da1", fontSize: 16 }}>Create</Text>
        </TouchableOpacity>
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
  inputContainer: {
    display: "flex",
    gap: 8,
  },
  backLink: {
    display: "flex",
    flexDirection: "row",
    fontSize: 24,
    color: "#357da1",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#ecf8fa",
    color: "#20232a",
    width: 80,
    display: "flex",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  input: {
    padding: 10,
    backgroundColor: "#ecf8fa",
    borderRadius: 8,
  },

  textArea: {
    padding: 10,
    backgroundColor: "#ecf8fa",
    borderRadius: 8,
    minHeight: 200,
  },
  titleContainer: {
    fontSize: 32,
    color: "#ecf8fa",
  },
});
