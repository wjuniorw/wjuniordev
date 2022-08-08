
const colors = {
  primary: '#2c3e50',
  secondary: '#18bc9c',
  link: '#62ffda',
}

const lightTheme = {
  colors,
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  intro: {
    title: {
      color: '#FAFAFA',
      font: '"Open Sans", sans-serif',
    },
    header: {
      background: colors.primary,
    },
    background: 'rgb(24, 188, 156) none repeat scroll 0% 0% / cover',
  },
  drawer: {
    text: '#757575',
    background: '#fafafa',
    item: {
      backgroud: '#e0e0e0',
    }
  },
  footer: {
    text: '#9e9e9e',
    link: '#62ffda',
    secondLink: '#29636d',
    background: colors.primary,
  }
}

export type LightTheme = typeof lightTheme
export default lightTheme
