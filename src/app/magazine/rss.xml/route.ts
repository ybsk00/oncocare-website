import { rssResponse } from "../../../content/rss";

// 매거진 RSS (별칭). 루트 /feed.xml 과 동일 내용.
export function GET() {
  return rssResponse();
}
