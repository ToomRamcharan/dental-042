import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Save N Smiles | Premium Dental Care in Hyderabad',
  description: 'Save N Smiles offers premium dental care in Hyderabad, Telangana. Expert dentists and modern technology. Book now!',
  openGraph: { title: 'Save N Smiles | Premium Dental Care', description: 'Expert dental care in Hyderabad', type: 'website', locale: 'en_IN' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
