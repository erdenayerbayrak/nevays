import Header from './header';
import Footer from './footer';
import StickyContactBar from './sticky-contact-bar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <StickyContactBar />
    </div>
  );
}