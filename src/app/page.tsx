/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "~/server/db";
import { accounts } from "~/server/db/schema";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const fetchedAccounts = await db.select().from(accounts);
  console.log(fetchedAccounts);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {fetchedAccounts.map((account) => (
          <div key={account.id}>{account.name}</div>
        ))}
      </div>
    </main>
  );
}
