import Home from "./component/Home";
import Navbar from "./component/Navbar";

export default function MainPage() {
  return (
    <main className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <div>
        <Navbar/>
        <Home/>
        <div className='h-[4000px]'></div>
      </div>
    </main>
  );
}