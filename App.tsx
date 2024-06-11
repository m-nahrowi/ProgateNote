import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/home";
import { useState } from "react";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage }: any) => {
  switch (currentPage) {
    case "home":
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
    case "add":
      return <AddNote />;
    case "edit":
      return <EditNote />;
    default:
      return <Home />;
  }
};

export default function App() {
  
  const [currentPage, setCurrentPage] = useState('home')
  
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
    />
  );
}
