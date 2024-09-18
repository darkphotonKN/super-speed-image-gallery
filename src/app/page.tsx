import Link from "next/link";

export default function HomePage() {
  const imagePaths = [
    "https://utfs.io/f/ej8KDpZPpexhAJg63VhnJcTYw7lCg3Ei5kNrHMVfbeKQItpR",
    "https://utfs.io/f/ej8KDpZPpexhQnoJ7oNmoGhmdi96zvABt5agLS4HlnfbZX0E",
    "https://utfs.io/f/ej8KDpZPpexhOuczdzrMzWJLrc23C9IdfRZ7UGyeYn0qv5Xk",
    "https://utfs.io/f/ej8KDpZPpexh1nI6rpSOvKXQq507MkGILeT8BDV2AsJPrpEu",
    "https://utfs.io/f/ej8KDpZPpexhxBOaysjbVnvRoymlrHqwNze5p0EZShfsFuUt",
  ];

  const images = imagePaths.map((url, index) => ({
    id: index + 1,
    url,
  }));

  console.log("images:", images);

  return (
    <main>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <div key={image.id} className="w-1/4 p-3">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
