import { Inter } from 'next/font/google';
import '@/assets/styles/globals.css';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';
import { ThemeProvider } from 'next-themes';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
         className={`${inter.className} antialiased`}>
          <ThemeProvider 
          attribute= 'class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
          >
             {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
