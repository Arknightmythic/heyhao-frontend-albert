import { Link, useNavigate } from "react-router";
import type { DetailGroupValues } from "../api/getDetailGroup";
import { useJoinGroup } from "../hooks/useJoinGroup";
import { AxiosError } from "axios";

interface GroupFreeInfoProps {
  data: DetailGroupValues | undefined;
}

export default function GroupFreeInfo({ data }: GroupFreeInfoProps) {
  const { mutateAsync, isPending } = useJoinGroup();
  const navigate = useNavigate();
  const onJoinGroup = async () => {
    try {
      if (!data) {
        alert("group not found");
        return;
      }
      await mutateAsync({ group_id: data?.id });
      navigate("home/chats");
    } catch (error) {
      if (error instanceof AxiosError) {
        return alert(error?.response?.data.message ?? "An error occured");
      }
      const err = error as Error;
      alert(err?.message ?? "An error occured");
    }
  };

  return (
    <form action="message-room-chat-group.html">
      <div className="p-6 rounded-3xl bg-white flex flex-col gap-6">
        <section
          id="Free-Group-Guidelines "
          className="flex flex-col gap-[12px]"
        >
          <h2 className="font-semibold leading-5">Free Group Guidelines</h2>
          <div className="flex-col flex gap-[12px]">
            <div className="flex items-center gap-[6px]">
              <img
                src="/assets/images/icons/checklist-green-fill.svg"
                alt="icon"
                className="size-[24px] shrink-0"
              />
              <p className="font-semibold leading-5">
                Respect & kindness for everyone in the group.
              </p>
            </div>
            <div className="flex items-center gap-[6px]">
              <img
                src="/assets/images/icons/checklist-green-fill.svg"
                alt="icon"
                className="size-[24px] shrink-0"
              />
              <p className="font-semibold leading-5">
                Be patient and helpful with newcomers.
              </p>
            </div>
            <div className="flex items-center gap-[6px]">
              <img
                src="/assets/images/icons/checklist-green-fill.svg"
                alt="icon"
                className="size-[24px] shrink-0"
              />
              <p className="font-semibold leading-5">
                No spamming or self-promotion.
              </p>
            </div>
            <div className="flex items-center gap-[6px]">
              <img
                src="/assets/images/icons/checklist-green-fill.svg"
                alt="icon"
                className="size-[24px] shrink-0"
              />
              <p className="font-semibold leading-5">
                Don’t share personal info without consent.
              </p>
            </div>
            <div className="flex items-center gap-[6px]">
              <img
                src="/assets/images/icons/checklist-green-fill.svg"
                alt="icon"
                className="size-[24px] shrink-0"
              />
              <p className="font-semibold leading-5">
                Keep discussions relevant to the group's topic.
              </p>
            </div>
          </div>
        </section>
        <button
          type="submit"
          onClick={onJoinGroup}
          disabled={isPending}
          className="rounded-full bg-heyhao-blue py-4 text-white w-full font-bold leading-[20px] text-center"
        >
          Join For Free
        </button>
        <Link to="/home/chats">
          <div className="rounded-full bg-heyhao-blue flex items-center justify-center gap-[10px] py-4 text-white w-full font-bold leading-[20px] text-center">
            <img
              src="/assets/images/icons/messages-white-fill.svg"
              alt="icon"
              className="size-6 shrink-0"
            />
            <p>Message</p>
          </div>
        </Link>
      </div>
    </form>
  );
}
