import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#025082', color: '#fff' }}>
      <div style={{ padding: '60px 0' }}>
        <Container size="2xl">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
            <img
              src="/r2-logo.png"
              alt="R²"
              style={{
                height: 40,
                width: 'auto',
                filter: 'brightness(0) invert(1)',
              }}
            />
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/services/the-forge" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>
                The Forge
              </Link>
              <Link href="/services/agent-factory" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>
                Agent Factory
              </Link>
              <Link href="/services/process-automation" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>
                Process Automation
              </Link>
              <Link href="/services/advisory" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>
                Advisory
              </Link>
              <Link href="/industries" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>
                Industries
              </Link>
              <Link href="/insights" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>
                Insights
              </Link>
              <Link href="/workshop" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>
                Workshop
              </Link>
              <Link href="/about" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>
                About
              </Link>
              <Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>
                Contact
              </Link>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
              © {year} R² Solutions. All rights reserved.
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}


