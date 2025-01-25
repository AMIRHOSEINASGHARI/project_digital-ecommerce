"use client";

// next
import { usePathname } from "next/navigation";
// lib
import { BASE_URL } from "@/lib/vars";
// cmp
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";
import CopyClipboard from "./CopyClipboard";
import { Facebook, Linkedin, Reddit, Telegram, Twitter } from "../svg";

const ShareButtons = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const url = `${BASE_URL}${pathname}`;

  return (
    <div className="flex items-center gap-1">
      <CopyClipboard />
      <FacebookShareButton url={url} title={title}>
        <div className="share-btn">
          <Facebook />
        </div>
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title}>
        <div className="share-btn">
          <Linkedin />
        </div>
      </LinkedinShareButton>
      <TelegramShareButton url={url} title={title}>
        <div className="share-btn">
          <Telegram />
        </div>
      </TelegramShareButton>
      <TwitterShareButton url={url} title={title}>
        <div className="share-btn">
          <Twitter />
        </div>
      </TwitterShareButton>
      <RedditShareButton url={url} title={title}>
        <div className="share-btn">
          <Reddit />
        </div>
      </RedditShareButton>
    </div>
  );
};

export default ShareButtons;
