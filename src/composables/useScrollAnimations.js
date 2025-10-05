import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimations() {
  const scrollY = ref(0)
  const isScrolled = ref(false)
  const scrollDirection = ref('down')
  const scrollVelocity = ref(0)
  let lastScrollY = 0
  let ticking = false

  // Enhanced parallax effect calculation
  const getParallaxOffset = (speed = 0.5) => {
    return `${scrollY.value * speed}px`
  }

  // Advanced scroll position tracking
  const updateScrollPosition = () => {
    const currentScrollY = window.scrollY
    scrollVelocity.value = Math.abs(currentScrollY - lastScrollY)
    scrollDirection.value = currentScrollY > lastScrollY ? 'down' : 'up'
    scrollY.value = currentScrollY
    isScrolled.value = currentScrollY > 100
    lastScrollY = currentScrollY
    ticking = false
  }

  // Throttled scroll handler
  const requestScrollTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition)
      ticking = true
    }
  }

  // Enhanced Intersection Observer with multiple animation types
  const observeElements = () => {
    const observerOptions = {
      threshold: [0.1, 0.3, 0.5, 0.7],
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationType = entry.target.dataset.animation || 'fade-in-up'
          const delay = entry.target.dataset.delay || '0ms'
          const duration = entry.target.dataset.duration || '600ms'
          
          entry.target.style.animationDelay = delay
          entry.target.style.animationDuration = duration
          entry.target.classList.add(`animate-${animationType}`)
          
          // Add stagger effect for child elements
          const staggerChildren = entry.target.dataset.stagger
          if (staggerChildren) {
            const children = entry.target.querySelectorAll(staggerChildren)
            children.forEach((child, index) => {
              child.style.animationDelay = `${parseInt(delay) + (index * 100)}ms`
              child.classList.add('animate-fade-in-up')
            })
          }
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el)
    })

    return observer
  }

  // Staggered animation for multiple elements
  const staggerAnimation = (selector, delay = 100) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * delay}ms`
      el.classList.add('animate-fade-in-up')
    })
  }

  // Smooth scroll to element
  const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // Advanced reveal animations
  const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.reveal')
    
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active')
      }
    })
  }

  // Counter animation
  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter')
    const speed = 200

    counters.forEach(counter => {
      const animate = () => {
        const value = +counter.getAttribute('data-target')
        const data = +counter.innerText
        const time = value / speed
        
        if (data < value) {
          counter.innerText = Math.ceil(data + time)
          setTimeout(animate, 1)
        } else {
          counter.innerText = value
        }
      }
      animate()
    })
  }

  // Add scroll listener
  onMounted(() => {
    window.addEventListener('scroll', requestScrollTick, { passive: true })
    window.addEventListener('scroll', revealOnScroll, { passive: true })
    updateScrollPosition()
    
    // Initialize intersection observer
    setTimeout(() => {
      observeElements()
    }, 100)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', requestScrollTick)
    window.removeEventListener('scroll', revealOnScroll)
  })

  return {
    scrollY,
    isScrolled,
    scrollDirection,
    scrollVelocity,
    getParallaxOffset,
    staggerAnimation,
    scrollToElement,
    observeElements,
    animateCounters,
    revealOnScroll
  }
}

// Utility function for advanced scroll effects
export function useAdvancedScrollEffects() {
  let ticking = false

  const updateParallaxElements = () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll('.parallax-element')
    
    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5
      const yPos = -(scrolled * speed)
      element.style.transform = `translateY(${yPos}px)`
    })
    
    ticking = false
  }

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallaxElements)
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', requestTick, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', requestTick)
  })

  return {
    updateParallaxElements
  }
}
