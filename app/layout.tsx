import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className='max-w-[1440px] w-full'>
          <Header/>
            {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
