import Lottie from "lottie-react";
import LottieCat from "@/assets/lottie/cat.json";

export default function NoResponse({ txt }: { txt: string }) {
  return (
    <>
      <Lottie
        animationData={LottieCat}
        loop={true}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        className={"flex justify-center items-center absolute bottom-0 h-full"}
      />
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        {txt}
      </h1>
    </>
  );
}
