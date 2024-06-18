import {
  FlatList,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import CustomButton from "../components/customButton";
import { NoteContext } from "../context/NoteContext";
// import editNote from './editNote';

// NoteCard
const NoteCard = ({ item, editNote, deleteNote, setCurrentPage }: any) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.button}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        // layar 'edit' saat tombol ditekan
        onPress={() => {
          editNote(item); // edit
          setCurrentPage("editNote"); // ke screen edit
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          deleteNote(item.id); // delete
        }}
      />
    </View>
  </View>
);

const Home = ({ setCurrentPage }: any) => {
  const {
    noteList,
    editNote,
    deleteNote,
    showModal,
    closeModal,
    openModal,
  }: any = useContext(NoteContext);

  const renderEmptyData = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Text style={{ fontSize: 34, fontWeight: 700, color: "#d1d1d1" }}>
          No Data
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: "#d1d1d1",
          }}
        >
          Please Create First
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor={"red"} />
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Tambahkan Note"
        width="100%"
        // layar "add" saat tombol ditekan
        onPress={() => setCurrentPage("addNote")}
      />
      {noteList < 1 ? (
        renderEmptyData()
      ) : (
        <FlatList
          // showsVerticalScrollIndicator={false}
          data={noteList}
          // menambahkan function "setCurrentPage" ke component "NoteCard"
          renderItem={({ item }) => (
            <NoteCard
              item={item}
              setCurrentPage={setCurrentPage}
              deleteNote={() => openModal(item.id)}
              editNote={editNote}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      <Modal animationType="slide" visible={showModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={deleteNote}>
              <Text style={styles.modalText}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.modalText}>cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 30,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#DDD",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#203239",
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalContent: {
    padding: 40,
    width: 240,
    backgroundColor: "#c1c9c4",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Home;
