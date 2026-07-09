export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">이용약관</h1>

      <div className="prose prose-sm text-[var(--foreground)] space-y-4">
        <h2 className="text-lg font-semibold">제1조 (목적)</h2>
        <p>
          본 약관은 주식회사 루미브리즈(이하 &quot;회사&quot;)가 제공하는 온코케어 AI 서비스(이하 &quot;서비스&quot;)의
          이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>

        <h2 className="text-lg font-semibold">제2조 (서비스의 성격)</h2>
        <p>
          본 서비스는 의료 행위가 아니며, AI가 제공하는 정보는 참고용입니다.
          건강 관련 결정은 반드시 담당 의료진과 상의하시기 바랍니다.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>본 서비스는 진단, 치료, 처방을 제공하지 않습니다.</li>
          <li>AI 상담은 의학적 조언을 대체하지 않습니다.</li>
          <li>영양제 추천은 건강기능식품에 한하며, 의약품이 아닙니다.</li>
          <li>긴급 상황 시 즉시 119 또는 병원에 연락하시기 바랍니다.</li>
        </ul>

        <h2 className="text-lg font-semibold">제3조 (개인정보 보호)</h2>
        <p>
          회사는 이용자의 개인정보를 개인정보 처리방침에 따라 보호합니다.
          건강 정보는 암호화되어 저장되며, 이용자의 동의 없이 제3자에게 제공되지 않습니다.
        </p>

        <h2 className="text-lg font-semibold">제4조 (면책사항)</h2>
        <p>
          회사는 AI가 제공한 정보로 인해 발생한 건강상의 문제에 대해 법적 책임을 지지 않습니다.
          모든 건강 관련 결정은 이용자 본인과 담당 의료진의 판단에 따릅니다.
        </p>
      </div>
    </div>
  );
}
