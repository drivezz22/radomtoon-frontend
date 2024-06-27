import Loading from "./components/Loading/Loading";
import Router from "./routes";
import { Suspense } from "react";
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router />
    </Suspense>
  );
}
