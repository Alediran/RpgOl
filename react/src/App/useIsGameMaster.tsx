import { useAuth } from "react-oidc-context";
import { useAppSelector } from "./Hooks";

function useIsGameMaster() {
  const { game } = useAppSelector(state => state.game)
  const { user } = useAuth();
  
  const isGameMaster = () => game.creatorId === user?.profile.sub;

  return [isGameMaster]
}

export default useIsGameMaster;