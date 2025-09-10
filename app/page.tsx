
import Containner from "@/components/containner";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <Containner>
      <h1>home</h1>
      <Button>Click button</Button>
      <Button variant="secondary">Click button</Button>
    </Containner>
  );
}
