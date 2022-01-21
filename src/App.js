import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const App = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("betty");
  const [newAge, setNewAge] = useState(20);
  const usersColllectionFef = collection(db, "users");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(usersColllectionFef);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    fetchData();
  }, [usersColllectionFef]);
  const createUser = async () => {
    await addDoc(usersColllectionFef, {
      name: newName,
      age: newAge,
    });
  };
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  return (
    <div>
      <input
        placeholder="name..."
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type={"number"}
        onChange={(e) => setNewAge(e.target.value)}
        placeholder="age..."
      />
      <button onClick={createUser}>Create user</button>
      {users.map((user) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          key={user.id}
        >
          <h1> Name:{user.name}</h1>
          <h2> {user.age}</h2>
          <div>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              update user
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete user</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
