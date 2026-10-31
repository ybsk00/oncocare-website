import type { Metadata } from "next";
import "./home.css";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="site">
      <section className="page-head">
        <div className="wrap">
          <div className="label">404</div>
          <h1>페이지를 찾을 수 없습니다.</h1>
          <p className="lede">주소가 바뀌었거나 없어진 페이지입니다. 아래에서 다시 찾아보세요.</p>
          <p style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }}>
            <a className="btn btn-brand" href="/">
              홈으로
            </a>
            <a className="btn btn-line" href="/admission">
              입원상담
            </a>
            <a className="btn btn-line" href="/magazine">
              매거진
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
