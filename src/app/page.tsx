/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
import { accounts, images } from "~/server/db/schema";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const fetchedAccounts = await db.select().from(accounts);
  const fetchedImages = await db.select().from(images);
  return (
    <main>
      <SignedOut>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-4xl font-bold">
            You are not signed in. Please sign in to continue.
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4">
          {fetchedAccounts.map((account) => (
            <div key={account.id}>{account.name}</div>
          ))}
          {fetchedImages.map((image) => (
            <div key={image.id}>
              <Image
                src={image.url}
                alt={image.name}
                width={200}
                height={200}
                key={image.id}
              />
              <div>{image.name}</div>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}
