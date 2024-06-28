import Header from './_components/Header';
import { ReservationProvider } from './_components/ReservationContext';
import './_styles/globals.css';

export const metadata = {
  title: {
    template: '%s/the wild oasis',
    default: 'the wild oasis website',
  },
  description: 'luxurious cabin hotel',
};
import { Josefin_Sans } from 'next/font/google';
const josefin = Josefin_Sans({
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  bg-primary-950  text-primary-100 flex flex-col min-h-screen antialiased relative `}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid ">
          <main className="max-w-7xl mx-auto w-full ">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
