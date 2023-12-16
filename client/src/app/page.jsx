"use client";

import { useStoreUsers } from "@/zustand/store";

export default function Home() {
  const { users } = useStoreUsers((state) => ({
    users: state.users,
  }));
  return (
    <div>
      <br />
      <br />
      <br />
      <h2>{users[5].name}</h2>
      <br />
    </div>
  );
}
