export default function Home() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",  // Mengatur elemen secara horizontal ke tengah
        justifyContent: "center", // Mengatur elemen secara vertikal ke tengah
        height: "100vh", // Menentukan tinggi elemen sebagai tinggi tampilan
      }}
    >
      <h1
        style={{
          margin: 0,
          marginBottom: "20px",
        }}
      >
        Welcome to my App
      </h1>
      <button style={{ width: "200px", height: "50px" }}>Hallo</button>
    </section>
  );
}
