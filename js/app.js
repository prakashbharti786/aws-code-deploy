let defaultTheme = 'light'
const root = document.documentElement
const themeBtn = document.getElementById('themeChanger')
themeBtn.addEventListener('click', handleThemeUpdate)

function handleThemeUpdate(e) {
  if(defaultTheme === 'light') {
    // dark
    root.style.setProperty('--color-theme', 'rgba(var(--color-dark))')
    root.style.setProperty('--color-theme-contrast', 'rgba(var(--color-light))')
    root.style.setProperty('--color-app-text', 'rgba(var(--color-light-text))')
    root.style.setProperty('--color-app-text-secondary', 'rgba(var(--color-light-secondary-text))')

    root.style.setProperty('--color-app-bar', 'rgba(var(--color-dark-app-bar))')
    root.style.setProperty('--color-app-status-bar', 'rgba(var(--color-dark-status-bar))')

    root.style.setProperty('--color-app-background', 'rgba(var(--color-dark-background))')
    root.style.setProperty('--color-app-card-background', 'rgba(var(--color-dark--card-background))')

    root.style.setProperty('--color-app-disable', 'rgba(var(--color-light-disable))')
    root.style.setProperty('--color-app-divider', 'rgba(var(--color-light-divider))')

    defaultTheme = 'dark'
  } else {
    // light
    root.style.setProperty('--color-theme', 'rgba(var(--color-light))')
    root.style.setProperty('--color-theme-contrast', 'rgba(var(--color-dark))')
    root.style.setProperty('--color-app-text', 'rgba(var(--color-dark-text))')
    root.style.setProperty('--color-app-text-secondary', 'rgba(var(--color-dark-secondary))')

    root.style.setProperty('--color-app-bar', 'rgba(var(--color-light-app-bar))')
    root.style.setProperty('--color-app-status-bar', 'rgba(var(--color-light-status-bar))')

    root.style.setProperty('--color-app-background', 'rgba(var(--color-light-background))')
    root.style.setProperty('--color-app-card-background', 'rgba(var(--color-light--card-background))')

    root.style.setProperty('--color-app-disable', 'rgba(var(--color-dark-disable))')
    root.style.setProperty('--color-app-divider', 'rgba(var(--color-dark-divider))')
    defaultTheme = 'light'
  }
}
