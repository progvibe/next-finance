import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/900a36ac-4781-4493-895f-ef902f1b7153-6lbbal.jpg",
  "https://utfs.io/f/9b9abb73-e44f-4095-84d4-523b5cd70906-tphg00.png",
  "https://utfs.io/f/bcf852dc-9a85-4a41-b979-1a4915d09e5d-9ngnqp.jpeg",
  "https://utfs.io/f/3b9027e0-f6f8-411f-912b-f6d2f176fbf2-t9wec8.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="p-2">
            <Image src={image.url} width={150} height={150} alt="images" />
          </div>
        ))}
      </div>
    </main>
  );
}
