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

  return [list, handleNewToast];
}