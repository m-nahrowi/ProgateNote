
import Home from "./src/screens/home";
import { useState } from "react";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";
import { NoteProvider } from "./src/context/NoteContext";

const CurrentPageWidget = ({ currentPage, setCurrentPage}: any) => {
  switch (currentPage) {
    case "home":
      return <Home  setCurrentPage={setCurrentPage} />;
    case "addNote":
      return <AddNote setCurrentPage={setCurrentPage} />;
    case "editNote":
      return <EditNote setCurrentPage={setCurrentPage} />;
    default:
      return <Home />;
  }
};




function App() {
  
  const [currentPage, setCurrentPage] = useState('home')
  
  // const [noteList, setNoteList] = useState([
  //   {
  //     id: 1,
  //     title: "Note pertama",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  //   },
  //   {
  //     id: 2,
  //     title: "Note kedua",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  //   },
  // ]);

  // const addNote = (title: any, desc: any)  => {
  //   const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
  //   setNoteList([
  //     ...noteList,
  //     {
  //       id,
  //       title: title,
  //       desc: desc,
  //     },
  //   ]);
  // };

  // return (
  //   <CurrentPageWidget
  //     currentPage={currentPage}
  //     noteList={noteList}
  //     setCurrentPage={setCurrentPage}
  //     addNote={addNote}
  //   />
  // );
  return (
    <NoteProvider>
      <CurrentPageWidget 
        currentPage= {currentPage}
        setCurrentPage = {setCurrentPage}
      />
    </NoteProvider>
  );

}


export default App;
