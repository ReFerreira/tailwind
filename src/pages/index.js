import { Header } from "../components/Header";
import { Stories } from "../components/Stories";
import { Post } from "../components/Post";

export default function Home() {
  return (
    <div class="border w-1/2 m-auto">
      {/* Barra Superior */}
      <Header />

      {/* Stories  */}

      <Stories />

      {/* Postagens */}
      <Post />
    </div>
  );
}
