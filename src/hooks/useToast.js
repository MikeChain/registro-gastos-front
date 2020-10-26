const { useContext } = require("react");
const { ToastContext } = require("../context/ToastContext");

export const useToast = () => {
  const { list, setList } = useContext(ToastContext);

  const handleNewToast = ({ type, title, description }) => {
    setList([...list, {
      type,
      title,
      description,
      id: new Date().getTime()
    }]);
  }

  const deleteToast = id => {
    const listItemIndex = list.findIndex(e => e.id === id);

    list.splice(listItemIndex, 1);
    setList([...list]);
  }

  return [list, handleNewToast, deleteToast];
}