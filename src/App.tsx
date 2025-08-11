import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
