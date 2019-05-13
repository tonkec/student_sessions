import { addSession, editSession, removeSession } from "../../actions/sessions";

test("should remove session", () => {
  const action = removeSession({ id: "2kn" });
  expect(action).toEqual({
    type: "REMOVE_SESSION",
    id: "2kn"
  });
});

test("should edit session", () => {
  const action = editSession("2kn", { studentEmail: "" });
  expect(action).toEqual({
    type: "EDIT_SESSION",
    id: "2kn",
    newData: {
      studentEmail: ""
    }
  });
});
