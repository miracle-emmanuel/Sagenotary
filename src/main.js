import './style.css'

// Reveal-on-scroll for elements marked [data-reveal]
const revealEls = document.querySelectorAll('[data-reveal]')

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )

  revealEls.forEach((el) => observer.observe(el))
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'))
}

// Close-enough fallback: reveal anything already in view on load (e.g. hero)
window.addEventListener('load', () => {
  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      el.classList.add('is-visible')
    }
  })
})
