import { createContext } from "react";
import { User } from "../types/userTypes";

type RecentUsersType = {
  recentUsers: User[],
  setRecentUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export const RecentUsersContext = createContext<RecentUsersType | null>(null);