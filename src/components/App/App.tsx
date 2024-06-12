import { Counter } from "../../features/Counter/Counter";
import { Counter2 } from "../../features/Counter/Counter2";

export function App() {
  return <><Counter2 initialCount={5} /><Counter /></>;
}
