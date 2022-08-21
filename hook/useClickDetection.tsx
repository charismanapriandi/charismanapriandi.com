import { MutableRefObject, useEffect } from "react";

function useClickOutside(ref: MutableRefObject<any>, callback: () => void) {
  useEffect(() => {
    function clickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutside;