import "./_styles/frontStage.css";

export const metadata = {
  title: "線上商店 - 首頁",
  description: "歡迎來到我們的線上商店",
};

export default function FrontStageLayout({ children }) {
  return (
    <div className="front-stage-layout">
      {children}
    </div>
  );
}
