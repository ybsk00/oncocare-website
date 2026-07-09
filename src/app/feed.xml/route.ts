import { rssResponse } from "../../content/rss";

// 루트 RSS 피드 (관례적 위치). /magazine/rss.xml 과 동일.
export function GET() {
  return rssResponse();
}
