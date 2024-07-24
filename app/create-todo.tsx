import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { TodoContext } from "./_layout";
import { Link } from "expo-router";

import BackIcon from "@/components/BackIcon";
import { todo } from "@/constants/Types";

export default function HomePage() {
  const { todoList, setTodoList, newId, setNewId } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState<todo>({
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
          numberOfLines={4}
          style={styles.input}
          value={newTodo.description}
          placeholder="Description"
          onChangeText={(value) => handleValueChange("description", value)}
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
  inputContainer: {
    flex: 1,
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
  input: {
    height: 40,
    padding: 10,
    backgroundColor: "#ecf8fa",
    borderRadius: 8,
  },
  titleContainer: {
    fontSize: 32,
    color: "#ecf8fa",
  },
});
