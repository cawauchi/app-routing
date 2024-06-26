import '@/app/ui/global.css';
import { notoSans } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
