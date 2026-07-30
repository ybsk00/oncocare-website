import type { Metadata } from "next";

// 자체 metadata가 없으면 루트 layout의 `alternates: { canonical: SITE }`(홈)를 상속받아
// 이 페이지가 홈을 canonical로 지목 → 구글이 색인을 포기한다. (2026-07-26 SEO 감사에서 발견)
export const metadata: Metadata = {
  // 루트 layout에 `template: "%s | 온코케어 AI"` 가 있으므로 접미사를 직접 넣지 말 것(중복됨)
  title: "개인정보 처리방침",
  description: "온코케어 AI 서비스의 개인정보 수집·이용·보관·파기 및 이용자 권리에 관한 처리방침입니다.",
  alternates: { canonical: "https://oncocare.co.kr/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">개인정보 처리방침</h1>
      <p className="text-sm text-[var(--muted-foreground)] mb-6">
        최종 개정일: 2026년 6월 18일
      </p>

      <div className="prose prose-sm text-[var(--foreground)] space-y-4">
        <h2 className="text-lg font-semibold">1. 수집하는 개인정보 항목</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>필수: 이름, 이메일, 생년월일, 암 관련 정보 (암종, 병기, 치료 단계)</li>
          <li>선택: 성별, 연락처, 체중, 검사 수치</li>
          <li>
            건강 콘텐츠: AI 상담(케어챗) 대화 내용, 업로드한 검사지·약봉투·음식 사진 및 거기서
            추출한 수치·정보, 체크인·식이·복약 기록
          </li>
          <li>자동 수집: 서비스 이용 기록, 기기 식별자, 푸시 토큰</li>
        </ul>
        <p className="text-sm">
          <strong>수집 방법:</strong> 회원가입·온보딩 시 이용자가 직접 입력하거나, 서비스
          이용(상담·사진 업로드·체크인) 과정에서 이용자가 제공하는 정보를 수집합니다. 정확한 위치는
          응급실 안내 기능 사용 시에 한해 이용자 동의 후 수집합니다.
        </p>

        <h2 className="text-lg font-semibold">2. 개인정보의 수집 및 이용 목적</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>AI 맞춤 건강 관리 서비스(증상·영양·심리·정보 안내) 제공</li>
          <li>검사지·약봉투·음식 사진 분석 및 맞춤 영양·복약 안내</li>
          <li>영양 프로토콜 계산 및 제품 추천</li>
          <li>협력 병원 매칭 및 의료진 연동 (긴급 알림 등)</li>
          <li>서비스 개선 및 연구 (비식별화 처리 후, 별도 동의 시)</li>
        </ul>

        <h2 className="text-lg font-semibold">
          3. 제3자 AI 서비스로의 정보 전송 및 처리
        </h2>
        <p className="text-sm">
          본 서비스는 AI 기반 건강 관리 기능(AI 상담, 검사지·약봉투·음식 사진 분석, 맞춤 영양·복약
          안내 등)을 제공하기 위해, 이용자가 입력·업로드한 정보를 아래 제3자 생성형 AI 서비스로
          전송하여 처리합니다. <strong>이용자는 서비스 최초 이용 전, 앱 내 동의 화면을 통해 아래
          내용을 고지받고 명시적으로 동의한 경우에 한해 정보가 전송됩니다.</strong>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>전송받는 자:</strong> Google LLC — Google Gemini API 및 Google Cloud
            Vertex AI
          </li>
          <li>
            <strong>전송 항목:</strong> AI 상담 대화 내용, 온보딩·건강정보(암종·치료 단계·체중·증상
            등), 업로드한 검사지·약봉투·음식 사진 및 추출 정보, 식이·복약 기록
          </li>
          <li>
            <strong>이용 목적:</strong> 이용자 질의에 대한 AI 응답 생성 및 콘텐츠 분석
          </li>
          <li>
            <strong>보유·이용 기간:</strong> AI 응답 생성에 필요한 처리 시점에 한해 전송되며, 본
            서비스는 전송 원본을 별도 보관하지 않습니다(업로드 사진·검사지 원본 파일은 분석 직후 즉시
            삭제).
          </li>
        </ul>
        <p className="text-sm">
          전송 시 이름·연락처 등 직접 식별정보는 분리·제거(비식별화) 후 처리하며, 전송된 정보는
          이용자 응답 생성 목적으로만 사용되고 <strong>AI 모델 학습에 사용되지 않습니다.</strong>{" "}
          Google은 Google Cloud의 데이터 처리 및 보안 약관(SSL/TLS 전송 암호화, 접근 통제 등)에 따라
          본 방침과 동등한 수준의 개인정보 보호 조치를 제공합니다. 관련 정책은{" "}
          <a
            href="https://cloud.google.com/terms/data-processing-addendum"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Google Cloud 데이터 처리 약관
          </a>
          을 참고하시기 바랍니다. 이용자는 이 전송에 동의하지 않을 권리가 있으며, 미동의 시 AI 기반
          기능을 이용할 수 없습니다. 동의는 계정 삭제 또는 고객센터 요청으로 언제든지 철회할 수
          있습니다.
        </p>

        <h2 className="text-lg font-semibold">4. 개인정보의 보유 및 이용 기간</h2>
        <p>
          회원 탈퇴(계정 삭제) 시 즉시 파기합니다. 단, 관련 법령에 따라 일정 기간 보존이 필요한
          경우 해당 기간 동안 보관합니다. 업로드한 사진·검사지 원본 파일은 분석 직후 즉시
          삭제됩니다.
        </p>

        <h2 className="text-lg font-semibold">5. 개인정보의 보호 조치</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>건강 데이터는 암호화 저장</li>
          <li>Supabase Row Level Security를 통한 접근 제어</li>
          <li>SSL/TLS 통신 암호화</li>
          <li>접근 권한 최소화 원칙 적용</li>
        </ul>

        <h2 className="text-lg font-semibold">6. 정보주체의 권리</h2>
        <p>
          이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제할 수 있으며, 앱 내 [내 기억 관리]에서
          저장된 기억을 삭제하거나 계정을 영구 삭제하여 개인정보 처리 정지를 요청할 수 있습니다.
        </p>

        <h2 className="text-lg font-semibold">7. 개인정보 보호책임자</h2>
        <p>
          LumiBreeze Co., Ltd. (주식회사 루미브리즈)
          <br />
          이메일: privacy@oncocare.ai
        </p>
      </div>
    </div>
  );
}
