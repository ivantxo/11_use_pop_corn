import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function listenScape(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", listenScape);

      return function () {
        document.removeEventListener("keydown", listenScape);
      };
    },
    [action, key]
  );
}
