import FooterNav from '@/components/footer-nav';
import ReadingBoard from '@/components/reading-board';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-10">
      <ReadingBoard />
      <FooterNav />
    </div>
  );
}