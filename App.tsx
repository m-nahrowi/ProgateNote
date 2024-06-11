import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/home";
import { useState } from "react";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";
// import addNote from './src/screens/addNote';

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote}: any) => {
  switch (currentPage) {
    case "home":
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote}/>;
    case "edit":
      return <EditNote />;
    default:
      return <Home />;
  }
};




function App() {
  
  const [currentPage, setCurrentPage] = useState('home')
  
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  const addNote = (title: any, desc: any)  => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
    />
  );
}


export default App;
