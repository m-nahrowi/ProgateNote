import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";
import CustomButton from "../components/customButton";
import CustomTextInput from "../components/customTextInput";

const addNote = ({ setCurrentPage }: any) => {
  const { addNote }: any = useContext(NoteContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.pageTitle}>Tambahkan NOTE</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="white"
          text="Simpan"
          width="100%"
          // Jalankan function addNote dan arahkan kembali layar ke Home
          onPress={() => {
            addNote(title, desc);
            setCurrentPage("home");
          }}
          disable={title === ""}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default addNote;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 20,
  },
});
