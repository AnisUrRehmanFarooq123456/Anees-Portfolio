import "./globals.css";
export const metadata = {
  title: "Anees Portfolio",
  description: "Frontend Developer Portfolio",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
