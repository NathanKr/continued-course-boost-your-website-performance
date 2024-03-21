import {
    FC,
    useState,
    useEffect,
    ReactNode,
    cloneElement,
    ReactElement,
  } from "react";
  import styles from "styles/gen-ui/generic-clipboard.module.css";
  
  // interface IProps {
  //   valueCopiedToClipboard: string;
  //   children: ReactNode; // Allow any ReactNode as children
  // }
  
  // const GenericClipboard: FC<IProps> = ({ valueCopiedToClipboard, children }) => {
  //   const [status, setStatus] = useState("");
  
  //   const handleCopyClick = () => {
  //     navigator.clipboard
  //       .writeText(valueCopiedToClipboard)
  //       .then(() => {
  //         setStatus(`==== > Copied to clipboard: ${valueCopiedToClipboard}`);
  //       })
  //       .catch((e) => {
  //         console.error(e.message);
  //       });
  //   };
  
  //   useEffect(() => {
  //     // Clear status after 5 seconds
  //     const timeoutId = setTimeout(() => {
  //       setStatus("");
  //     }, 5000);
  
  //     // Clear the timeout when the component unmounts or when a new copy is triggered
  //     return () => clearTimeout(timeoutId);
  //   }, [status]);
  
  //   const elemStatus = status && <span className={styles.status}>{status}</span>;
  
  //   return (
  //     <div>
  //       {cloneElement(children as ReactElement, { onClick: handleCopyClick })}
  //       {elemStatus}
  //     </div>
  //   );
  // };
  
  // export default GenericClipboard;


interface IProps {
  valueCopiedToClipboard: string;
  children: (onClick: () => void) => ReactNode;
}

const GenericClipboard: FC<IProps> = ({ valueCopiedToClipboard, children }) => {
  const [status, setStatus] = useState("");

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(valueCopiedToClipboard)
      .then(() => {
        setStatus(`==== > Copied to clipboard: ${valueCopiedToClipboard}`);
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  useEffect(() => {
    // Clear status after 5 seconds
    const timeoutId = setTimeout(() => {
      setStatus("");
    }, 5000);

    // Clear the timeout when the component unmounts or when a new copy is triggered
    return () => clearTimeout(timeoutId);
  }, [status]);

  const elemStatus = status && <span className={styles.status}>{status}</span>;

  return (
    <div>
      {children(handleCopyClick)}
      {elemStatus}
    </div>
  );
};

export default GenericClipboard;
