import RequestList from "@/components/home/friend/request/RequestList.tsx";
export default function RequestListContainer({ data }: { data: any }) {
  return (
    <div className={"w-full "}>
      <p className="text-sm text-muted-foreground transition-colors hover:text-foreground pt-2 pb-4">
        {`친구 요청 목록 (${data.length})`}
      </p>
      <div
        className={"relative overflow-scroll w-full h-[calc(100%-70px)] scroll"}
      >
        <div className={"absolute max-w-[1200px] w-full"}>
          <RequestList data={data} />
        </div>
      </div>
    </div>
  );
}
