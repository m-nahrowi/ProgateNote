import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../components/customButton";
import CustomTextInput from "../components/customTextInput";
import { NoteContext } from "../context/NoteContext";
// styleInput

const editNote = ({ setCurrentPage }: any) => {
  const { currentNote, editCurrentNote }: any = useContext(NoteContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    setTitle(currentNote.title);
    setDesc(currentNote.desc);
  }, [currentNote]);

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.pageTitle}>Edit Text</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
        value={title}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
        value={desc}
      />
      <View style={styles.spaceTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="simpan"
          width="100%"
          // fungsi pengubah data Note
          onPress={() => {
            editCurrentNote({
              id: currentNote.id, // id tidak diubah
              title: title, // title di edit
              desc: desc, // desc juga di edit
            });
            setCurrentPage("home"); // balik ke home setelah edit
          }}
          disable={title === ""}
        />
      </View>
      <View style={styles.spaceTop}>
        <CustomButton
          backgroundColor="white"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => {
            setCurrentPage("home"); // balik ke home
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default editNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    fontSize: 20,
  },
  spaceTop: {
    marginTop: 20,
  },
});
