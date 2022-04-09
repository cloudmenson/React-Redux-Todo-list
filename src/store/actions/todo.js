export const ACTION_ADD_TODO = "ACTION_ADD_TODO";
export function addTodo(payload) {
  return { type: ACTION_ADD_TODO, payload };
}

export const ACTION_DELETE_TODO = "ACTION_DELETE_TODO";
export function onDeleteTodo(payload) {
  return { type: ACTION_DELETE_TODO, payload };
}

export const ACTION_UPDATE_TODO = "ACTION_UPDATE_TODO";
export function onUpdateTodo(payload) {
  return { type: ACTION_UPDATE_TODO, payload };
}
