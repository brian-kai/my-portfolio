import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVE DIVE Hub",
  description:
    "以 IVE 為主題的粉絲網站，整合成員介紹、音樂作品、互動任務與粉絲測驗的前端作品。",
};

export default function IveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
