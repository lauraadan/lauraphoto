import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Instagram, Menu, X, Mail, MapPin } from 'lucide-react';
import './styles.css';

const photos = [
  { id: 1, title: 'Nocturna', category: 'Retrato', year: '2026', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85' },
  { id: 2, title: 'Entre luces', category: 'Editorial', year: '2025', src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85' },
  { id: 3, title: 'Barcelona', category: 'Calle', year: '2026', src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85' },
  { id: 4, title: 'Silencio', category: 'Retrato', year: '2025', src: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1200&q=85' },
  { id: 5, title: 'Movimiento', category: 'Danza', year: '2026', src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85' },
  { id: 6, title: 'Materia', category: 'Artística', year: '2025', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=85' },
  { id: 7, title: 'After hours', category: 'Eventos', year: '2026', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85' },
  { id: 8, title: 'La pausa', category: 'Documental', year: '2025', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { id: 9, title: 'Contraluz', category: 'Retrato', year: '2026', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85' },
];

const filters = ['Todos', 'Retrato', 'Editorial', 'Calle', 'Danza', 'Artística', 'Eventos', 'Documental'];

function App() {
  const [filter, setFilter] = useState('Todos');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const visible = filter === 'Todos' ? photos : photos.filter(p => p.category === filter);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => document.body.style.overflow = '';
  }, [selected]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <button className="brand" onClick={() => go('top')} aria-label="Inicio">LA<span>.</span></button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <button onClick={() => go('work')}>Trabajo</button>
          <button onClick={() => go('about')}>Sobre mí</button>
          <button onClick={() => go('contact')}>Contacto</button>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">FOTOGRAFÍA · BARCELONA</p>
            <h1>Mirar.<br/><em>Sentir.</em><br/>Contar.</h1>
            <p className="hero-text">Fotografía de personas, lugares y momentos que merecen quedarse un poco más.</p>
            <button className="circle-link" onClick={() => go('work')} aria-label="Ver portfolio"><ArrowDown size={21}/></button>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90" alt="Espacio creativo" />
            <span className="image-caption">01 / 09</span>
          </div>
        </section>

        <section className="intro">
          <p className="section-label">01 — SOBRE EL TRABAJO</p>
          <div>
            <p className="intro-title">Fotografío desde la curiosidad. Busco <em>lo que sucede entre las cosas</em>, la emoción antes del gesto perfecto y esa pequeña verdad que aparece cuando dejamos de posar.</p>
            <button className="text-link" onClick={() => go('about')}>Conocer más <ArrowUpRight size={17}/></button>
          </div>
        </section>

        <section id="work" className="work">
          <div className="section-head">
            <div>
              <p className="section-label">02 — PORTFOLIO</p>
              <h2>Selección <em>reciente</em></h2>
            </div>
            <span className="count">{String(visible.length).padStart(2, '0')} fotografías</span>
          </div>

          <div className="filters">
            {filters.map(f => <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}
          </div>

          <div className="gallery">
            {visible.map((photo, i) => (
              <article className={`photo-card card-${i % 5}`} key={photo.id} onClick={() => setSelected(photo)}>
                <div className="photo-wrap">
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                  <div className="photo-overlay"><span>Ver proyecto</span><ArrowUpRight size={19}/></div>
                </div>
                <div className="photo-meta">
                  <span>{photo.title}</span><span>{photo.category} · {photo.year}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85" alt="Retrato editorial" loading="lazy"/>
          </div>
          <div className="about-copy">
            <p className="section-label">03 — SOBRE MÍ</p>
            <h2>Hola, soy <em>Laura.</em></h2>
            <p>Fotógrafa y creadora visual. Me interesan las historias que tienen textura, los cuerpos que hablan y los espacios que guardan memoria.</p>
            <p>Trabajo entre el retrato, la fotografía documental, los eventos y proyectos personales. Mi forma de trabajar es cercana, intuitiva y muy atenta a la luz.</p>
            <div className="about-facts">
              <span>Barcelona, ES</span><span>Disponible para viajar</span><span>ES / EN</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="section-label">04 — CONTACTO</p>
          <div className="contact-main">
            <h2>¿Hacemos algo<br/><em>juntas?</em></h2>
            <a className="email" href="mailto:hola@lauraadan.com">hola@lauraadan.com <ArrowUpRight size={24}/></a>
          </div>
          <div className="contact-bottom">
            <span><MapPin size={15}/> Barcelona, España</span>
            <a href="https://instagram.com/lauraadan__" target="_blank" rel="noreferrer"><Instagram size={17}/> @lauraadan__</a>
          </div>
        </section>
      </main>

      <footer><span>© 2026 LAURA ADÁN</span><span>FOTOGRAFÍA & DIRECCIÓN CREATIVA</span><button onClick={() => go('top')}>Volver arriba <ArrowUp size={15}/></button></footer>

      {selected && <div className="lightbox" onClick={() => setSelected(null)}>
        <button className="close-lightbox" onClick={() => setSelected(null)} aria-label="Cerrar"><X size={25}/></button>
        <div className="lightbox-content" onClick={e => e.stopPropagation()}>
          <img src={selected.src} alt={selected.title}/>
          <div><span>{selected.category} · {selected.year}</span><h3>{selected.title}</h3></div>
        </div>
      </div>}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);