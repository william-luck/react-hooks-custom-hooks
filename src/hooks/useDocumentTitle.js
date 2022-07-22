import { useEffect } from "react";


// Custom hooks should start with 'use' to signal to react that is a custom hook

function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default useDocumentTitle;
