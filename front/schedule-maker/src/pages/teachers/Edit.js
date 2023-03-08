import React from "react";
import { useParams } from "react-router-dom";
import { Teacher } from "./Teacher";
import { putDataTo, switchActive } from "./components/Fetch";

export function UpdateTeacher() {
  const { teacherId } = useParams();
  let result;

  async function handleUpdate(teacher) {
    console.log(teacher);
    if (typeof teacher === "number") {
      console.log("switch active");
      result = await switchActive(teacher);
    } else if (typeof teacher === "object") {
      // console.log("update");
      result = await putDataTo(teacher);
    }
    console.log(result);
    return result;
  }

  return <Teacher mode="update" teacherId={teacherId} onSave={handleUpdate} />;
}
