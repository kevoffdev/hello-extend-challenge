import {useContext} from "react";

import {DogsContext} from "../DogsContext";

export const useDogsContext = () => {
  const {state, actions} = useContext(DogsContext);

  return {state, actions};
};
