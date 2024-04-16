export default async function Read({ params }: any) {
  const response = await fetch(`http://localhost:9999/topics/${params.id}`, {
    next: { revalidate: 0 },
  });
  const result = await response.json();

  return (
    <>
      <h2>{result.title}</h2>
      <p>{result.body}</p>
    </>
  );
}
