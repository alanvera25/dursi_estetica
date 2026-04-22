import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'D’Ursi Estética';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          background: '#CBD3C5',
          color: '#2B4533',
          padding: '80px',
          fontFamily: 'Georgia, serif'
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          D’Ursi Estética · Buenos Aires
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 120,
              lineHeight: 1,
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '-0.02em'
            }}
          >
            Belleza
          </div>
          <div style={{ fontSize: 120, lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.02em' }}>
            consciente,
          </div>
          <div style={{ fontSize: 52, marginTop: 20, color: '#A08D84', letterSpacing: '0.02em' }}>
            resultados reales.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 20,
            letterSpacing: '0.3em',
            textTransform: 'uppercase'
          }}
        >
          <div>Medicina estética</div>
          <div>@dursi.estetica</div>
        </div>
      </div>
    ),
    size
  );
}
