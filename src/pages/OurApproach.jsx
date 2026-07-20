import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { APPROACH } from '../lib/content'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import { PHOTOS } from '../lib/photos'

export default function OurApproach() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <Reveal>
            <span className="kicker centered">{APPROACH.kicker}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 style={{ marginTop: 20 }}>
              {APPROACH.h2a}<br />
              <span className="gold-italic">{APPROACH.h2b}</span>
            </h1>
          </Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 64, alignItems: 'start' }} className="approach-grid">
            {/* sticky photo rail */}
            <Reveal className="approach-rail">
              <Photo src={PHOTOS.library} alt="Rigorous evaluation" ratio="4 / 5">
                <span className="photo-badge" style={{ bottom: 18, left: 18 }}>Five steps. One right hire.</span>
              </Photo>
            </Reveal>

            {/* steps */}
            <div style={{ maxWidth: 620 }}>
              {APPROACH.steps.map((step, i) => (
                <Fragment key={step.num}>
                  {i > 0 && (
                    <div aria-hidden="true" style={{ width: 1, height: 40, background: 'var(--gold)', opacity: 0.35, marginLeft: 32 }} />
                  )}
                  <Reveal delay={Math.min(i, 2)}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 26 }}>
                      <div
                        style={{
                          width: 64, height: 64, borderRadius: 16, flexShrink: 0,
                          background: 'rgba(244,181,45,0.14)', border: '1px solid rgba(244,181,45,0.4)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, color: 'var(--gold-deep)',
                        }}
                      >
                        {step.num}
                      </div>
                      <div style={{ flex: 1, minWidth: 0, paddingTop: 4 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 30, fontWeight: 600, letterSpacing: 0, color: 'var(--navy)' }}>
                            {step.title}
                          </h2>
                          <span style={{ color: 'var(--gold-deep)' }}><Icon name={step.icon} size={20} /></span>
                        </div>
                        <p className="muted" style={{ marginTop: 8, fontSize: 15 }}>{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <span className="ghost-word">HYRO</span>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <h2 className="section-h2">
              Let&apos;s define <span className="gold-italic">success together.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginTop: 32 }}>
              <Link to="/partner" className="btn btn-primary">
                Partner With Us <Icon name="arrow" size={14} />
              </Link>
              <Link to="/jobs" className="btn btn-ghost">
                Submit Your Profile
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
